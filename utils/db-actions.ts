"use server";

import { memberTable, workspaceTable } from "@/schema";
import { db } from "..";
import { and, eq, sql } from "drizzle-orm";
import { ViewUserWorkspaces } from "./interfaces";

export const createWorkspace = async (
  workspaceName: string,
  workspacePassword: string,
  userName: string,
  userEmail: string,
  userId: string,
) => {
  //Creates workspace
  const newWorkspace = await db
    .insert(workspaceTable)
    .values({
      workspaceName,
      workspacePassword,
      workspaceCreator: userName,
    })
    .returning({
      workspaceId: workspaceTable.workspaceId,
    });

  //Increasing member count to include creator
  await db
    .update(workspaceTable)
    .set({
      memberCount: sql`${workspaceTable.memberCount}+ 1`,
    })
    .where(eq(workspaceTable.workspaceId, newWorkspace[0].workspaceId));

  //Adds creator to member table and gives creator his role.
  await db.insert(memberTable).values({
    memberName: userName,
    memberId: userId,
    memberEmail: userEmail,
    partOf: newWorkspace[0].workspaceId,
    partOfName: workspaceName,
    role: "creator",
  });
};

export const getUserWorkspaces = async (userId: string) => {
  const partOfWorkspace = await db
    .select({
      workspaceId: memberTable.partOf,
      workspaceName: memberTable.partOfName,
    })
    .from(memberTable)
    .where(eq(memberTable.memberId, userId));

  return partOfWorkspace as ViewUserWorkspaces[];
};

export const joinWorkspace = async (
  workspaceName: string,
  workspacePassword: string,
  userName: string,
  userEmail: string,
  userId: string,
) => {
  //Checking to see if workspace exists
  const getWorkspace = await db
    .select({
      workspaceName: workspaceTable.workspaceName,
      workspacePassword: workspaceTable.workspacePassword,
      workspaceId: workspaceTable.workspaceId,
    })
    .from(workspaceTable)
    .where(eq(workspaceTable.workspaceName, workspaceName));

  const checkForUser = await db
    .select()
    .from(memberTable)
    .where(
      and(
        eq(memberTable.partOfName, workspaceName),
        eq(memberTable.memberName, userName),
      ),
    );

  if (
    //Workspace name was already checked when looking for workspace
    getWorkspace.length > 0 &&
    getWorkspace[0].workspacePassword === workspacePassword &&
    checkForUser.length < 1 //User can't already be a part of workspace
  ) {
    await db
      .update(workspaceTable)
      .set({
        memberCount: sql`${workspaceTable.memberCount}+ 1`,
      })
      .where(eq(workspaceTable.workspaceId, getWorkspace[0].workspaceId));

    //Adds member to member table and gives his default role.
    await db.insert(memberTable).values({
      memberName: userName,
      memberId: userId,
      memberEmail: userEmail,
      partOf: getWorkspace[0].workspaceId,
      partOfName: workspaceName,
    });
  } else {
    return
  }
};
