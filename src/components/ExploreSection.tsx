import { ArrowRight, Plane, Clock } from "lucide-react";

const destinations = [
  {
    id: 1,
    city: "Bangkok",
    country: "Thailand",
    price: "₹12,000",
    airline: "Thai Airways",
    duration: "4h 15m",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=500&h=600&fit=crop",
  },
  {
    id: 2,
    city: "Dubai",
    country: "UAE",
    price: "₹15,030",
    airline: "Emirates",
    duration: "3h 30m",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=600&fit=crop",
  },
  {
    id: 3,
    city: "Singapore",
    country: "Singapore",
    price: "₹18,500",
    airline: "Singapore Airlines",
    duration: "5h 45m",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&h=600&fit=crop",
  },
  {
    id: 4,
    city: "Paris",
    country: "France",
    price: "₹42,000",
    airline: "Air France",
    duration: "9h 30m",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=600&fit=crop",
  },
  {
    id: 5,
    city: "London",
    country: "United Kingdom",
    price: "₹48,999",
    airline: "British Airways",
    duration: "11h 20m",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=600&fit=crop",
  },
  {
    id: 6,
    city: "Bali",
    country: "Indonesia",
    price: "₹25,000",
    airline: "Garuda Indonesia",
    duration: "8h 45m",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&h=600&fit=crop",
  },
];

export default function ExploreSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Explore the{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              World
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover amazing destinations and find the perfect flight for your next adventure
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={dest.id}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                index === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
              style={{ minHeight: index === 0 ? "400px" : "200px" }}
            >
              {/* Background Image */}
              <img
                src={dest.image}
                alt={dest.city}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-white text-2xl font-bold mb-1">{dest.city}</h3>
                  <p className="text-white/70 text-sm mb-3">{dest.country}</p>

                  {/* Flight Info */}
                  <div className="flex items-center gap-4 text-white/80 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Plane className="w-4 h-4" />
                      <span>{dest.airline}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{dest.duration}</span>
                    </div>
                  </div>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white/60 text-xs">From</span>
                      <p className="text-white text-xl font-bold">{dest.price}</p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl flex items-center gap-2 hover:bg-white/30 transition-all duration-300">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}