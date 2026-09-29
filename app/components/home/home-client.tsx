"use client";

import { useRouter } from "next/navigation";
import WorkspaceForm from "./workspace-form";
import { useState } from "react";

interface Props {
  userName: string
  userId: string;
  userEmail: string
}

export default function HomeClient({userName, userId, userEmail}: Props) {
  const router = useRouter();

  const [message, setMessage] = useState<string>("");

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mt-5">
        Welcome to <span className="underline">The Workspace</span>
      </h1>
      <div className="mt-25 flex flex-col items-center gap-10">
        <button
          onClick={() => router.push("/your-workspaces")}
          className="border border-[#3d3d3d] bg-[#272525] duration-400 hover:bg-[#2f2d2d] hover:scale-110 w-70 py-2 mt-1 rounded-md font-semibold"
        >
          View your Workspaces
        </button>

        <WorkspaceForm userName={userName} userId={userId} userEmail={userEmail} setMessage={setMessage}/>
      </div>
    </div>
  );
}
