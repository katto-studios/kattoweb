"use client";
import { Button, ButtonProps } from "../shadcn/ui/button";

import { useFormStatus } from "react-dom";

export type SubmitButtonProps = {};

export default function SubmitButton(props: ButtonProps) {
  const { pending } = useFormStatus();
  return <Button disabled={pending} type="submit" {...props} />;
}
