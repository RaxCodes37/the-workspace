"use client";

import { joinWorkspace } from "@/utils/db-actions";
import React, { useState } from "react";

interface Props {
  userName: string;
  userId: string;
  userEmail: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export default function JoinWorkspaceComponent({
  userName,
  userId,
  userEmail,
  setMessage,
}: Props) {
  const [workspaceName, setWorkspaceName] = useState<string>("");
  const [workspacePassword, setWorkspacePassword] = useState<string>("");

  const joinWorkspaceFunction = async (e: React.FormEvent) => {
    e.preventDefault();

    if (workspaceName.trim() === "") {
      setMessage("Please enter a valid Workspace name and/or password");
      return;
    }

    try {
      await joinWorkspace(
        workspaceName,
        workspacePassword,
        userName,
        userEmail,
        userId,
      );

      setMessage(`Joined ${workspaceName} successfully!`);
      setWorkspaceName("");
      setWorkspacePassword("");
    } catch (error) {
      console.error(error);

      setMessage(
        `Error while trying to join "${workspaceName}", try again later.`,
      );
    }
  };

  return (
    <div className="flex flex-col gap-3 px-20">
      <h2 className="text-xl font-bold">Join a Workspace</h2>

      <form action="" className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Workspace Name"
          className="border border-[#3d3d3d] bg-[#272525] py-1 px-2 rounded-md outline-0 w-full"
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Workspace Password"
          className="border border-[#3d3d3d] bg-[#272525] py-1 px-2 rounded-md outline-0 w-full"
          value={workspacePassword}
          onChange={(e) => setWorkspacePassword(e.target.value)}
          required
        />
        <button
          className="border border-[#3d3d3d] bg-[#272525] duration-400 hover:bg-[#2f2d2d] py-1 px-2 rounded-md font-semibold"
          onClick={joinWorkspaceFunction}
        >
          Join
        </button>
      </form>
    </div>
  );
}
