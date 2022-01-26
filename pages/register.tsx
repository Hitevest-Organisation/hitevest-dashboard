import Link from "next/link";
import AuthLayout from "../layouts/AuthLayout";

export default function RegistrationPage() {
  return (
    <AuthLayout
      page="Login"
      showBackgroud={false}
      title="Register to get started"
      backLink="https://hitevest.com"
    >
      <div className="py-4">
        <div>
          <div className="font-medium pb-1">Email address</div>
          <div>
            <input
              className="bg-white bg-secondary border border-primary rounded-lg w-full p-2 focus:outline-none"
              placeholder="Example@email.com"
            />
          </div>
        </div>
        <div className="text-xs text-red-700 italic">Enter your email</div>
      </div>

      <div className="py-4">
        <div className="font-medium pb-1"> Password</div>
        <div>
          <input
            className="bg-white bg-secondary border border-primary rounded-lg w-full p-2 focus:outline-none"
            placeholder="Example@email.com"
          />
        </div>
        <div className="text-xs text-red-700 italic">Enter your password</div>
      </div>

      <div className="pb-2">
        <div className="">
          Forget password?{" "}
          <Link href="/reset-password">
            <a
              href="/auth"
              className="font-bold text-bold text-primary hover:(underline)"
            >
              Reset now
            </a>
          </Link>
        </div>
      </div>

      <div className="text-center pt-8 pb-4">
        <Link href="/dashboard">
          <a className="bg-primary rounded-lg mx-auto max-w-sm text-white p-2 block">
            Login
          </a>
        </Link>
      </div>

      <div className="py-4">
        <div className="text-center">
          Don’t have an account?{" "}
          <Link href="/register">
            <a
              href="/auth"
              className="font-bold text-bold text-primary hover:(underline)"
            >
              Register
            </a>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
