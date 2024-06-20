import Input from "@/components/input";
import { signInWithEmail } from "./actions";
import { Button } from "@/components/shadcn/ui/button";
import ServerMessageToast from "@/components/server-helpers/server-message-toast";
import SubmitButton from "@/components/server-helpers/submit-button";

export default function LoginPage({
  searchParams: { message },
}: {
  searchParams: { message?: string };
}) {
  return (
    <form
      action={signInWithEmail}
      className="page-container flex flex-col justify-center items-center space-y-4"
    >
      <ServerMessageToast message={message} />
      <h1 className="text-3xl">Staff/Partner portal</h1>
      <div className="space-x-4">
        <label htmlFor="email">Email:</label>
        <Input id="email" name="email" type="email" required />
      </div>
      <SubmitButton>Log in</SubmitButton>
    </form>
  );
}
