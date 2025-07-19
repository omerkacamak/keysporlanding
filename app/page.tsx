import { Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Animated background with multiple layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-blue-900/20" />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-blue-900/30 animate-pulse" />

        {/* Stadium lights with enhanced animations */}
        <div
          className="absolute top-10 left-10 w-40 h-40 bg-yellow-400/30 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute top-20 right-20 w-32 h-32 bg-blue-400/25 rounded-full blur-2xl animate-ping"
          style={{ animationDuration: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-48 h-48 bg-white/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-10 right-10 w-36 h-36 bg-green-400/20 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "2.5s" }}
        />
        <div
          className="absolute top-1/2 left-5 w-28 h-28 bg-red-400/25 rounded-full blur-xl animate-ping"
          style={{ animationDuration: "1.8s" }}
        />
        <div
          className="absolute top-1/3 right-5 w-44 h-44 bg-purple-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "3.5s" }}
        />

        {/* Floating geometric shapes */}
        <div
          className="absolute top-1/4 left-1/3 w-4 h-4 bg-white/20 rotate-45 animate-spin"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-blue-400/30 rotate-45 animate-spin"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute top-2/3 left-1/5 w-3 h-3 bg-yellow-400/40 rounded-full animate-bounce"
          style={{ animationDuration: "2s" }}
        />

        {/* Moving light streaks */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse" />
        <div
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main content with enhanced glassmorphism */}
      <div className="relative z-10 w-full max-w-lg mx-4">
        {/* Glowing backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl animate-pulse scale-110" />

        <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-10 shadow-2xl">
          {/* Animated logo section */}
          <div className="text-center mb-10 relative">
            {/* Logo glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-xl animate-pulse" />
            </div>

            <div className="relative inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-white/25 to-white/10 rounded-2xl border-2 border-white/30 mb-6 animate-pulse shadow-2xl overflow-hidden">
  <Image
    src="/analogo2upscalde3.png"
    alt="KEY Spor Logo"
    fill
    className="object-cover rounded-lg"
  />
  {/* Logo accent */}
  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping" />
</div>

            <h1 className="text-3xl font-black text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text tracking-widest animate-pulse">
              KEY SPOR
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-2 rounded-full animate-pulse" />
          </div>

          {/* Enhanced coming soon text with animations */}
          <div className="text-center mb-10 relative">
            {/* Background glow for text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-20 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl" />
            </div>

            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight animate-pulse drop-shadow-2xl">
                YAKINDA
              </h2>
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text mb-8 tracking-tight animate-pulse drop-shadow-2xl">
                YAYINDA
              </h2>

              {/* Animated underline */}
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full animate-pulse mb-6" />
            </div>

            {/* Enhanced launch message */}
            <div className="relative">
              <p className="text-gray-200 text-xl leading-relaxed mb-4 animate-pulse">
                🏆 <span className="font-semibold text-white">Spor dünyasında devrim</span> 🏆
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">Yeni nesil spor deneyimi için hazırlanın</p>
              <p className="text-white/90 font-bold text-xl mt-3 animate-bounce">⚡ Çok yakında sizlerle! ⚡</p>
            </div>
          </div>

          {/* Enhanced social media section */}
          <div className="relative">
            <div className="flex justify-center space-x-8 pt-8 border-t border-white/20">
              <a
                href="#"
                className="group relative p-4 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-125 hover:rotate-6 shadow-xl"
                aria-label="Instagram"
              >
                <Instagram className="w-7 h-7 text-white/80 group-hover:text-white transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              </a>

              <a
                href="#"
                className="group relative p-4 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-125 hover:-rotate-6 shadow-xl"
                aria-label="Twitter"
              >
                <Twitter className="w-7 h-7 text-white/80 group-hover:text-white transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              </a>
            </div>

            {/* Call to action */}
            <div className="text-center mt-8">
              <p className="text-white/60 text-sm animate-pulse">Takip edin, ilk öğrenen siz olun! 🚀</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom effects */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-40 bg-gradient-to-t from-blue-500/30 via-purple-500/20 to-transparent blur-3xl animate-pulse" />

      {/* Side accent lights */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-20 h-full bg-gradient-to-r from-blue-500/20 to-transparent blur-2xl animate-pulse" />
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-20 h-full bg-gradient-to-l from-purple-500/20 to-transparent blur-2xl animate-pulse" />
    </div>
  )
}
