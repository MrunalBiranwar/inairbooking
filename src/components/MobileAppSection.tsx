import { Smartphone, Star } from "lucide-react";

export default function MobileAppSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              Mobile App Available
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Book Flights on the Go with Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                Mobile App
              </span>
            </h2>

            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Download the InAirBooking app for exclusive mobile-only deals, instant notifications,
              and seamless booking experience. Your next adventure is just a tap away.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Exclusive app-only deals",
                "Real-time price alerts",
                "Offline boarding pass",
                "24/7 chat support",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl hover:bg-slate-100 transition-all duration-300 group">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="currentColor"/>
                </svg>
                <div className="text-left">
                  <p className="text-xs text-slate-500">Download on the</p>
                  <p className="text-sm font-semibold text-slate-900">App Store</p>
                </div>
              </button>

              <button className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl hover:bg-slate-100 transition-all duration-300 group">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M3.61 1.81L13.5 12l-9.89 10.19c-.45-.48-.61-1.19-.37-1.81L9.5 12 3.24 3.62c-.24-.62-.08-1.33.37-1.81z" fill="#EA4335"/>
                  <path d="M16.89 15.29L13.5 12l3.39-3.29 3.83 2.21c.71.41.71 1.36 0 1.77l-3.83 2.6z" fill="#FBBC04"/>
                  <path d="M3.61 1.81c.29-.3.68-.47 1.09-.47.25 0 .5.06.73.18l11.46 6.56L13.5 12 3.61 1.81z" fill="#4285F4"/>
                  <path d="M16.89 15.29L5.43 21.86c-.49.28-1.09.24-1.55-.08L13.5 12l3.39 3.29z" fill="#34A853"/>
                </svg>
                <div className="text-left">
                  <p className="text-xs text-slate-500">Get it on</p>
                  <p className="text-sm font-semibold text-slate-900">Google Play</p>
                </div>
              </button>
            </div>

            {/* Rating */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="text-slate-400 text-sm">
                <span className="text-white font-semibold">4.8</span> rating • 2M+ downloads
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-[280px] h-[560px] bg-slate-800 rounded-[3rem] p-3 shadow-2xl shadow-black/50 border border-slate-700">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-sky-500 rounded-[2.5rem] overflow-hidden relative">
                  {/* Screen Content */}
                  <div className="absolute inset-0 p-6 flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-white/80 text-xs mb-6">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-white/80 rounded-sm" />
                      </div>
                    </div>

                    {/* App Content Preview */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
                      <p className="text-white/60 text-xs mb-1">Your next flight</p>
                      <p className="text-white font-bold text-lg">Mumbai → Dubai</p>
                      <p className="text-white/80 text-sm">Tomorrow, 10:30 AM</p>
                    </div>

                    <div className="flex-1 space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-lg" />
                          <div className="flex-1">
                            <div className="w-20 h-2 bg-white/30 rounded mb-1" />
                            <div className="w-14 h-2 bg-white/20 rounded" />
                          </div>
                          <div className="text-white/80 text-sm font-medium">₹12K</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Booking confirmed!</p>
                    <p className="text-sm font-semibold text-slate-900">DEL → SIN</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Price dropped!</p>
                    <p className="text-sm font-semibold text-green-600">-₹2,500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}