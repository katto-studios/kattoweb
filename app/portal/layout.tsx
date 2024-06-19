import { createClient } from "../../utils/supabase/server";
import { redirect } from "next/navigation";
import { signOut } from "./actions";
import { LogOut } from "lucide-react";

export default async function Layout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
      <form className="w-screen flex justify-center items-center border-t-8 border-t-orange-300">
        <div className="bg-orange-300 text-orange-900 pt-0 px-4 pb-2 gap-1 rounded-b-lg space-x-1">
          Logged in as <strong>{data.user.email}</strong>
          <button formAction={signOut}>
            <LogOut className="h-3" />
          </button>
        </div>
      </form>
      {children}
    </>
  );
}
