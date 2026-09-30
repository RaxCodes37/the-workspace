"use server";

import { memberTable, workspaceTable } from "@/schema";
import { db } from "..";
import { eq, sql } from "drizzle-orm";
import { ViewUserWorkspaces } from "./interfaces";

export const createWorkspace = async (
  workspaceName: string,
  userName: string,
  userEmail: string,
  userId: string,
) => {
  //Creates workspace
  const newWorkspace = await db
    .insert(workspaceTable)
    .values({
      workspaceName,
      workspaceCreator: userName,
    })
    .returning({
      workspaceId: workspaceTable.workspaceId,
    });

  //Increasing member count to include creator
  await db
    .update(workspaceTable)
    .set({
      memberCount: sql`+ 1`,
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
      workspaceName: memberTable.partOfName,
    })
    .from(memberTable)
    .where(eq(memberTable.memberId, userId));

  return partOfWorkspace as ViewUserWorkspaces[];
};
