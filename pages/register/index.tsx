import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "../../lib/AxiosInstance";
import AuthLayout from "../../layouts/AuthLayout";
import LoadingButton from "../../components/_partials/LoadingButton";

export default function RegistrationPage() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const [errorMsg, setErrorMsg] = useState(null);
  const [fetching, setFetching] = useState(false);

  const signup = async (payload: Payload) => {
    setErrorMsg(null);
    setFetching(true);

    await Axios.post("/register", payload)
      .then((response: any) => {
        reset();
        Router.replace(`/register/otp#${response?.data?.Data?.id}`);
      })
      .catch((e) => {
        setErrorMsg(
          e?.response?.data.message ||
            "Sorry, an error occured. Please try again"
        );
      })
      .finally(() => setFetching(false));
  };

  return (
    <AuthLayout
      page="Login"
      showBackgroud={false}
      title="Register to get started"
      backLink="https://hitevest.com"
    >
      <form
        className="md:p-4"
        onSubmit={handleSubmit((data: any) => signup(data))}
      >
        {!!errorMsg && (
          <div className="border rounded mx-auto max-w-sm border-red-600 border-l-4 text-center text-sm mb-4 py-2 px-4 text-gray-800">
            {errorMsg.replaceAll("_", " ")}
          </div>
        )}

        <div className="md:flex md:space-x-4">
          <div className="w-full pb-4 md:w-1/2">
            <div>
              <div className="font-medium pb-1">Full name</div>
              <div>
                <input
                  className="bg-white bg-secondary border border-primary rounded-lg w-full p-2 focus:outline-none"
                  {...register("name", { required: true })}
                />
              </div>
            </div>
            {errors.name && (
              <div className="text-xs text-red-700 italic">
                Enter your full name
              </div>
            )}
          </div>

          <div className="w-full pb-4 md:w-1/2">
            <div className="font-medium pb-1">Email Address</div>
            <div>
              <input
                className="bg-white bg-secondary border border-primary rounded-lg w-full p-2 focus:outline-none"
                {...register("email", { required: true })}
              />
            </div>
            {errors.email && (
              <div className="text-xs text-red-700 italic">
                Enter your email address
              </div>
            )}
          </div>
        </div>

        <div className="md:flex md:space-x-4">
          <div className="w-full pb-4 md:w-1/2">
            <div>
              <div className="font-medium pb-1">Phone number</div>
              <div>
                <input
                  className="bg-white bg-secondary border border-primary rounded-lg w-full p-2 focus:outline-none"
                  {...register("phone", { required: true })}
                />
              </div>
            </div>
            {errors.phone && (
              <div className="text-xs text-red-700 italic">
                Enter your phone number
              </div>
            )}
          </div>

          <div className="w-full pb-4 md:w-1/2">
            <div className="font-medium pb-1">Country</div>
            <div>
              <input
                className="bg-white bg-secondary border border-primary rounded-lg w-full p-2 focus:outline-none"
                {...register("country", { required: true })}
              />
            </div>
            {errors.country && (
              <div className="text-xs text-red-700 italic">
                Enter your country
              </div>
            )}
          </div>
        </div>

        <div className="md:flex md:space-x-4">
          <div className="w-full pb-4 md:w-1/2">
            <div>
              <div className="font-medium pb-1">Password</div>
              <div>
                <input
                  className="bg-white bg-secondary border border-primary rounded-lg w-full p-2 focus:outline-none"
                  {...register("password", { required: true })}
                />
              </div>
            </div>
            {errors.password && (
              <div className="text-xs text-red-700 italic">
                Enter your password
              </div>
            )}
          </div>

          <div className="w-full pb-4 md:w-1/2">
            <div className="font-medium pb-1">Confirm password</div>
            <div>
              <input
                className="bg-white bg-secondary border border-primary rounded-lg w-full p-2 focus:outline-none"
                {...register("confirm_password", { required: true })}
              />
            </div>
            {errors.confirm_password && (
              <div className="text-xs text-red-700 italic">
                Confirm your password
              </div>
            )}
          </div>
        </div>

        <div className="text-center pt-8 pb-4">
          <div className="text-center pt-6">
            {fetching ? (
              <LoadingButton />
            ) : (
              <button
                type="submit"
                className="bg-primary rounded-lg mx-auto max-w-sm text-white w-full p-2"
              >
                Register
              </button>
            )}
          </div>
        </div>

        <div className="py-4">
          <div className="text-center">
            Don’t have an account?{" "}
            <Link href="/">
              <a className="font-bold text-bold text-primary hover:(underline)">
                Login
              </a>
            </Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}

interface Payload {
  name: string;
  phone: string;
  email: string;
  password: string;
}
