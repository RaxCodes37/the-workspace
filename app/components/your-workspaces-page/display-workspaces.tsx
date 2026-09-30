"use client";

import { ViewUserWorkspaces } from "@/utils/interfaces";

interface Props {
  workspaces: ViewUserWorkspaces[];
}

export default function DisplayWorkspaces({ workspaces }: Props) {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-2xl font-bold mt-5">Your Workspaces</h1>
      <div className="mt-15 flex flex-col gap-5">
        {workspaces.map((workspace) => (
          <div
            key={workspace.workspaceId}
            className="border border-[#3d3d3d] bg-[#272525] duration-400 hover:bg-[#2f2d2d] hover:scale-110 w-70 py-2 mt-1 rounded-md font-semibold"
          >
            <p>{workspace.workspaceName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
