import { redirect } from "next/navigation";

import { createClient } from "../../utils/supabase/server";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-[70vh] container mx-auto p-8">
      <h1 className="text-5xl font-light">Welcome back, {data.user.email}</h1>
    </div>
  );
}
