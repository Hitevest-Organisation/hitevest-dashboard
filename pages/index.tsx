import Link from "next/link";
import axios from "../lib/AxiosInstance";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "../layouts/AuthLayout";
import Router from "next/router";

export default function LoginPage() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [fetching, setFetching] = useState(false);

  const login = async (payload: Payload) => {
    setErrorMsg(null);
    setFetching(true);

    await axios
      .post("/login", payload)
      .then((response: any) => {
        reset();
        localStorage.setItem("userData", JSON.stringify(response?.data));
        Router.replace("/dashboard");
      })
      .catch((e) => {
        console.log(e?.response?.data.message);

        setErrorMsg(
          e?.response?.data.message ||
            "Sorry, an error occured. Please try again"
        );
      })
      .finally(() => setFetching(false));
  };

  useEffect(() => {
    // Auto redirect to dashboard if user is logged in
    const UserData = localStorage.getItem("userData");
    if (!!UserData) Router.replace("/dashboard");
  }, []);

  return (
    <AuthLayout
      page="Login"
      showBackgroud={true}
      title="Login To Your Account"
      backLink="https://hitevest.com"
    >
      <form
        className="mx-auto max-w-screen-md p-8"
        onSubmit={handleSubmit((data) => login(data))}
      >
        {!!errorMsg && (
          <div className="border rounded mx-auto max-w-sm border-red-600 border-l-4 text-center text-sm mb-4 py-2 px-4 text-gray-800">
            {errorMsg}
          </div>
        )}

        <div className="pb-4">
          <div>
            <div className="font-medium pb-1">Email address</div>
            <div>
              <input
                className="bg-white bg-secondary border border-primary rounded-lg w-full p-2 focus:outline-none"
                {...register("email", {
                  required: true,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
            </div>
          </div>
          {errors.email && (
            <div className="text-xs text-red-700 italic">
              {errors.email?.message || "Enter your email"}
            </div>
          )}
        </div>

        <div className="pb-4">
          <div className="font-medium pb-1"> Password</div>
          <div>
            <input
              className="bg-white bg-secondary border border-primary rounded-lg w-full p-2 focus:outline-none"
              {...register("password", { required: true })}
            />
          </div>
          {errors.password && (
            <div className="text-xs text-red-700 italic">
              Enter your password
            </div>
          )}
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
          {fetching ? (
            <LoadingButton />
          ) : (
            <button
              type="submit"
              className="bg-primary rounded-lg mx-auto max-w-sm text-white w-full p-2"
            >
              Login
            </button>
          )}
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
      </form>
    </AuthLayout>
  );
}

export function LoadingButton() {
  return (
    <div className="bg-primary rounded-lg cursor-not-allowed mx-auto max-w-sm bg-opacity-60 text-white w-full p-3">
      <div className="flex space-x-4 justify-center">
        {[...new Array(3)].map((el, i) => (
          <div
            className="bg-white rounded-full bg-opacity-90 h-3 animate-pulse w-3"
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

interface Payload {
  email: string;
  password: string;
}
