import { useState, ChangeEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import AuthInput from "../components/auth/AuthInput";
import TrustBadge from "../components/auth/TrustBadges";
import LoginPage from "./LoginPage";
interface SignupFormProps {
  onSwitchMode: () => void;
}

export default function SignupPage() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [agreed, setAgreed] = useState<boolean>(false);
  type AuthMode = "login" | "signup";
  type StrengthLevel = 0 | 1 | 2 | 3 | 4;
  const STRENGTH_LABELS: Record<StrengthLevel, string> = {
    0: "",
    1: "Weak",
    2: "Fair",
    3: "Good",
    4: "Strong",
  };

  const STRENGTH_BAR_COLORS: Record<StrengthLevel, string> = {
    0: "",
    1: "bg-red-500",
    2: "bg-amber-400",
    3: "bg-blue-500",
    4: "bg-green-500",
  };

  const STRENGTH_TEXT_COLORS: Record<StrengthLevel, string> = {
    0: "",
    1: "text-red-500",
    2: "text-amber-400",
    3: "text-blue-500",
    4: "text-green-500",
  };

  function getPasswordStrength(pw: string): StrengthLevel {
    if (!pw) return 0;
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score as StrengthLevel;
  }

  const strength: StrengthLevel = getPasswordStrength(password);
  const passwordsMatch: boolean =
    confirmPassword.length > 0 && password === confirmPassword;
  const passwordsMismatch: boolean =
    confirmPassword.length > 0 && password !== confirmPassword;

  const confirmBorderClass = passwordsMismatch
    ? "border-red-400"
    : passwordsMatch
      ? "border-green-400"
      : "border-slate-200";

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
          Start your journey 🌍
        </h2>
        <p className="text-sm text-slate-500 mb-5">
          Create a free account and unlock 1000+ airlines instantly.
        </p>

        {/* Name Row */}
        <div className="grid grid-cols-2 gap-2.5 mb-3">
          <AuthInput
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
            icon={<User className="w-[17px] h-[17px]" />}
          />
          <AuthInput
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLastName(e.target.value)
            }
            icon={<User className="w-[17px] h-[17px]" />}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <AuthInput
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            icon={<Mail className="w-[17px] h-[17px]" />}
          />
        </div>

        {/* Phone */}
        <div className="mb-3">
          <AuthInput
            type="tel"
            placeholder="Phone number (optional)"
            value={phone}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
            icon={<Phone className="w-[17px] h-[17px]" />}
          />
        </div>

        {/* Password */}
        <div className="mb-1.5">
          <AuthInput
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            icon={<Lock className="w-[17px] h-[17px]" />}
            rightSlot={
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="text-slate-400 hover:text-blue-500 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-[17px] h-[17px]" />
                ) : (
                  <Eye className="w-[17px] h-[17px]" />
                )}
              </button>
            }
          />
        </div>

        {/* Strength Meter */}
        {password && (
          <div className="mb-3">
            <div className="flex gap-1 mb-1">
              {([1, 2, 3, 4] as StrengthLevel[]).map((i) => (
                <div
                  key={i}
                  className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                    i <= strength
                      ? STRENGTH_BAR_COLORS[strength]
                      : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
            <span
              className={`text-[11px] font-semibold ${STRENGTH_TEXT_COLORS[strength]}`}
            >
              {STRENGTH_LABELS[strength]} password
            </span>
          </div>
        )}

        {/* Confirm Password */}
        <div className="mb-4">
          <AuthInput
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
            icon={<Lock className="w-[17px] h-[17px]" />}
            borderClass={confirmBorderClass}
            rightSlot={
              <>
                {passwordsMatch && (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                )}
                <button
                  type="button"
                  onClick={() => setShowConfirm((p) => !p)}
                  className="text-slate-400 hover:text-blue-500 transition-colors"
                >
                  {showConfirm ? (
                    <EyeOff className="w-[17px] h-[17px]" />
                  ) : (
                    <Eye className="w-[17px] h-[17px]" />
                  )}
                </button>
              </>
            }
          />
        </div>

        {/* Terms */}
        <label className="flex items-start gap-2.5 mb-5 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAgreed(e.target.checked)
            }
            className="w-4 h-4 mt-0.5 accent-blue-600 flex-shrink-0 rounded"
          />
          <span className="text-[13px] text-slate-500 leading-relaxed">
            I agree to AirBooking's{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Privacy Policy
            </a>
          </span>
        </label>

        {/* CTA */}
        <button
          type="button"
          disabled={!agreed}
          className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-700 hover:via-blue-600 hover:to-sky-600 text-white font-semibold text-base rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-blue-500/20"
        >
          Create My Account <ArrowRight className="w-[18px] h-[18px]" />
        </button>

        <p className="text-center text-[13px] text-slate-500 mt-4">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/loginpage")}
            className="text-blue-600 font-semibold hover:underline bg-transparent border-none cursor-pointer p-0"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
