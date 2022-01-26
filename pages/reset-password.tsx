import Link from "next/link";

export default function PasswordResetPage() {
  return (
    <div className="bg-secondary h-screen bg-opachyuuiyity-40 w-full md:(flex justify-center h-screen items-center p-8) ">
      <div className="container bg-white flex h-full mx-auto max-w-screen-xl shadow-xl md:(rounded-3xl h-auto overflow-hidden) ">
        <div
          className="bg-cover bg-no-repeat min-h-full w-1/3 hidden md:(block)"
          style={{
            backgroundImage: "url(/images/auth-bg.png)",
          }}
        />

        <div className="flex-grow p-4 text-dark-900">
          <div className="flex justify-end">
            <a className="rounded-full flex font-bold h-12 text-2xl w-12 justify-center items-center hover:(bg-secondary text-primary) ">
              ✕
            </a>
          </div>

          <div className="font-bold text-center text-xl capitalize md:(text-2xl) lg:(text-3xl)">
            Login to your account
          </div>

          <section className="mx-auto max-w-screen-md p-8 ">
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
              <div className="text-xs text-red-700 italic">
                Enter your email
              </div>
            </div>

            <div className="py-4">
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
          </section>
        </div>
      </div>
    </div>
  );
}
