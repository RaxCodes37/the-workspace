"use client";

import { ViewUserWorkspaces } from "@/utils/interfaces";
import { useRouter } from "next/navigation";

interface Props {
  workspaces: ViewUserWorkspaces[];
}

export default function DisplayWorkspaces({ workspaces }: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-2xl font-bold mt-5">Your Workspaces</h1>
      <div className="mt-15 border border-[#3d3d3d] bg-[#1f1e1e] w-75 rounded-md flex flex-col items-center gap">
        <div className="pb-3.5 mt-1">
          {workspaces.map((workspace) => (
            <div
              key={workspace.workspaceId}
              className="border border-[#3d3d3d] bg-[#272525] duration-400 hover:bg-[#2f2d2d] hover:scale-103 w-70 py-2 mt-3 rounded-md font-semibold"
            >
              <p>{workspace.workspaceName}</p>
            </div>
          ))}

          <button
            className="border border-[#ff4141] bg-[#c54a4a] duration-400 hover:bg-[#a12c2c] hover:scale-102 w-70 py-2 mt-3 rounded-md font-semibold"
            onClick={router.back}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
