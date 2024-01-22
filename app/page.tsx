import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { Fragment } from "react";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="p-10">
      {session ? <div>Logged in</div> : <div>Not logged in</div>}
    </div>
  );
}
