import { ZodError } from "zod";

/**
 * Get a human-readable error message from an unknown error
 * @param error The error to get the message from
 * @returns The error message or a generic message if the error is not recognized
 */
export function errorMessage(error: unknown) {
  if (error instanceof ZodError) {
    const message = error.errors.map((err) => err.message).join(", ");
    return message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "Something went wrong";
}
