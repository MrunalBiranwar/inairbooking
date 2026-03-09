import { useNavigate, useLocation } from "react-router-dom";
import {
  Plane,
  Lock,
  Shield,
  CheckCircle2,
} from "lucide-react";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage"
import TrustBadge from "../components/auth/TrustBadges";
export default function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const mode = location.pathname === "/signup" ? "signup" : "login";
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')",
        }}
      />

      {/* Gradient Overlays — exactly matching HeroSection */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-sky-700/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

      {/* Floating Blobs */}
      <div className="absolute top-20 left-16 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-16 right-16 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Card Container */}
      <div className="relative z-10 w-full max-w-[480px]">
        {/* Logo Pill */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-5 py-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Plane className="w-[18px] h-[18px] text-white -rotate-45" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              AirBooking
            </span>
          </div>
        </div>

        {/* White Card */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          {/* Tab Toggle */}
          <div className="flex gap-1 bg-slate-100 rounded-xl p-1 mb-7">
            {["login", "signup"].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => navigate(`/${m}`)}
                className={`flex-1 py-2.5 rounded-[10px] text-[15px] font-semibold transition-all duration-300 ${
                  mode === m
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "text-slate-500 hover:text-blue-600"
                }`}
              >
                {m === "login" ? "Sign In" : "Create Account"}
              </button>
            ))}
          </div>

          {/* Forms */}
          {mode === "login" && <LoginPage />}
          {mode === "signup" && <SignupPage />}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-5 mt-5">
          <TrustBadge
            icon={<Shield className="w-3.5 h-3.5 text-emerald-400" />}
            label="SSL Encrypted"
          />
          <TrustBadge
            icon={<CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />}
            label="GDPR Compliant"
          />
          <TrustBadge
            icon={<Lock className="w-3.5 h-3.5 text-amber-400" />}
            label="PCI DSS Secure"
          />
          <TrustBadge
            icon={<Plane className="w-3.5 h-3.5 text-red-400 -rotate-45" />}
            label="50M+ Travelers"
          />
        </div>
      </div>
    </section>
  );
}