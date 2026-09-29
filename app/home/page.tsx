import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import HomeClient from "../components/home/home-client";

export default async function Home() {
  const session = await getSession();
  if(!session) redirect("/sign-in");

  const userName = session.user.name;
  const userId = session.user.id;
  const userEmail = session.user.email;

  return (
    <div>
      <HomeClient userName={userName} userId={userId} userEmail={userEmail}/>
    </div>
  )
}
