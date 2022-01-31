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

    await Axios.post("/forgot_password", payload)
      .then((response: any) => {
        reset();
        Router.replace(`/reset-password/otp#${response?.data?.Data?.id}`);
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
      small={true}
      showBackgroud={false}
      title="Reset Your Password"
      backLink="/register"
    >
      <form
        className="mx-auto max-w-md md:p-4"
        onSubmit={handleSubmit((data: any) => signup(data))}
      >
        {!!errorMsg && (
          <div className="border rounded mx-auto max-w-sm border-red-600 border-l-4 text-center text-sm mb-4 py-2 px-4 text-gray-800">
            {errorMsg.replaceAll("_", " ")}
          </div>
        )}

        <div className="w-full py-4">
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

        <div className="text-center py-4">
          {fetching ? (
            <LoadingButton />
          ) : (
            <button
              type="submit"
              className="bg-primary rounded-lg mx-auto max-w-sm text-white w-full p-2 block"
            >
              Send Confirmation
            </button>
          )}
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
