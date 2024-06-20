import { createClient } from "../../utils/supabase/server";
import { redirect } from "next/navigation";
import { signOut } from "./actions";
import { EllipsisVertical, LogOut, User } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/shadcn/ui/dropdown-menu";
import SignOutDropdownItem from "@/components/navigation/sign-out-dropdown-item";

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
      <form className="w-full flex justify-center items-center border-t-8 border-t-orange-300">
        <div className="bg-orange-300 text-orange-900 pt-0 px-4 pb-2 gap-1 rounded-b-lg space-x-1">
          Logged in as{" "}
          <Link href="/portal/profile">
            <strong>{data.user.email}</strong>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical className="h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href="/portal/profile">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>
                  <User className="h-4" />
                  <span>Edit Profile</span>
                </DropdownMenuItem>
              </Link>
              <SignOutDropdownItem />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </form>
      {children}
    </>
  );
}
