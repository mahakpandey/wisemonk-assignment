import React, { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { Eye, EyeOff } from "lucide-react";
import GoogleIcon from "../../assets/GoogleIcon.svg?react";
import Divider from "../../components/divider/Divider";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading, error, clearError } = useAuth();

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    clearError();
    login(email, password);
  };
  return (
    <div className="mt-10 space-y-6">
      <Button className="w-full justify-center border border-slate-200 rounded-md bg-white text-slate-900 hover:bg-slate-50 ">
        <GoogleIcon className="w-4 h-4" aria-hidden />
        <span className="text-sm font-medium text-slate-900">
          Sign in with Google
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
            autoComplete="current-password"
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
        <Button
          type="submit"
          className="w-full justify-center"
          disabled={loading}
        >
          {loading ? "Signing in…" : "Sign in"}
        </Button>
      </form>
      <div className="flex items-center justify-between pt-1">
        <span className="text-xs text-neutral-800 font-medium">
          Don’t have an account yet?{" "}
          <Link
            to="/signup"
            className="text-xs font-medium text-neutral-800 underline underline-offset-4 hover:text-neutral-900"
          >
            Create your workspace
          </Link>
        </span>
        <span className="text-[#2684FF]">
          <a
            href="#"
            className="text-xs font-medium underline underline-offset-4 hover:text-blue-900"
          >
            Forgot password?
          </a>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
