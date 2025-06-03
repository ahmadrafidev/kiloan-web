import Image from "next/image"

const screenshots = [
  "/images/pages/Home Page.png",
  "/images/pages/Find Laundry.png",
  "/images/pages/Detail Laundry.png",
  "/images/pages/Check Laundry.png",
  "/images/pages/Track Laundry.png",
  "/images/pages/Foto Track Laundry.png",
]

export function AppScreenshotMarquee() {
  return (
    <div className="relative w-full max-w-[90vw] mx-auto overflow-hidden rounded-xl border border-transparent shadow-2xl dark:shadow-gray-900/50">
      <div className="flex animate-marquee space-x-3 sm:space-x-4 md:space-x-8">
        {screenshots.map((src, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-[160px] h-[320px] xs:w-[180px] xs:h-[360px] sm:w-[200px] sm:h-[400px] md:w-[240px] md:h-[480px] lg:w-[280px] lg:h-[560px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl dark:shadow-gray-900/50 transition-all duration-200 hover:scale-[1.02]"
          >
            <Image
              src={src}
              alt={`Kiloan App Screenshot ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 480px) 160px, (max-width: 640px) 180px, (max-width: 768px) 200px, (max-width: 1024px) 240px, 280px"
              priority={index < 2}
            />
          </div>
        ))}
      </div>
    </div>
  )
} 