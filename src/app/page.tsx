import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard/main");
  // return (
  //   <main>
  //     <h1>Hello World</h1>
  //   </main>
  // );
}
