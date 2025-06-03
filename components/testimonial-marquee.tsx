"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useEffect, useRef } from "react"

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
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
]

export function TestimonialMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    let scrollPos = 0

    const scroll = () => {
      scrollPos += 0.5
      if (scrollPos >= scrollWidth / 2) {
        scrollPos = 0
      }
      scrollContainer.scrollLeft = scrollPos
    }

    const interval = setInterval(scroll, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div
        ref={scrollRef}
        className="flex space-x-8 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index} className="py-4">
            <Card
              className="w-[300px] h-[250px] p-6 dark:bg-gray-900/50 hover:shadow-md dark:hover:shadow-gray-900/50 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="h-full flex flex-col justify-between p-0">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic line-clamp-3">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
} 