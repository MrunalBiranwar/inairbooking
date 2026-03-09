import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  BookOpen,
  CreditCard,
  Plane,
  RefreshCw,
  Shield,
  Luggage,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// ─── Data ─────────────────────────────────────────────────────────

const helpCategories = [
  {
    icon: Plane,
    label: "Booking",
    description: "How to book, modify or cancel flights",
    color: "from-blue-500 to-sky-500",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: CreditCard,
    label: "Payments",
    description: "Billing, refunds and payment issues",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: RefreshCw,
    label: "Refunds",
    description: "Cancellations, refund status and policy",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Luggage,
    label: "Baggage",
    description: "Baggage allowance, lost luggage help",
    color: "from-purple-500 to-violet-500",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Shield,
    label: "Safety",
    description: "Travel insurance and safety policies",
    color: "from-rose-500 to-pink-500",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: BookOpen,
    label: "Guides",
    description: "Travel guides, tips and resources",
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I book a flight on InAirBooking?",
    answer:
      "Simply enter your departure city, destination, travel dates and number of passengers on the home page. Click 'Search Flights' to compare options from 1000+ airlines, then select your preferred flight and complete your booking securely.",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes! Most bookings can be modified or cancelled within 24 hours of purchase for a full refund. After that, cancellation fees depend on the airline's policy. Go to 'My Bookings' in your account to manage your trips.",
  },
  {
    question: "How long does a refund take to process?",
    answer:
      "Refunds typically take 5–10 business days to appear in your account, depending on your bank or card provider. You'll receive an email confirmation once we've processed the refund from our end.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept Visa, Mastercard, American Express, UPI, Net Banking, and popular wallets like Paytm and PhonePe. All payments are secured with 256-bit SSL encryption and PCI DSS compliance.",
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Absolutely. We are GDPR compliant and never sell your data. All personal and payment data is encrypted and stored securely. You can request deletion of your account data at any time from Settings.",
  },
  {
    question: "What if my flight gets delayed or cancelled by the airline?",
    answer:
      "If your airline cancels or significantly delays your flight, you are entitled to a full refund or free rebooking. Contact our 24/7 support team immediately and we'll handle the process with the airline on your behalf.",
  },
  {
    question: "Can I book flights for someone else?",
    answer:
      "Yes, you can book flights on behalf of family members or colleagues. Just enter the passenger's details during checkout. Make sure the name matches exactly with their government-issued ID.",
  },
  {
    question: "Do you offer travel insurance?",
    answer:
      "Yes, we partner with leading travel insurance providers. During checkout you'll see the option to add coverage for trip cancellation, medical emergencies, lost baggage and more.",
  },
];

const contactOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team instantly",
    action: "Start Chat",
    available: "Available 24/7",
    color: "from-blue-600 to-sky-500",
    shadowColor: "shadow-blue-500/30",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with a travel expert",
    action: "1-800-123-456",
    available: "Mon–Sat, 9am–9pm IST",
    color: "from-emerald-500 to-teal-500",
    shadowColor: "shadow-emerald-500/30",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a detailed message",
    action: "support@inairbooking.com",
    available: "Response within 24 hrs",
    color: "from-amber-500 to-orange-400",
    shadowColor: "shadow-amber-500/30",
  },
];

// ─── FAQ Accordion ─────────────────────────────────────────────────

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
            openIndex === i
              ? "border-blue-200 shadow-md shadow-blue-500/10"
              : "border-slate-100 shadow-sm hover:border-blue-100"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left"
          >
            <span className="font-semibold text-slate-800 text-[15px] pr-4">{faq.question}</span>
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
              {openIndex === i
                ? <ChevronUp className="w-4 h-4 text-blue-600" />
                : <ChevronDown className="w-4 h-4" />}
            </span>
          </button>

          {openIndex === i && (
            <div className="px-6 pb-5">
              <div className="h-px bg-slate-100 mb-4" />
              <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/65 to-sky-700/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

        {/* Floating blobs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-10 w-80 h-80 bg-sky-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-6 h-6 text-amber-300" />
            <span className="text-amber-300 font-semibold text-sm tracking-widest uppercase">
              Help Center
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            How Can We{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Help You?
            </span>
          </h1>
          <p className="text-lg text-blue-100 max-w-xl mx-auto mb-8">
            Find answers to your questions or reach our 24/7 support team.
          </p>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search help topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl text-slate-800 placeholder-slate-400 text-[15px] outline-none shadow-xl focus:ring-2 focus:ring-blue-500/30"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">

        {/* Help Categories */}
        {!searchQuery && (
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Browse Help Topics</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {helpCategories.map(({ icon: Icon, label, description, bg, iconColor }) => (
                <button
                  key={label}
                  className={`${bg} rounded-2xl p-5 text-left hover:scale-105 hover:shadow-md transition-all duration-200 border border-transparent hover:border-blue-100`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-3 shadow-sm`}>
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <div className="font-bold text-slate-900 text-sm mb-0.5">{label}</div>
                  <div className="text-xs text-slate-500 leading-snug">{description}</div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              {searchQuery ? `Results for "${searchQuery}"` : "Frequently Asked Questions"}
            </h2>
            {searchQuery && (
              <span className="text-sm text-slate-500">
                {filteredFAQs.length} result{filteredFAQs.length !== 1 ? "s" : ""} found
              </span>
            )}
          </div>

          {filteredFAQs.length > 0 ? (
            <FAQAccordion faqs={filteredFAQs} />
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 font-medium">No results found for "{searchQuery}"</p>
              <p className="text-sm text-slate-400 mt-1">Try different keywords or contact our support team.</p>
            </div>
          )}
        </section>

        {/* Contact Options */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Still Need Help?</h2>
          <p className="text-slate-500 mb-6">Our team is ready to assist you around the clock.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {contactOptions.map(({ icon: Icon, title, description, action, available, color, shadowColor }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg ${shadowColor}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">{title}</h3>
                <p className="text-slate-500 text-sm mb-1">{description}</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                  <Clock className="w-3.5 h-3.5" />
                  {available}
                </div>
                <button className={`w-full py-2.5 bg-gradient-to-r ${color} text-white text-sm font-semibold rounded-xl shadow-md ${shadowColor} hover:opacity-90 transition-opacity duration-200`}>
                  {action}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Tips */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-sky-500 rounded-3xl p-8 sm:p-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Before You Contact Us
              </h2>
              <p className="text-blue-100 mb-6 text-sm">
                Most issues can be resolved instantly by checking these first:
              </p>
              <div className="space-y-3">
                {[
                  "Check your spam/junk folder for booking confirmation emails",
                  "Allow 5–10 business days for refunds to appear in your account",
                  "Ensure passenger name matches exactly with your ID document",
                  "Use 'Manage Booking' in your account for quick self-service options",
                ].map((tip) => (
                  <div key={tip} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/flights"
                className="mt-7 inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-md text-sm"
              >
                Back to Flights <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}