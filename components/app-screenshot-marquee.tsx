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
    <div className="relative w-full overflow-hidden rounded-xl border border-transparent shadow-2xl dark:shadow-gray-900/50">
      <div className="flex animate-marquee space-x-8">
        {screenshots.map((src, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-[280px] h-[560px] rounded-3xl overflow-hidden shadow-2xl dark:shadow-gray-900/50 transition-all duration-200 hover:scale-[1.02]"
          >
            <Image
              src={src}
              alt={`Kiloan App Screenshot ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 280px, 280px"
              priority={index < 2}
            />
          </div>
        ))}
      </div>
    </div>
  )
} 