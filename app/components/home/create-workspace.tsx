"use client";

import { createWorkspace } from "@/utils/db-actions";
import React, { useState } from "react";

interface Props {
  userName: string;
  userId: string;
  userEmail: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export default function CreateWorkspaceComponent({
  userName,
  userId,
  userEmail,
  setMessage,
}: Props) {
  const [workspaceName, setWorkspaceName] = useState<string>("");
  const [workspacePassword, setWorkspacePassword] = useState<string>("");

  const createWorkspaceFunction = async (e: React.FormEvent) => {
    e.preventDefault();

    if (workspaceName.trim() === "") {
      setMessage("Please enter a valid Workspace name and/or password");
      return;
    }

    try {
      await createWorkspace(
        workspaceName,
        workspacePassword,
        userName,
        userEmail,
        userId,
      );

      setMessage("Workspace created successfully!");
      setWorkspaceName("");
      setWorkspacePassword("");
    } catch (error) {
      console.error(error);

      setMessage(
        "Error while trying to create new Workspace, try again later.",
      );
    }
  };

  return (
    <div className="flex flex-col gap-3 px-20">
      <h2 className="text-xl font-bold">Create a new Workspace</h2>

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
          onClick={createWorkspaceFunction}
        >
          Create
        </button>
      </form>
    </div>
  );
}
