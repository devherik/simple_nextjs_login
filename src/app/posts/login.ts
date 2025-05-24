'use server'
import { redirect } from "next/navigation";

export async function getLogin(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    redirect("/dashboard");
}