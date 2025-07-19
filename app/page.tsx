import { Instagram, Twitter, Mail, Calendar, Star, Zap } from "lucide-react"
import Image from "next/image"

export default function ComingSoon() {
  return (
    <div className="h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-pink-600/30 to-red-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />

      {/* Main Glassmorphism Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl">
        
        {/* Logo with Glow */}
        <div className="relative mb-6">
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-60 animate-pulse" style={{ animationDuration: '6s' }}/>
          <div className="relative w-48 h-48 md:w-56 md:h-56 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
            <Image
              src="/analogo2upscalde3.png"
              alt="KEY Spor Logo"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 text-center">
          <span className="text-transparent bg-gradient-to-br from-white via-gray-300 to-white bg-clip-text">ÇOK</span>
          <span className="text-transparent bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 bg-clip-text"> YAKINDA</span>
        </h1>

        {/* Sub-description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl text-center mb-8">
          Sporun geleceği yeniden yazılıyor. Eşsiz bir deneyim için hazır olun.
        </p>

        {/* CTA Form */}
        <div className="w-full max-w-lg mb-8">
          <form className="flex flex-col sm:flex-row gap-3 bg-white/5 border border-white/10 p-3 rounded-xl backdrop-blur-sm">
            <input 
              type="email" 
              placeholder="E-posta adresinizle ilk duyan siz olun"
              className="flex-1 px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Haberdar Et
            </button>
          </form>
        </div>

        {/* Features & Socials */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-gray-400">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Calendar className="w-5 h-5 text-blue-400"/>Canlı Maçlar</span>
            <span className="flex items-center gap-2"><Star className="w-5 h-5 text-purple-400"/>Premium İçerik</span>
            <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-pink-400"/>Anlık Bildirimler</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-white/20"></div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-600 text-sm">
        © 2024 KEY SPOR. Tüm hakları saklıdır.
      </footer>
    </div>
  )
}
