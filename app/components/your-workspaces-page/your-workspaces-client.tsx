"use client";

import { getUserWorkspaces } from "@/utils/db-actions";
import { ViewUserWorkspaces } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import DisplayWorkspaces from "./display-workspaces";

interface Props {
  userId: string;
}

export default function YourWorkspacesClient({ userId }: Props) {
  const [workspaces, setWorkspaces] = useState<ViewUserWorkspaces[]>([])
  
  useEffect(() => {
    const getWorkspaces = async () => {
      setWorkspaces(await getUserWorkspaces(userId));
    }

    getWorkspaces()
  }, []);

  return (
    <div>
      <DisplayWorkspaces workspaces={workspaces}/>
    </div>
  );
}
