import { redirect } from "next/navigation";


export default function Home() {
  const isLogged = false;
  if (!isLogged) {
    redirect("./pages/login");
  } else {
    redirect("./pages/dashboard");
  }
}
