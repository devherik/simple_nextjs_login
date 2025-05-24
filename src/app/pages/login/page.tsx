import { get } from "http";
import Form from "next/form";
import { getLogin } from "@/app/posts/login";

export default function Login() {
  return (
    <div
      className={`p-6 grid grid-cols-2 gap-1 justify-center items-center h-screen`}
    >
      <div className={`text-center`}>Panel Background</div>
      <div>
        <Form action={getLogin}>
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </Form>
      </div>
    </div>
  );
}
