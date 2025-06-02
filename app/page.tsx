import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Kiloan</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Fitur
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              Cara Kerja
            </Link>
            <Link href="#download" className="text-gray-600 hover:text-gray-900 transition-colors">
              Download
            </Link>
          </nav>
          <Button className="bg-emerald-600 hover:bg-emerald-700">Download App</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                  Platform Laundry Terpercaya untuk Mahasiswa
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Laundry Jadi Mudah dengan <span className="text-emerald-600">Kiloan</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Temukan laundry terpercaya di sekitar kos-mu dengan harga transparan, rating real-time, dan tracking
                  pesanan. Khusus untuk mahasiswa yang ingin hidup lebih praktis.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
                  <Download className="w-5 h-5 mr-2" />
                  Download Gratis
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Play className="w-5 h-5 mr-2" />
                  Lihat Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
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
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Kiloan App Screenshot"
                  width={400}
                  height={600}
                  className="mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-3xl opacity-20 scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Masalah yang Sering Dialami Mahasiswa Kos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <Card key={index} className="text-center p-6 border-red-100 bg-red-50">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{problem.title}</h3>
                  <p className="text-sm text-gray-600">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Solusi Lengkap dari Kiloan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fitur-fitur yang dirancang khusus untuk mengatasi semua masalah laundry mahasiswa kos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Pencarian Berbasis Lokasi",
                description: "Temukan laundry terdekat dari kos-mu dengan mudah. Urutkan berdasarkan jarak dan rating.",
                color: "emerald",
              },
              {
                icon: Star,
                title: "Rating & Ulasan Real-time",
                description: "Baca review jujur dari sesama mahasiswa untuk memilih laundry terbaik.",
                color: "yellow",
              },
              {
                icon: DollarSign,
                title: "Harga Transparan",
                description: "Lihat estimasi harga sebelum pesan. Tidak ada biaya tersembunyi.",
                color: "green",
              },
              {
                icon: Package,
                title: "Tracking Pesanan",
                description: "Pantau status laundry-mu secara real-time dari proses hingga siap diambil.",
                color: "blue",
              },
              {
                icon: Shield,
                title: "Laundry Terverifikasi",
                description: "Badge khusus untuk laundry yang sudah diverifikasi kualitas dan keamanannya.",
                color: "purple",
              },
              {
                icon: Smartphone,
                title: "Perbandingan Layanan",
                description: "Bandingkan harga, rating, dan layanan dari berbagai laundry dalam satu tampilan.",
                color: "orange",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Cara Kerja Kiloan</h2>
            <p className="text-xl text-gray-600">Hanya 4 langkah mudah untuk laundry yang hassle-free</p>
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
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && <ArrowRight className="w-6 h-6 text-emerald-600 mx-auto lg:hidden" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Dipercaya Ribuan Mahasiswa</h2>
            <p className="text-xl text-gray-600">Lihat apa kata mereka tentang Kiloan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4 p-0">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Siap Untuk Pengalaman Laundry yang Lebih Baik?
            </h2>
            <p className="text-xl text-emerald-100">
              Download Kiloan sekarang dan rasakan kemudahan mencari laundry terpercaya di sekitar kos-mu. Gratis untuk
              semua mahasiswa!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8">
                <Download className="w-5 h-5 mr-2" />
                Download di Play Store
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8"
              >
                <Download className="w-5 h-5 mr-2" />
                Download di App Store
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-emerald-100">
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
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Kiloan</span>
              </div>
              <p className="text-gray-400">
                Platform laundry terpercaya untuk mahasiswa Indonesia. Hidup lebih praktis, laundry lebih mudah.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Produk</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Fitur
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cara Kerja
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
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
            <p>&copy; 2025 Kiloan. Dibuat dengan ❤️ untuk mahasiswa Indonesia.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
