import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useEffect } from "react";
import Button from "../../components/button/Button";
import Divider from "../../components/divider/Divider";
import GoogleIcon from "../../assets/GoogleIcon.svg";
import { Link } from "react-router-dom";
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
      {/* Left: form */}
      <div className="flex flex-col px-6 sm:px-8 lg:px-10 my-auto w-full lg:w-[40%] gap-16">
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
      </div>

      {/* Right: marketing */}
      <Marketing />
    </div>
  );
};

export default Login;
