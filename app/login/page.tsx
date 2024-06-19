import Input from "@/components/input";
import { login, signup } from "./actions";
import { Button } from "@/components/shadcn/ui/button";

export default function LoginPage() {
  return (
    <form className="container mx-auto min-h-[70vh] flex flex-col justify-center items-center space-y-4">
      <h1 className="text-3xl">Staff/Partner portal</h1>
      <div className="space-x-4">
        <label htmlFor="email">Email:</label>
        <Input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <Input id="password" name="password" type="password" required />
      </div>
      <div className="space-x-4">
        <Button formAction={login}>Log in</Button>
        <Button formAction={signup}>Sign up</Button>
      </div>
    </form>
  );
}
