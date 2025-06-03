import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AppScreenshotMarquee } from "@/components/app-screenshot-marquee"
import {
  MapPin,
  Star,
  DollarSign,
  Package,
  Shield,
  Smartphone,
  Clock,
  Users,
  CheckCircle,
  Download,
  Play,
  ArrowRight,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-center relative max-w-7xl">
          <div className="absolute left-4">
            <Link href="/">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                Kiloan
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm font-medium">
              Fitur
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm font-medium">
              Cara Kerja
            </Link>
            <Link href="#download" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm font-medium">
              Download
            </Link>
          </nav>
          <div className="absolute right-4 flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 dark:from-emerald-500 dark:to-teal-500 dark:hover:from-emerald-600 dark:hover:to-teal-600 text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/30">
              Download App
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50/80 via-white/90 to-teal-50/80 dark:from-emerald-900/70 dark:via-gray-900/90 dark:to-teal-900/70">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-100 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                  Platform Laundry Terpercaya untuk Mahasiswa
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                  Laundry Jadi Mudah dengan{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                    Kiloan
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Temukan laundry terpercaya di sekitar kos-mu dengan harga transparan, rating real-time, dan tracking
                  pesanan. Khusus untuk mahasiswa yang ingin hidup lebih praktis.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 dark:from-emerald-500 dark:to-teal-500 dark:hover:from-emerald-600 dark:hover:to-teal-600 text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/30 text-lg px-8">
                  <Download className="w-5 h-5 mr-2" />
                  Download Gratis
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800/50 transition-all duration-300">
                  <Play className="w-5 h-5 mr-2" />
                  Lihat Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>2000+ Mahasiswa</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>15+ Laundry Partner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>4.8 Rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <AppScreenshotMarquee />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 dark:from-emerald-500 dark:to-teal-500 rounded-3xl blur-3xl opacity-20 scale-105 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-bl from-teal-50/80 via-white/90 to-emerald-50/80 dark:from-teal-900/70 dark:via-gray-900/90 dark:to-emerald-900/70">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              Masalah yang Sering Dialami Mahasiswa Kos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dari riset kami terhadap 9 juta+ mahasiswa Indonesia, ini adalah keluhan utama mereka tentang layanan
              laundry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Susah Cari Laundry",
                description: "Tidak tahu laundry mana yang dekat dan terpercaya",
              },
              {
                icon: DollarSign,
                title: "Harga Tidak Jelas",
                description: "Sering kaget dengan biaya tambahan yang tidak transparan",
              },
              {
                icon: Shield,
                title: "Kualitas Tidak Pasti",
                description: "Tidak ada jaminan hasil cucian akan memuaskan",
              },
              {
                icon: Clock,
                title: "Tidak Bisa Tracking",
                description: "Tidak tahu kapan laundry selesai dan siap diambil",
              },
            ].map((problem, index) => (
              <Card key={index} className="text-center p-6 border-red-100 dark:border-red-900/50 bg-red-50/50 dark:bg-red-950/50 hover:shadow-lg dark:hover:shadow-red-900/20 transition-all duration-300">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-lg flex items-center justify-center mx-auto">
                    <problem.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{problem.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-tr from-emerald-50/80 via-white/90 to-teal-50/80 dark:from-emerald-900/70 dark:via-gray-900/90 dark:to-teal-900/70">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              Solusi Lengkap dari Kiloan
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Fitur-fitur yang dirancang khusus untuk mengatasi semua masalah laundry mahasiswa kos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Pencarian Berbasis Lokasi",
                description: "Temukan laundry terdekat dari kos-mu dengan mudah. Urutkan berdasarkan jarak dan rating.",
                iconBg: "bg-emerald-100 dark:bg-emerald-900/50",
                iconColor: "text-emerald-600 dark:text-emerald-400"
              },
              {
                icon: Star,
                title: "Rating & Ulasan Real-time",
                description: "Baca review jujur dari sesama mahasiswa untuk memilih laundry terbaik.",
                iconBg: "bg-yellow-100 dark:bg-yellow-900/50",
                iconColor: "text-yellow-600 dark:text-yellow-400"
              },
              {
                icon: DollarSign,
                title: "Harga Transparan",
                description: "Lihat estimasi harga sebelum pesan. Tidak ada biaya tersembunyi.",
                iconBg: "bg-green-100 dark:bg-green-900/50",
                iconColor: "text-green-600 dark:text-green-400"
              },
              {
                icon: Package,
                title: "Tracking Pesanan",
                description: "Pantau status laundry-mu secara real-time dari proses hingga siap diambil.",
                iconBg: "bg-blue-100 dark:bg-blue-900/50",
                iconColor: "text-blue-600 dark:text-blue-400"
              },
              {
                icon: Shield,
                title: "Laundry Terverifikasi",
                description: "Badge khusus untuk laundry yang sudah diverifikasi kualitas dan keamanannya.",
                iconBg: "bg-purple-100 dark:bg-purple-900/50",
                iconColor: "text-purple-600 dark:text-purple-400"
              },
              {
                icon: Smartphone,
                title: "Perbandingan Layanan",
                description: "Bandingkan harga, rating, dan layanan dari berbagai laundry dalam satu tampilan.",
                iconBg: "bg-orange-100 dark:bg-orange-900/50",
                iconColor: "text-orange-600 dark:text-orange-400"
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="space-y-4 p-0">
                  <div className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-tl from-teal-50/80 via-white/90 to-emerald-50/80 dark:from-teal-900/70 dark:via-gray-900/90 dark:to-emerald-900/70">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              Cara Kerja Kiloan
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Hanya 4 langkah mudah untuk laundry yang hassle-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Cari Laundry",
                description: "Buka app dan temukan laundry terdekat dari lokasi kos-mu",
              },
              {
                step: "2",
                title: "Pilih & Bandingkan",
                description: "Lihat rating, harga, dan ulasan. Pilih yang paling sesuai",
              },
              {
                step: "3",
                title: "Pesan & Antar",
                description: "Buat pesanan dan antar pakaian ke laundry pilihan",
              },
              {
                step: "4",
                title: "Track & Ambil",
                description: "Pantau progress dan ambil pakaian saat sudah selesai",
              },
            ].map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg shadow-emerald-500/20">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mx-auto lg:hidden animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gradient-to-br from-emerald-50/80 via-white/90 to-teal-50/80 dark:from-emerald-900/70 dark:via-gray-900/90 dark:to-teal-900/70">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              Dipercaya Ribuan Mahasiswa
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Lihat apa kata mereka tentang Kiloan
            </p>
          </div>

          <div className="relative">
            <div className="flex animate-marquee space-x-8">
              {[
                {
                  name: "Sari Dewi",
                  role: "Mahasiswa FIK UI",
                  content:
                    "Kiloan bener-bener ngebantu banget! Sekarang gak perlu bingung lagi cari laundry yang bagus dan murah di sekitar kos.",
                  rating: 5,
                },
                {
                  name: "Ahmad Rizki",
                  role: "Mahasiswa FT UI",
                  content:
                    "Fitur tracking-nya keren banget. Jadi tau kapan laundry selesai tanpa harus bolak-balik tanya ke tukang laundry.",
                  rating: 5,
                },
                {
                  name: "Maya Putri",
                  role: "Mahasiswa FISIP UI",
                  content:
                    "Harga transparan dan ada review dari mahasiswa lain. Jadi lebih percaya deh pilih laundry yang mana.",
                  rating: 5,
                },
                {
                  name: "Budi Santoso",
                  role: "Mahasiswa FK UI",
                  content:
                    "Aplikasinya user-friendly banget. Dari booking sampai pembayaran semuanya gampang dan cepat.",
                  rating: 5,
                },
                {
                  name: "Dewi Lestari",
                  role: "Mahasiswa FEB UI",
                  content:
                    "Customer service-nya responsif dan membantu. Kalo ada masalah langsung ditangani dengan baik.",
                  rating: 5,
                },
                {
                  name: "Rendi Pratama",
                  role: "Mahasiswa FMIPA UI",
                  content:
                    "Promo dan diskonnya sering update. Jadi bisa hemat buat laundry bulanan.",
                  rating: 5,
                },
                {
                  name: "Nina Wijaya",
                  role: "Mahasiswa FH UI",
                  content:
                    "Laundry partner-nya terverifikasi semua. Jadi lebih aman dan terjamin kualitasnya.",
                  rating: 5,
                },
                {
                  name: "Fajar Ramadhan",
                  role: "Mahasiswa FIB UI",
                  content:
                    "Sistem rating dan review-nya membantu banget buat pilih laundry yang terbaik.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="min-w-[300px] p-6 dark:bg-gray-900/50 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="space-y-4 p-0">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 dark:from-emerald-900 dark:via-emerald-800 dark:to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Siap Untuk Pengalaman Laundry yang Lebih Baik?
            </h2>
            <p className="text-xl text-emerald-50/90">
              Download Kiloan sekarang dan rasakan kemudahan mencari laundry terpercaya di sekitar kos-mu. Gratis untuk
              semua mahasiswa!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="group relative bg-white text-emerald-600 hover:bg-emerald-50 dark:bg-emerald-50 dark:text-emerald-900 dark:hover:bg-emerald-100 text-lg px-8 shadow-lg shadow-black/10 transition-all duration-300 hover:shadow-black/20 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Download className="w-5 h-5 mr-2 transition-transform group-hover:translate-y-0.5" />
                  Download di Play Store
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-100 dark:to-teal-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group relative bg-white/10 text-white border-white/20 hover:bg-white/20 dark:bg-emerald-900/50 dark:text-emerald-50 dark:border-emerald-400/20 dark:hover:bg-emerald-900/70 text-lg px-8 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Download className="w-5 h-5 mr-2 transition-transform group-hover:translate-y-0.5" />
                  Download di App Store
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 dark:from-emerald-400/10 dark:to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-emerald-50/90">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>100% Gratis</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Khusus Mahasiswa</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Laundry Terverifikasi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Kiloan</span>
              </div>
              <p className="text-gray-400">
                Platform laundry terpercaya untuk mahasiswa Indonesia. Hidup lebih praktis, laundry lebih mudah.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Produk</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    Fitur
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-white transition-colors">
                    Cara Kerja
                  </Link>
                </li>
                <li>
                  <Link href="#download" className="hover:text-white transition-colors">
                    Harga
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Perusahaan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Karir
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Dukungan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Bantuan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Kontak
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Kiloan. Dibuat dengan ❤️ untuk mahasiswa Universitas Indonesia.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
