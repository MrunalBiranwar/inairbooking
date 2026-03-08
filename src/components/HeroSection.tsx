import { useState } from "react";
import {
  Plane,
  MapPin,
  Calendar,
  Users,
  Search,
  ArrowRightLeft,
  ChevronDown,
} from "lucide-react";
import Checkbox from "../components/ui/checkbox";

type TripType = "roundtrip" | "oneway" | "multicity";

export default function HeroSection() {
  const [tripType, setTripType] = useState<TripType>("roundtrip");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travelers, setTravelers] = useState("1 Adult");
  const [cabinClass, setCabinClass] = useState("Economy");
  const [directFlights, setDirectFlights] = useState(false);
  const [nearbyAirports, setNearbyAirports] = useState(true);
  const [flexibleDates, setFlexibleDates] = useState(false);

  const swapLocations = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-sky-700/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Text */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Fly Smarter,{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Pay Less
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            Compare 1000+ airlines and book your perfect flight in seconds
          </p>
        </div>

        {/* Search Panel */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
          {/* Trip Type Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { value: "roundtrip", label: "Round Trip" },
              { value: "oneway", label: "One Way" },
              { value: "multicity", label: "Multi-City" },
            ].map((type) => (
              <button
                key={type.value}
                onClick={() => setTripType(type.value as TripType)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  tripType === type.value
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          {/* Search Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-6">
            {/* From */}
            <div className="lg:col-span-3 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500">
                <Plane className="w-5 h-5 transform -rotate-45" />
              </div>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="From (City or Airport)"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Swap Button */}
            <div className="lg:col-span-1 flex items-center justify-center">
              <button
                onClick={swapLocations}
                className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:rotate-180"
              >
                <ArrowRightLeft className="w-4 h-4" />
              </button>
            </div>

            {/* To */}
            <div className="lg:col-span-3 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500">
                <MapPin className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="To (Destination)"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Departure Date */}
            <div className="lg:col-span-2 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500">
                <Calendar className="w-5 h-5" />
              </div>
              <input
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Return Date */}
            {tripType === "roundtrip" && (
              <div className="lg:col-span-2 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500">
                  <Calendar className="w-5 h-5" />
                </div>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            )}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {/* Travelers */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500">
                <Users className="w-5 h-5" />
              </div>
              <select
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="w-full pl-12 pr-10 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
              >
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>2 Adults, 1 Child</option>
                <option>2 Adults, 2 Children</option>
                <option>3+ Travelers</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            {/* Cabin Class */}
            <div className="relative">
              <select
                value={cabinClass}
                onChange={(e) => setCabinClass(e.target.value)}
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
              >
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            {/* Search Button */}
            <div className="sm:col-span-2">
              <button className="w-full py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-700 hover:via-blue-600 hover:to-sky-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Search Flights
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-200">
            <label className="flex items-center gap-2 cursor-pointer group">
              <Checkbox
                checked={directFlights}
                onCheckedChange={(checked) => setDirectFlights(checked === true)}
                className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
              />
              <span className="text-sm text-slate-600 group-hover:text-blue-600 transition-colors">
                Direct flights only
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <Checkbox
                checked={nearbyAirports}
                onCheckedChange={(checked) => setNearbyAirports(checked === true)}
                className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
              />
              <span className="text-sm text-slate-600 group-hover:text-blue-600 transition-colors">
                Include nearby airports
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <Checkbox
                checked={flexibleDates}
                onCheckedChange={(checked) => setFlexibleDates(checked === true)}
                className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
              />
              <span className="text-sm text-slate-600 group-hover:text-blue-600 transition-colors">
                Flexible dates (±3 days)
              </span>
            </label>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-10 text-white/90">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold">1000+</div>
            <div className="text-sm text-blue-200">Airlines</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold">50M+</div>
            <div className="text-sm text-blue-200">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold">190+</div>
            <div className="text-sm text-blue-200">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold">24/7</div>
            <div className="text-sm text-blue-200">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}