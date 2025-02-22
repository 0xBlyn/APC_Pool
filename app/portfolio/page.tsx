import Image from "next/image";
import features1 from "@/public/images/features1.png";
import features2 from "@/public/images/features2.png";
import features3 from "@/public/images/features3.png";
import features4 from "@/public/images/features4.png";
import features5 from "@/public/images/features5.png";
import features6 from "@/public/images/features6.png";

const features = [
  { id: 1, title: "Infinity Ocean View", description: "Seamless blend with the horizon", image: features1 },
  { id: 2, title: "Tropical Paradise", description: "Luxury lap pool surrounded by nature", image: features2 },
  { id: 3, title: "Modern Minimalist", description: "Contemporary design with clean lines", image: features3 },
  { id: 4, title: "Beachfront Escape", description: "Coastal infinity pool design", image: features4 },
  { id: 5, title: "Villa Oasis", description: "Private pool sanctuary", image: features5 },
  { id: 6, title: "Tropical Garden", description: "Natural pool integration", image: features6 },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#00A3C4] text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Featured Pool Designs</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Explore our collection of stunning pool designs, each crafted to perfection and tailored to unique environments.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-w-16 aspect-h-9 w-full h-full">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-lg md:text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#E6FBFF] py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f]">Ready to Create Your Dream Pool?</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Let&apos;s bring your vision to life with our expert design and construction team.
        </p>
        <button className="mt-8 bg-[#00A3C4] text-white px-6 py-3 rounded-lg font-semibold text-lg md:text-xl hover:bg-[#008CAD] transition-colors">
          Start Your Project
        </button>
      </div>
    </div>
  );
}
