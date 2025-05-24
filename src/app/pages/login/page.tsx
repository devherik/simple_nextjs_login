import Form from "next/form";
import { getLogin } from "@/app/posts/login";

export default function Login() {
  return (
    <div className={`flex p-6 justify-center items-center h-screen`}>
      <Form
        className={`flex flex-col gap-2 justify-around p-4`}
        action={getLogin}
      >
        <input
          className={`m-1`}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className={`m-1`}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button className={`m-1`} type="submit">
          Login
        </button>
      </Form>
    </div>
  );
}
