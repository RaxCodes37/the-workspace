"use client"

import React, { useState } from 'react'

export default function JoinWorkspaceComponent() {
  const [workspaceName, setWorkspaceName] = useState<string>("");
  const [workspacePassword, setWorkspacePassword] = useState<string>("");

  const joinWorkspaceFunction = (e: React.FormEvent) => {

  }

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
  )
}
