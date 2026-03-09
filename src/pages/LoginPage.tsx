import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import SocialButton from "../components/auth/SocialButton";
import AuthInput from "../components/auth/AuthInput";
import OrDivider from "../components/auth/OrDivider";
import TrustBadges from "../components/auth/TrustBadges";
import {
  Plane,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Phone,
  Shield,
  CheckCircle2,
  ArrowRight,
  Chrome,
  Facebook,
} from "lucide-react";

// replace the switch button's onClick:
{
  /* <button onClick={() => navigate("/signup")}>Create one free</button> */
}

interface LoginFormProps {
  onSwitchMode: () => void;
}

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05')",
      }}
    >
      <div className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-[22px] font-bold text-slate-900 mb-1.5">
          Welcome back ✈️
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Sign in to access your bookings and exclusive deals.
        </p>

        {/* Social */}
        <div className="flex gap-3">
          <SocialButton icon={<Chrome className="w-4 h-4" />} label="Google" />
          <SocialButton
            icon={<Facebook className="w-4 h-4" />}
            label="Facebook"
          />
        </div>

        <OrDivider />

        {/* Email */}
        <div className="mb-3.5">
          <AuthInput
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            icon={<Mail className="w-[18px] h-[18px]" />}
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <AuthInput
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            icon={<Lock className="w-[18px] h-[18px]" />}
            rightSlot={
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="text-slate-400 hover:text-blue-500 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-[18px] h-[18px]" />
                ) : (
                  <Eye className="w-[18px] h-[18px]" />
                )}
              </button>
            }
          />
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between mb-6 mt-1">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRememberMe(e.target.checked)
              }
              className="w-4 h-4 accent-blue-600 rounded"
            />
            <span className="text-[13px] text-slate-500">Remember me</span>
          </label>
          <a
            href="#"
            className="text-[13px] text-blue-600 font-medium hover:underline"
          >
            Forgot password?
          </a>
        </div>

        {/* CTA */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-700 hover:via-blue-600 hover:to-sky-600 text-white font-semibold text-base rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-300"
        >
          Sign In <ArrowRight className="w-[18px] h-[18px]" />
        </button>

        <p className="text-center text-[13px] text-slate-500 mt-5">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/signuppage")}
            className="text-blue-600 font-semibold hover:underline bg-transparent border-none cursor-pointer p-0"
          >
            Create one free
          </button>
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
