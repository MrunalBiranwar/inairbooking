import { Clock, Plane, ArrowRight, Sparkles, TrendingDown, Calendar } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const featuredDeals = [
  {
    id: 1,
    tag: "Best Seller",
    tagColor: "from-amber-500 to-orange-500",
    from: "Mumbai",
    fromCode: "BOM",
    to: "Dubai",
    toCode: "DXB",
    airline: "Emirates",
    originalPrice: 22000,
    price: 15030,
    discount: 32,
    validUntil: "Dec 31",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    tag: "Limited Time",
    tagColor: "from-red-500 to-pink-500",
    from: "Delhi",
    fromCode: "DEL",
    to: "Singapore",
    toCode: "SIN",
    airline: "Singapore Airlines",
    originalPrice: 32000,
    price: 22499,
    discount: 30,
    validUntil: "Jan 15",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    tag: "Flash Sale",
    tagColor: "from-purple-500 to-violet-500",
    from: "Bangalore",
    fromCode: "BLR",
    to: "Bangkok",
    toCode: "BKK",
    airline: "Thai Airways",
    originalPrice: 18000,
    price: 12850,
    discount: 29,
    validUntil: "Dec 25",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&h=400&fit=crop",
  },
];

const moreDeals = [
  { from: "Mumbai", to: "London", price: 42999, airline: "British Airways", duration: "9h 30m" },
  { from: "Delhi", to: "Paris", price: 38500, airline: "Air France", duration: "8h 45m" },
  { from: "Chennai", to: "Bali", price: 25000, airline: "Garuda", duration: "9h 15m" },
  { from: "Kolkata", to: "Tokyo", price: 35999, airline: "ANA", duration: "8h" },
  { from: "Hyderabad", to: "Sydney", price: 52000, airline: "Qantas", duration: "14h" },
  { from: "Pune", to: "New York", price: 65000, airline: "United", duration: "17h 30m" },
];

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <span className="text-amber-300 font-medium">Exclusive Offers</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Flight Deals & Offers
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Grab the best flight deals before they're gone. Up to 40% off on select routes!
          </p>
        </div>
      </div>

      {/* Featured Deals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredDeals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.to}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Tag */}
                <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${deal.tagColor} text-white text-sm font-medium rounded-full`}>
                  {deal.tag}
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-lg text-sm font-bold flex items-center gap-1">
                  <TrendingDown className="w-3 h-3" />
                  {deal.discount}% OFF
                </div>

                {/* Route */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <span className="font-bold text-lg">{deal.fromCode}</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-bold text-lg">{deal.toCode}</span>
                  </div>
                  <p className="text-white/80 text-sm">{deal.from} to {deal.to}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-blue-500" />
                    <span className="text-slate-600 text-sm">{deal.airline}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>Valid until {deal.validUntil}</span>
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-slate-400 text-sm line-through">₹{deal.originalPrice.toLocaleString()}</p>
                    <p className="text-2xl font-bold text-slate-900">₹{deal.price.toLocaleString()}</p>
                  </div>
                  <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-xl shadow-md transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More Deals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">More Great Deals</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {moreDeals.map((deal, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex items-center justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-slate-900">{deal.from}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  <span className="font-semibold text-slate-900">{deal.to}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span>{deal.airline}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {deal.duration}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-blue-600">₹{deal.price.toLocaleString()}</p>
                <button className="text-sm text-blue-600 hover:underline">View →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Don't Miss Out on These Deals!
          </h2>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Set up price alerts and be the first to know when prices drop even further.
          </p>
          <button className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-colors shadow-lg">
            Set Price Alerts
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}