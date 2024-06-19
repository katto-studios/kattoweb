"use client";

import { useRouter } from "next/navigation";
import { Button } from "../shadcn/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} variant="ghost" className="space-x-2">
      <ArrowLeft className="w-4 h-4" />
      <span>Back</span>
    </Button>
  );
}
