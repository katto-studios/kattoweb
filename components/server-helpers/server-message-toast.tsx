"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { debounce } from "lodash";

export type ServerMessageToastProps = {
  message?: string;
};

const debouncedToast = debounce(toast, 100);

/**
 * Display a toast message from the server. Message should be from the `message` search parameter.
 * This toast is debounced to prevent multiple toasts from appearing at once.
 * @param message The message to display
 */
export default function ServerMessageToast({
  message,
}: ServerMessageToastProps) {
  useEffect(() => {
    if (!message) return;
    debouncedToast(message);
  }, [message]);
  return null;
}
