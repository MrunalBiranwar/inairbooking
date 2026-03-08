import { Plane, Shield, BarChart3, Globe, Headphones, CreditCard } from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "Compare 1000+ Airlines",
    description: "Search and compare flights from over 1000 airlines worldwide to find the best options.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Best Price Guarantee",
    description: "Find a lower price? We'll refund the difference. Your savings are guaranteed.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Smart Price Alerts",
    description: "Our AI predicts price changes and alerts you at the perfect time to book.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Globe,
    title: "Worldwide Coverage",
    description: "Book flights to 190+ countries. Wherever you want to go, we've got you covered.",
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our travel experts are available around the clock to help with any questions.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Pay with any card, UPI, or wallet. Split payments and pay later options available.",
    color: "from-pink-500 to-rose-500",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              InAirBooking
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join millions of travelers who trust us for their flight bookings
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 rounded-full text-blue-700">
            <span className="font-medium">Ready to start your journey?</span>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-full hover:from-blue-700 hover:to-blue-600 transition-all duration-300">
              Search Flights
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}