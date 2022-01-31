import Link from "next/link";
import { useForm } from "react-hook-form";
import AuthLayout from "../../layouts/AuthLayout";

export default function RegistrationPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <AuthLayout
      page="Login"
      showBackgroud={false}
      title="Register to get started"
      backLink="https://hitevest.com"
    >
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
          <div className="text-xs text-red-700 italic">
            Enter your full name
          </div>
        </div>

        <div className="w-full pb-4 md:w-1/2">
          <div className="font-medium pb-1">Email Address</div>
          <div>
            <input
              className="bg-white bg-secondary border border-primary rounded-lg w-full p-2 focus:outline-none"
              {...register("email", { required: true })}
            />
          </div>
          <div className="text-xs text-red-700 italic">
            Enter your email address
          </div>
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
          <div className="text-xs text-red-700 italic">
            Enter your phone number
          </div>
        </div>

        <div className="w-full pb-4 md:w-1/2">
          <div className="font-medium pb-1">Country</div>
          <div>
            <input
              className="bg-white bg-secondary border border-primary rounded-lg w-full p-2 focus:outline-none"
              {...register("country", { required: true })}
            />
          </div>
          <div className="text-xs text-red-700 italic">Enter your country</div>
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
          <div className="text-xs text-red-700 italic">Enter your password</div>
        </div>

        <div className="w-full pb-4 md:w-1/2">
          <div className="font-medium pb-1">Confirm password</div>
          <div>
            <input
              className="bg-white bg-secondary border border-primary rounded-lg w-full p-2 focus:outline-none"
              {...register("confirm_password", { required: true })}
            />
          </div>
          <div className="text-xs text-red-700 italic">
            Confirm your password
          </div>
        </div>
      </div>

      <div className="text-center pt-8 pb-4">
        <Link href="/register/otp">
          <a className="bg-primary rounded-lg mx-auto max-w-sm text-white p-2 block">
            Register
          </a>
        </Link>
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
    </AuthLayout>
  );
}
