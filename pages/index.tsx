import Link from "next/link";
import AuthLayout from "../layouts/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout
      page="Login"
      showBackgroud={true}
      title="Login To Your Account"
      backLink="https://hitevest.com"
    >
      <section className="mx-auto max-w-screen-md p-8">
        <div className="pb-4">
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
        <div className="pb-4">
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
              <a className="font-bold text-bold text-primary hover:(underline)">
                Reset now
              </a>
            </Link>
          </div>
        </div>
        <div className="text-center pt-6">
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
              <a className="font-bold text-bold text-primary hover:(underline)">
                Register
              </a>
            </Link>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
}
