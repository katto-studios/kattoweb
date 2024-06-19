"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";

import { createClient } from "../../utils/supabase/server";
import { URL } from "url";

export async function signInWithEmail(formData: FormData) {
  const supabase = createClient();

  const email = formData.get("email") as string;

  const headersList = headers();

  const url = new URL(headersList.get("referer") ?? ""); // to get url
  url.pathname = "/portal";

  const { error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: false,
      emailRedirectTo: url.href,
    },
  });

  if (error) {
    console.log(error);
    redirect("/error");
  }

  redirect("/auth/check-email");
}
