import Input from "@/components/input";
import { Button } from "@/components/shadcn/ui/button";
import { Label } from "@/components/shadcn/ui/label";
import { buildGravatarUrl } from "@/utils/gravatar";
import { createAuthenticatedClient } from "@/utils/supabase/server";
import Image from "next/image";
import { onUpdateProfile } from "./actions";
import FormStateToast from "@/components/server-helpers/server-message-toast";
import BackButton from "@/components/navigation/back";
import SubmitButton from "@/components/server-helpers/submit-button";

export default async function ProfilePage({
  searchParams: { message },
}: {
  searchParams: { message?: string };
}) {
  const { userData, supabase } = await createAuthenticatedClient();

  const { data: profile, error: profileError } = await supabase
    .from("profile")
    .select("*")
    .eq("user_id", userData.user.id)
    .single();

  if (profileError) {
    console.error(profileError);
  }

  return (
    <div className="page-container space-y-4">
      <BackButton />
      <FormStateToast message={message} />
      <h1 className="text-5xl font-light text-slate-700">Profile</h1>
      <p className="text-lg font-medium text-slate-500">
        Your profile is visible to other members of the team.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="space-y-2 flex flex-col items-center">
          <Label htmlFor="avatar">Profile Picture</Label>
          <p className="text-xs font-medium">
            Avatar from{" "}
            <a href="https://gravatar.com" className="text-blue-600">
              gravatar.com
            </a>{" "}
            based on your work/public email address.
          </p>
          {profile?.email ? (
            <Image
              id="avatar"
              src={buildGravatarUrl(profile?.email, 200).href}
              alt="Avatar"
              width={200}
              height={200}
              className="rounded-full"
            />
          ) : null}
        </div>
        <form
          action={onUpdateProfile}
          className="space-y-6 container max-w-lg m-0 p-0"
        >
          <div className="space-y-2 flex flex-col">
            <Label htmlFor="name">Display Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              defaultValue={profile?.display_name ?? undefined}
              placeholder="Your display name"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <Label htmlFor="email">Work/Public Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              defaultValue={profile?.email ?? undefined}
              placeholder="Your public email address"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <Label htmlFor="email">Organization Name</Label>
            <Input
              type="text"
              name="orgName"
              id="orgName"
              defaultValue={profile?.org_name ?? undefined}
              placeholder="Your organization name"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <Label htmlFor="email">Organization Title</Label>
            <Input
              type="text"
              name="orgTitle"
              id="orgTitle"
              defaultValue={profile?.org_title ?? undefined}
              placeholder="The title that you hold at work i.e. Manager, SWE I, etc."
            />
          </div>
          <SubmitButton>Save</SubmitButton>
        </form>
      </div>
    </div>
  );
}
