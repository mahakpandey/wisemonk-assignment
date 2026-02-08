import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MotionDiv } from "../../shared/ui/Motion";
import { useAuth } from "../auth/AuthContext";
import Button from "../../components/button/Button";
import Divider from "../../components/divider/Divider";
import Input from "../../components/input/Input";
import GoogleIcon from "../../assets/GoogleIcon.svg";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import Marketing from "../../shared/ui/Marketing";

const Signup = () => {
  const navigate = useNavigate();
  const { signup, isAuthenticated, loading, error, clearError } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard", { replace: true });
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    clearError();
    signup(fullName, email, password, confirmPassword);
  };

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
            Create your Wisemonk workspace
          </h1>
          <p className="mt-2 text-sm leading-6 text-neutral-500 font-medium ">
            Get started with team management, payroll, and compliance in India.
          </p>

          <div className="mt-10 space-y-6">
            <Button className="border border-slate-200 rounded-md bg-white text-slate-900 hover:bg-slate-50 w-full justify-center">
              <img src={GoogleIcon} alt="google" className="w-4 h-4" />
              <span className="text-sm font-medium text-slate-900">
                Sign up with Google
              </span>
            </Button>

            <Divider label="or continue with" />

            {error && (
              <p className="text-sm text-red-600 font-medium" role="alert">
                {error}
              </p>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <Input
                label="Full name*"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                autoComplete="name"
              />
              <Input
                label="Work Email*"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              <div className="relative">
                <Input
                  label="Password*"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  className="pr-10"
                />
                <Button
                  variant="iconGhost"
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  tabIndex={0}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </Button>
              </div>
              <div className="relative">
                <Input
                  label="Confirm password*"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
                  className="pr-10"
                />
                <Button
                  variant="iconGhost"
                  type="button"
                  onClick={() => setShowConfirmPassword((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  tabIndex={0}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </Button>
              </div>
              <Button
                type="submit"
                className="w-full justify-center"
                disabled={loading}
              >
                {loading ? "Creating workspace…" : "Create workspace"}
              </Button>
            </form>

            <div className="flex items-center justify-center pt-1">
              <span className="text-xs text-neutral-800 font-medium">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="text-xs font-medium text-[#2684FF] underline underline-offset-4 hover:text-blue-900"
                >
                  Sign in
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto ">
          <p className="pt-6 text-xs leading-5 text-neutral-500 font-medium">
            By continuing, you agree to Wisemonk&apos;s{" "}
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

export default Signup;
