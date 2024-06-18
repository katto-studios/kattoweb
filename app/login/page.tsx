import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <form className="container mx-auto min-h-[70vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl">Staff/Partner portal</h1>
      <div className="space-x-4">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login} className="border p-2">
          Log in
        </button>
        <button formAction={signup} className="border p-2">
          Sign up
        </button>
      </div>
    </form>
  );
}
