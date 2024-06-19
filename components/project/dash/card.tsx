import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

export type DashCardProps = ComponentProps<"div">;

export function DashCard({ className, ...props }: DashCardProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-xl border space-y-4 h-96 overflow-y-auto",
        className
      )}
      {...props}
    />
  );
}

export function DashCardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl text-slate-700">{children}</h2>;
}
