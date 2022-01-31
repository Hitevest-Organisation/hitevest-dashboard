import Link from "next/link";
import Router from "next/router";
import { useEffect } from "react";

export default function AuthLayout({
  page,
  small,
  title,
  backLink,
  children,
  showBackgroud,
}: Props) {
  useEffect(() => {
    // Auto redirect to dashboard if user is logged in
    const UserData = localStorage.getItem("userData");
    if (!!UserData) Router.replace("/dashboard");
  }, []);

  return (
    <div className="bg-secondary h-screen w-full md:(flex justify-center h-screen items-center p-8) ">
      <div
        className={`container bg-white flex h-full mx-auto max-w-screen-md shadow-xl md:(rounded-3xl h-auto overflow-hidden) ${
          small ? "max-w-screen-md" : "max-w-screen-lg"
        }`}
      >
        {showBackgroud && (
          <div
            className="bg-contain bg-no-repeat min-h-full w-1/3 hidden md:(block)"
            style={{
              backgroundImage: "url(/images/auth-bg.png)",
            }}
          />
        )}

        <div className="flex-grow p-4 text-dark-900">
          <div className="flex justify-end">
            <div className="flex justify-end">
              <Link href={backLink}>
                <a className="rounded-full flex font-bold h-10 text-xl w-10 justify-center items-center hover:(bg-secondary text-primary) ">
                  ✕
                </a>
              </Link>
            </div>
          </div>

          <div className="font-bold text-center text-xl capitalize md:(text-2xl)">
            {title}
          </div>

          <section>{children}</section>
        </div>
      </div>
    </div>
  );
}

interface Props {
  page: string;
  small?: true;
  title: string;
  children: any;
  backLink: string;
  showBackgroud: boolean;
}
