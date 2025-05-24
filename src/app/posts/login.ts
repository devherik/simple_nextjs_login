'use server'
import { redirect } from "next/navigation";

export async function getLogin(formData: FormData) {
    const name = formData.get("name");
    const password = formData.get("password");
    // logic to login and get the user id
    const data = {id: name};
    redirect(`/dashboard/${data.id}`);
}