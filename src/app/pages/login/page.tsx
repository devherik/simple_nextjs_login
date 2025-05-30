import Form from "next/form";
import { login } from "@/app/posts/actions";

export default function Login() {
  return (
    <div className={`flex p-6 justify-center items-center h-screen`}>
      <div className="bg-blue-800 p-6 rounded-2xl shadow-md">
        <Form
          className={`flex flex-col gap-2 justify-around p-4`}
          action={login}
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
          <button className={`m-1 text-[#1e40af] bg-[#fffcff] p-2.5 rounded-md shadow-md`} type="submit">
            Sign In
          </button>
        </Form>
      </div>
    </div>
  );
}
