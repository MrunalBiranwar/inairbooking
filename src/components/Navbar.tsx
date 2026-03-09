import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import { Plane, ChevronDown, Menu, X, Globe, DollarSign } from "lucide-react";

const navItems = [
  { label: "Flights", href: "/flights" },
  { label: "Hotels", href: "#" },
  { label: "Car Rentals", href: "#" },
  { label: "Deals", href: "/deals" },
  { label: "Explore", href: "/explorepage" },
  { label: "Help", href: "/helppage" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-105">
              <Plane className="w-5 h-5 text-white transform -rotate-45" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">
              InAirBooking
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector */}
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
              <Globe className="w-4 h-4" />
              <span>EN</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {/* Currency Selector */}
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
              <DollarSign className="w-4 h-4" />
              <span>USD</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {/* Login */}
            <button
              onClick={() => navigate("/loginpage")}
              className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              Login
            </button>

            {/* Signup */}
            <button
              onClick={() => navigate("/signuppage")}
              className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-lg shadow-md shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              <div className="flex gap-2 px-4">
                <button
                  onClick={() => navigate("/loginpage")}
                  className="flex-1 py-2.5 text-sm font-medium text-blue-600 border border-blue-200 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signuppage")}
                  className="flex-1 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-md"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
