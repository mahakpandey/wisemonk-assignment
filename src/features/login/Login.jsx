import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { MotionDiv } from "../../shared/ui/Motion";
import Marketing from "../../shared/ui/Marketing";
import LoginForm from "./LoginForm";

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <div className="bg-white flex flex-col lg:flex-row sm:px-10 mx-auto items-center max-w-[1400px] w-full flex-1 mb-10">
      <MotionDiv
        className="flex flex-col px-6 sm:px-8 lg:px-10 my-auto w-full lg:w-[40%] gap-16"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 sm:text-[34px]">
            Welcome back to Wisemonk
          </h1>
          <p className="mt-2 text-sm leading-6 text-neutral-500 font-medium ">
            Sign in to manage your team, payroll, and compliance.
          </p>

          <LoginForm />
        </div>

        <div className="mx-auto ">
          <p className="pt-6 text-xs leading-5 text-neutral-500 font-medium">
            By continuing, you agree to Wisemonk’s{" "}
            <a
              href="#"
              className="font-medium text-neutral-700 underline underline-offset-4"
            >
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="font-medium text-neutral-600 underline underline-offset-4"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </MotionDiv>

      <Marketing />
    </div>
  );
};

export default Login;
