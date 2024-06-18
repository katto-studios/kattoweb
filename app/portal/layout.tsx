import { createClient } from "../../utils/supabase/server";
import { redirect } from "next/navigation";
import { signOut } from "./actions";

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
      <form className="w-screen flex justify-center items-center border-t-8 border-t-orange-300 ">
        <div className="bg-orange-300 pt-0 px-4 pb-2 gap-1 rounded-b-lg space-x-2">
          Logged in as <strong>{data.user.email}</strong>
          <button
            formAction={signOut}
            className="bg-orange-500 px-2 py-1 rounded text-orange-800"
          >
            logout
          </button>
        </div>
      </form>
      {children}
    </>
  );
}
