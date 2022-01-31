import Router from "next/router";
import { useState } from "react";
import OtpInput from "react-otp-input";
import Axios from "../../lib/AxiosInstance";
import AuthLayout from "../../layouts/AuthLayout";
import LoadingButton from "../../components/_partials/LoadingButton";

export default function RegistrationPage() {
  const [otp, setOTP] = useState("");
  const changeOTP = (OTP: string) => {
    setOTP(OTP);
  };
  const [errorMsg, setErrorMsg] = useState(null);
  const [fetching, setFetching] = useState(false);

  const verifyOTP = async () => {
    if (otp.length < 4) return;

    setErrorMsg(null);
    setFetching(true);

    const payload = {
      otp,
      user_id: location.hash.slice(1),
    };

    await Axios.post("/verify-otp", payload)
      .then((response: any) => {
        const userData = response?.data;
        userData.access_token = userData.data.access_token;
        localStorage.setItem("userData", JSON.stringify(userData));
        Router.replace(`/reset-password/change-password`);
      })
      .catch((e) => {
        setErrorMsg(
          e?.response?.data?.errors ||
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
      backLink="/reset-password"
      title="An OTP has been sent to your Email address or Phone number"
    >
      {!!errorMsg && (
        <div className="border rounded mx-auto max-w-sm border-red-600 border-l-4 my-4 text-center text-sm py-2 px-4 text-gray-800">
          {errorMsg.replaceAll("_", " ")}
        </div>
      )}

      <div className="text-center w-full py-6 pb-4">
        <div className="font-medium pb-2">Enter OTP number here</div>

        <div className="flex mx-auto justify-center">
          <OtpInput
            value={otp}
            numInputs={5}
            isInputNum={true}
            onChange={changeOTP}
            separator={<span className="px-2" />}
            inputStyle="bg-white bg-secondary border border-primary rounded-lg txt-sm font-medium min-w-16 p-2"
          />
        </div>
      </div>

      <div className="text-center pt-8 pb-4">
        {fetching ? (
          <LoadingButton />
        ) : (
          <button
            className="bg-primary rounded-lg mx-auto max-w-sm text-white w-full p-2 block"
            onClick={verifyOTP}
          >
            Validate
          </button>
        )}
      </div>
    </AuthLayout>
  );
}

interface Payload {
  id: string;
  code: string;
}
