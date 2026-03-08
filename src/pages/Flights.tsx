import { useState } from "react";
import { Search, Plane, ArrowRight, SlidersHorizontal } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sampleFlights = [
  {
    id: 1,
    airline: "Air India",
    airlineLogo: "AI",
    from: "Mumbai",
    fromCode: "BOM",
    to: "Dubai",
    toCode: "DXB",
    departTime: "10:30",
    arriveTime: "12:00",
    duration: "3h 30m",
    stops: "Non-stop",
    price: 15030,
    class: "Economy",
  },
  {
    id: 2,
    airline: "Emirates",
    airlineLogo: "EK",
    from: "Mumbai",
    fromCode: "BOM",
    to: "Dubai",
    toCode: "DXB",
    departTime: "14:45",
    arriveTime: "16:15",
    duration: "3h 30m",
    stops: "Non-stop",
    price: 18500,
    class: "Economy",
  },
  {
    id: 3,
    airline: "IndiGo",
    airlineLogo: "6E",
    from: "Mumbai",
    fromCode: "BOM",
    to: "Dubai",
    toCode: "DXB",
    departTime: "06:00",
    arriveTime: "07:30",
    duration: "3h 30m",
    stops: "Non-stop",
    price: 12999,
    class: "Economy",
  },
  {
    id: 4,
    airline: "Etihad Airways",
    airlineLogo: "EY",
    from: "Mumbai",
    fromCode: "BOM",
    to: "Dubai",
    toCode: "DXB",
    departTime: "22:15",
    arriveTime: "23:45",
    duration: "3h 30m",
    stops: "Non-stop",
    price: 16750,
    class: "Economy",
  },
  {
    id: 5,
    airline: "SpiceJet",
    airlineLogo: "SG",
    from: "Mumbai",
    fromCode: "BOM",
    to: "Dubai",
    toCode: "DXB",
    departTime: "08:20",
    arriveTime: "12:30",
    duration: "6h 10m",
    stops: "1 Stop",
    price: 11499,
    class: "Economy",
  },
];

export default function FlightsPage() {
  const [sortBy, setSortBy] = useState("price");

  const sortedFlights = [...sampleFlights].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "duration") return a.duration.localeCompare(b.duration);
    return 0;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-sky-600 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Search Flights</h1>
          <p className="text-blue-100">Find the best deals on flights worldwide</p>
        </div>
      </div>

      {/* Search Summary Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-slate-700">
                <span className="font-semibold">Mumbai</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <span className="font-semibold">Dubai</span>
              </div>
              <span className="text-slate-400">|</span>
              <span className="text-slate-600">1 Adult, Economy</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              <Search className="w-4 h-4" />
              Modify Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 sticky top-36">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-slate-900 flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </h2>
                <button className="text-sm text-blue-600 hover:underline">Clear all</button>
              </div>

              {/* Stops Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-slate-800 mb-3">Stops</h3>
                <div className="space-y-2">
                  {["Non-stop", "1 Stop", "2+ Stops"].map((stop) => (
                    <label key={stop} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-slate-600 group-hover:text-slate-900">{stop}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Airlines Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-slate-800 mb-3">Airlines</h3>
                <div className="space-y-2">
                  {["Air India", "Emirates", "IndiGo", "Etihad", "SpiceJet"].map((airline) => (
                    <label key={airline} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-slate-600 group-hover:text-slate-900">{airline}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-medium text-slate-800 mb-3">Price Range</h3>
                <input type="range" min="0" max="50000" className="w-full" />
                <div className="flex justify-between text-sm text-slate-500 mt-2">
                  <span>₹0</span>
                  <span>₹50,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Flight Results */}
          <div className="lg:col-span-3">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-600">
                <span className="font-semibold text-slate-900">{sortedFlights.length}</span> flights found
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="price">Lowest Price</option>
                  <option value="duration">Shortest Duration</option>
                  <option value="departure">Departure Time</option>
                </select>
              </div>
            </div>

            {/* Flight Cards */}
            <div className="space-y-4">
              {sortedFlights.map((flight) => (
                <div
                  key={flight.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Airline */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center font-bold text-blue-600">
                        {flight.airlineLogo}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{flight.airline}</p>
                        <p className="text-sm text-slate-500">{flight.class}</p>
                      </div>
                    </div>

                    {/* Flight Details */}
                    <div className="flex-1 flex items-center justify-center gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-slate-900">{flight.departTime}</p>
                        <p className="text-sm text-slate-500">{flight.fromCode}</p>
                      </div>

                      <div className="flex-1 max-w-32 flex flex-col items-center">
                        <p className="text-xs text-slate-500 mb-1">{flight.duration}</p>
                        <div className="w-full flex items-center">
                          <div className="w-2 h-2 rounded-full bg-slate-300" />
                          <div className="flex-1 h-px bg-slate-300 relative">
                            <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                          </div>
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                        </div>
                        <p className={`text-xs mt-1 ${flight.stops === "Non-stop" ? "text-green-600" : "text-amber-600"}`}>
                          {flight.stops}
                        </p>
                      </div>

                      <div className="text-center">
                        <p className="text-2xl font-bold text-slate-900">{flight.arriveTime}</p>
                        <p className="text-sm text-slate-500">{flight.toCode}</p>
                      </div>
                    </div>

                    {/* Price & Book */}
                    <div className="text-center lg:text-right">
                      <p className="text-2xl font-bold text-slate-900">₹{flight.price.toLocaleString()}</p>
                      <p className="text-sm text-slate-500 mb-3">per person</p>
                      <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-xl shadow-md shadow-blue-500/20 transition-all duration-300">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}