import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

export type InputProps = ComponentProps<"input">;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input className={cn(className, "border rounded-lg p-2")} {...props} />
  );
}
