import { Plane, Clock, ArrowRight } from "lucide-react";

const deals = [
  {
    id: 1,
    from: "Mumbai",
    fromCode: "BOM",
    to: "Dubai",
    toCode: "DXB",
    airline: "Air India",
    airlineLogo: "https://images.unsplash.com/photo-1583202075324-1eb185a8bd0f?w=100&h=100&fit=crop",
    duration: "3h 30m",
    stops: "Non-stop",
    price: "₹15,030",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    from: "Delhi",
    fromCode: "DEL",
    to: "Singapore",
    toCode: "SIN",
    airline: "Singapore Airlines",
    airlineLogo: "https://images.unsplash.com/photo-1540339832862-474599807836?w=100&h=100&fit=crop",
    duration: "5h 45m",
    stops: "Non-stop",
    price: "₹22,499",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    from: "Bangalore",
    fromCode: "BLR",
    to: "Bangkok",
    toCode: "BKK",
    airline: "Thai Airways",
    airlineLogo: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=100&h=100&fit=crop",
    duration: "4h 15m",
    stops: "Non-stop",
    price: "₹12,850",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    from: "Chennai",
    fromCode: "MAA",
    to: "London",
    toCode: "LHR",
    airline: "British Airways",
    airlineLogo: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=100&h=100&fit=crop",
    duration: "11h 20m",
    stops: "1 Stop",
    price: "₹48,999",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=250&fit=crop",
  },
];

export default function DealsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Best Deals from{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Your City
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Handpicked flight deals with unbeatable prices. Book now before they're gone!
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="group bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Destination Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.to}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{deal.to}</h3>
                  <p className="text-white/80 text-sm">{deal.toCode}</p>
                </div>
                {/* Price Tag */}
                <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {deal.price}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                {/* Route */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-slate-700">{deal.fromCode}</span>
                  <div className="flex-1 flex items-center gap-1">
                    <div className="h-px flex-1 bg-slate-200" />
                    <Plane className="w-4 h-4 text-blue-500 transform rotate-90" />
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{deal.toCode}</span>
                </div>

                {/* Airline */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-slate-100 overflow-hidden">
                    <img src={deal.airlineLogo} alt={deal.airline} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm text-slate-600">{deal.airline}</span>
                </div>

                {/* Duration & Stops */}
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{deal.duration}</span>
                  </div>
                  <span className={deal.stops === "Non-stop" ? "text-green-600 font-medium" : "text-slate-500"}>
                    {deal.stops}
                  </span>
                </div>

                {/* View Deal Button */}
                <button className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-xl flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 group-hover:gap-3">
                  View Deal
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
            View All Deals
          </button>
        </div>
      </div>
    </section>
  );
}