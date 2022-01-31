import Link from "next/link";
import AuthLayout from "../layouts/AuthLayout";

export default function PasswordResetPage() {
  return (
    <AuthLayout
      page="Login"
      small={true}
      showBackgroud={false}
      title="Reset Your Password"
      backLink="/register"
    >
      <section className="mx-auto max-w-md">
        <div className="py-4">
          <div>
            <div className="font-medium pb-1">Enter Email</div>
            <div>
              <input
                className="bg-white bg-secondary border border-primary rounded-lg w-full p-2 focus:outline-none"
                placeholder="Example@email.com"
              />
            </div>
          </div>
          <div className="text-xs text-red-700 italic">Enter your email</div>
        </div>

        {/* <div className="py-4">
              <div className="font-medium pb-1"> Password</div>
              <div>
                <input
                  className="bg-white bg-secondary border border-primary rounded-lg w-full p-2 focus:outline-none"
                  placeholder="Example@email.com"
                />
              </div>
              <div className="text-xs text-red-700 italic">
                Enter your password
              </div>
            </div> */}

        <div className="text-center py-4">
          <Link href="/dashboard">
            <a className="bg-primary rounded-lg mx-auto max-w-sm text-white p-2 block">
              Send Confirmation
            </a>
          </Link>
        </div>

        {/* <div className="py-4">
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
        </div> */}
      </section>
    </AuthLayout>
  );
}
