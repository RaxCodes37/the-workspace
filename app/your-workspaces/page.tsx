import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import YourWorkspacesClient from "../components/your-workspaces-page/your-workspaces-client";

export default async function YourWorkspaces() {
  const session = await getSession();
  if(!session) redirect("/sign-in");
  
  const userId = session.user.id;

  return (
    <YourWorkspacesClient userId={userId}/>
  )
}
