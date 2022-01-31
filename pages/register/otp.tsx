import Link from "next/link";
import { useState } from "react";
import OtpInput from "react-otp-input";
import AuthLayout from "../../layouts/AuthLayout";

export default function RegistrationPage() {
  const [otp, setOTP] = useState("");
  const changeOTP = (OTP: string) => {
    setOTP(OTP);
  };

  return (
    <AuthLayout
      page="Login"
      small={true}
      showBackgroud={false}
      title="An OTP has been sent to your Email address or Phone number"
      backLink="/register"
    >
      <div className="">
        <div className="md:flex md:space-x-4">
          <div className="text-center w-full py-8 pb-4">
            <div className="font-medium pb-1">Enter OTP number here</div>

            <div className="flex mx-auto justify-center">
              <OtpInput
                value={otp}
                numInputs={4}
                onChange={changeOTP}
                separator={<span className="px-2" />}
                inputStyle="bg-white bg-secondary border border-primary rounded-lg w-full min-w-20 p-2 "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 pb-4">
        <Link href="/dashboard">
          <a className="bg-primary rounded-lg mx-auto max-w-sm text-white p-2 block">
            Validate
          </a>
        </Link>
      </div>
    </AuthLayout>
  );
}
