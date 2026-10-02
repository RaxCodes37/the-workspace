"use client";

import React from "react";
import CreateWorkspaceComponent from "./create-workspace";
import JoinWorkspaceComponent from "./join-workspace";

interface Props {
  userName: string
  userId: string;
  userEmail: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
}

export default function WorkspaceForm({userName, userId, userEmail, setMessage}: Props) {
  return (
    <div className="border border-[#3d3d3d] bg-[#272525]  gap-3 w-85 sm:w-100 text-center rounded-md py-5">
      <CreateWorkspaceComponent userName={userName} userId={userId} userEmail={userEmail} setMessage={setMessage}/>

      <hr className="my-5 border-[#3d3d3d]"/>

      <JoinWorkspaceComponent userName={userName} userId={userId} userEmail={userEmail} setMessage={setMessage}/>
    </div>
  )
}
