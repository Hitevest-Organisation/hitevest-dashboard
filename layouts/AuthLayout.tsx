import Link from "next/link";

export default function AuthLayout({
  page,
  title,
  backLink,
  children,
  showBackgroud,
}: Props) {
  return (
    <div className="bg-secondary h-screen bg-opachyuuiyity-40 w-full md:(flex justify-center h-screen items-center p-8) ">
      <div className="container bg-white flex h-full mx-auto max-w-screen-xl shadow-xl md:(rounded-3xl h-auto overflow-hidden) ">
        {showBackgroud && (
          <div
            className="bg-cover bg-no-repeat min-h-full w-1/3 hidden md:(block)"
            style={{
              backgroundImage: "url(/images/auth-bg.png)",
            }}
          />
        )}

        <div className="flex-grow p-4 text-dark-900">
          <div className="flex justify-end">
            <div className="flex justify-end">
              <Link href={backLink}>
                <a className="rounded-full flex font-bold h-12 text-2xl w-12 justify-center items-center hover:(bg-secondary text-primary) ">
                  ✕
                </a>
              </Link>
            </div>
          </div>

          <div className="font-bold text-center text-xl capitalize md:(text-2xl) lg:(text-3xl)">
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
  title: string;
  children: any;
  backLink: string;
  showBackgroud: boolean;
}
