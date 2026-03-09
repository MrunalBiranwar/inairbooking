import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  MapPin,
  Star,
  TrendingUp,
  Sunset,
  Mountain,
  Waves,
  Building2,
  TreePine,
  Search,
  Heart,
  ArrowRight,
  Plane,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// ─── Data ─────────────────────────────────────────────────────────

const categories = [
  { icon: Waves, label: "Beach", color: "from-cyan-500 to-blue-500" },
  { icon: Mountain, label: "Mountains", color: "from-emerald-500 to-teal-600" },
  { icon: Building2, label: "Cities", color: "from-blue-500 to-indigo-600" },
  { icon: TreePine, label: "Nature", color: "from-green-500 to-emerald-600" },
  { icon: Sunset, label: "Scenic", color: "from-orange-400 to-amber-500" },
  { icon: TrendingUp, label: "Trending", color: "from-rose-500 to-pink-500" },
];

const destinations = [
  {
    city: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    price: "₹28,500",
    rating: 4.9,
    tag: "Trending",
    tagColor: "bg-rose-500",
  },
  {
    city: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
    price: "₹52,000",
    rating: 4.8,
    tag: "Popular",
    tagColor: "bg-blue-500",
  },
  {
    city: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
    price: "₹41,000",
    rating: 4.9,
    tag: "Must Visit",
    tagColor: "bg-amber-500",
  },
  {
    city: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
    price: "₹63,500",
    rating: 4.7,
    tag: "Romantic",
    tagColor: "bg-pink-500",
  },
  {
    city: "New York",
    country: "USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop",
    price: "₹58,000",
    rating: 4.8,
    tag: "City Life",
    tagColor: "bg-indigo-500",
  },
  {
    city: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    price: "₹22,000",
    rating: 4.6,
    tag: "Luxury",
    tagColor: "bg-yellow-500",
  },
];

const travelTips = [
  {
    emoji: "🎒",
    title: "Pack Smart",
    tip: "Roll your clothes instead of folding to save 30% more space in your luggage.",
  },
  {
    emoji: "💳",
    title: "No-Fee Cards",
    tip: "Use travel credit cards with no foreign transaction fees to save on every purchase abroad.",
  },
  {
    emoji: "📱",
    title: "Offline Maps",
    tip: "Download Google Maps for your destination before you land — WiFi isn't always reliable.",
  },
  {
    emoji: "🕐",
    title: "Book Tuesdays",
    tip: "Flight prices are typically lowest on Tuesdays and Wednesdays. Set price alerts!",
  },
];

// ─── Destination Card ─────────────────────────────────────────────

interface DestinationCardProps {
  city: string;
  country: string;
  image: string;
  price: string;
  rating: number;
  tag: string;
  tagColor: string;
}

function DestinationCard({ city, country, image, price, rating, tag, tagColor }: DestinationCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={city}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Tag */}
        <span className={`absolute top-3 left-3 ${tagColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full`}>
          {tag}
        </span>
        {/* Like */}
        <button
          onClick={() => setLiked((l) => !l)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform"
        >
          <Heart className={`w-4 h-4 transition-colors ${liked ? "fill-rose-500 text-rose-500" : "text-slate-400"}`} />
        </button>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-base font-bold text-slate-900">{city}</h3>
            <div className="flex items-center gap-1 text-slate-500 text-sm">
              <MapPin className="w-3.5 h-3.5" />
              {country}
            </div>
          </div>
          <div className="text-right">
            <div className="text-blue-600 font-bold text-sm">From {price}</div>
            <div className="flex items-center gap-1 text-amber-400 text-xs justify-end">
              <Star className="w-3 h-3 fill-amber-400" />
              <span className="text-slate-600 font-medium">{rating}</span>
            </div>
          </div>
        </div>

        <Link
          to="/flights"
          className="mt-1 w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm shadow-blue-500/20"
        >
          <Plane className="w-4 h-4 -rotate-45" />
          Book Flight
        </Link>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState("Beach");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = destinations.filter(
    (d) =>
      d.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.country.toLowerCase().includes(searchQuery.toLowerCase())
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
              "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2031&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/65 to-sky-700/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

        {/* Floating blobs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-sky-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Compass className="w-6 h-6 text-amber-300" />
            <span className="text-amber-300 font-semibold text-sm tracking-widest uppercase">Explore The World</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Where Will You{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Go Next?
            </span>
          </h1>
          <p className="text-lg text-blue-100 max-w-xl mx-auto mb-8">
            Discover breathtaking destinations and plan your perfect trip with InAirBooking.
          </p>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl text-slate-800 placeholder-slate-400 text-[15px] outline-none shadow-xl focus:ring-2 focus:ring-blue-500/30"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">

        {/* Categories */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map(({ icon: Icon, label, color }) => (
              <button
                key={label}
                onClick={() => setActiveCategory(label)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === label
                    ? `bg-gradient-to-r ${color} text-white shadow-lg`
                    : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              {searchQuery ? `Results for "${searchQuery}"` : "Popular Destinations"}
            </h2>
            <Link
              to="/flights"
              className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View all flights <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((d) => (
                <DestinationCard key={d.city} {...d} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Compass className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 font-medium">No destinations found for "{searchQuery}"</p>
            </div>
          )}
        </section>

        {/* Travel Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">✈️ Travel Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {travelTips.map(({ emoji, title, tip }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className="font-bold text-slate-900 mb-1.5">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative rounded-3xl overflow-hidden mb-4">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-sky-700/80" />
          <div className="relative z-10 p-10 sm:p-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Ready to Take Off?
            </h2>
            <p className="text-blue-100 mb-7 text-lg max-w-lg mx-auto">
              Compare 1000+ airlines and book your perfect flight in seconds.
            </p>
            <Link
              to="/flights"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-slate-900 font-bold rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <Plane className="w-5 h-5 -rotate-45" />
              Search Flights Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}