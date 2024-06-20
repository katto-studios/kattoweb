"use server";

import { RedirectType, redirect } from "next/navigation";
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
      shouldCreateUser: true,
      emailRedirectTo: url.href,
    },
  });

  if (error) {
    const searchParams = new URLSearchParams();
    searchParams.set("message", error.message);
    redirect("/login?" + searchParams.toString(), RedirectType.replace);
  }

  redirect("/auth/check-email");
}
