"use client";

import { LogOut } from "lucide-react";
import { DropdownMenuItem } from "../shadcn/ui/dropdown-menu";
import { createClient } from "@/utils/supabase/client";

export default function SignOutDropdownItem() {
  const supabase = createClient();

  async function signOut() {
    await supabase.auth.signOut();
    window.location.reload();
  }

  return (
    <DropdownMenuItem onClick={signOut}>
      <LogOut className="h-4" />
      <span>Sign Out</span>
    </DropdownMenuItem>
  );
}
