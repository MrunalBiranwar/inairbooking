import { useState } from "react";
import { Bell, TrendingDown, ArrowRight, Plane } from "lucide-react";

const alerts = [
  {
    id: 1,
    from: "Mumbai",
    fromCode: "BOM",
    to: "Bangkok",
    toCode: "BKK",
    currentPrice: "₹12,000",
    prediction: "Price may drop in 2 days",
    trend: "down",
  },
  {
    id: 2,
    from: "Delhi",
    fromCode: "DEL",
    to: "Dubai",
    toCode: "DXB",
    currentPrice: "₹14,500",
    prediction: "Best time to book!",
    trend: "stable",
  },
  {
    id: 3,
    from: "Bangalore",
    fromCode: "BLR",
    to: "Singapore",
    toCode: "SIN",
    currentPrice: "₹18,200",
    prediction: "Price rising, book soon",
    trend: "up",
  },
];

export default function PriceAlertsSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-sky-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <span className="text-amber-400 font-semibold">Price Alerts</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Track Flight Prices &{" "}
              <span className="text-amber-400">Save Money</span>
            </h2>

            <p className="text-blue-100 text-lg mb-8">
              Set up price alerts and get notified when prices drop. Our smart prediction
              system helps you book at the perfect time.
            </p>

            {/* Email Input */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap">
                <Bell className="w-5 h-5" />
                Set Alert
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold text-white">₹2,500</p>
                <p className="text-blue-200 text-sm">Avg. savings per trip</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">85%</p>
                <p className="text-blue-200 text-sm">Price accuracy</p>
              </div>
            </div>
          </div>

          {/* Right Content - Alert Cards */}
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Route */}
                    <div className="flex items-center gap-2">
                      <div className="text-center">
                        <p className="text-white font-bold">{alert.fromCode}</p>
                        <p className="text-blue-200 text-xs">{alert.from}</p>
                      </div>
                      <div className="flex items-center gap-1 px-3">
                        <div className="h-px w-6 bg-white/30" />
                        <Plane className="w-4 h-4 text-white/60 transform rotate-90" />
                        <div className="h-px w-6 bg-white/30" />
                      </div>
                      <div className="text-center">
                        <p className="text-white font-bold">{alert.toCode}</p>
                        <p className="text-blue-200 text-xs">{alert.to}</p>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="text-white font-bold text-lg">{alert.currentPrice}</p>
                    <div className="flex items-center gap-1 text-green-400 text-sm">
                      <TrendingDown className="w-4 h-4" />
                      <span>{alert.prediction}</span>
                    </div>
                  </div>
                </div>

                <button className="mt-4 w-full py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl flex items-center justify-center gap-2 transition-all duration-200">
                  Set Price Alert
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}