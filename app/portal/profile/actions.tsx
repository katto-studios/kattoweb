"use server";

import { errorMessage } from "@/utils/server-error-handling";
import { createAuthenticatedClient } from "@/utils/supabase/server";
import { profileSchema } from "@/utils/validation/profile";
import { RedirectType, redirect } from "next/navigation";

export async function onUpdateProfile(formData: FormData) {
  const path = "/portal/profile";
  const searchParams = new URLSearchParams();
  try {
    const { userData, supabase } = await createAuthenticatedClient();

    const data = {
      username: formData.get("name"),
      email: formData.get("email"),
      orgName: formData.get("orgName"),
      orgTitle: formData.get("orgTitle"),
    };

    const validatedData = profileSchema.parse(data);

    const { error } = await supabase
      .from("profile")
      .update({
        display_name: validatedData.username,
        email: validatedData.email,
        org_name: validatedData.orgName,
        org_title: validatedData.orgTitle,
      })
      .eq("user_id", userData.user?.id);

    if (error) {
      throw new Error(error.message);
    }
    searchParams.set("message", "Profile updated successfully");
  } catch (error) {
    searchParams.set("message", errorMessage(error));
  }
  redirect(path + "?" + searchParams.toString(), RedirectType.replace);
}
