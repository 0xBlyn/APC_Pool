"use client"
import Image from "next/image"
import { Clock, Shield, Star } from "lucide-react"
import homework from "@/public/images/homework.png"
import img1 from "@/public/images/Image (1).png"
import img2 from "@/public/images/Image (2).png"
import img3 from "@/public/images/Image (3).png"
import img4 from "@/public/images/Image (4).png"
import group from "@/public/images/Group 1.png"
import hero from "@/public/images/Group 2.png"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative w-full h-[750px] rounded-[32px] mx-auto mt-8 overflow-hidden max-w-[90%] flex items-start justify-start">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={hero || "/placeholder.svg"}
            alt="Luxury pool with gazebo"
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Text Content */}
        <motion.div
          className="relative z-10 text-white p-12 md:py-[15%] py-[5%] max-w-[600px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Building Dream Pools with Passion & Precision.
          </h1>
          <p className="text-white/90 text-lg md:text-xl mt-4">
            Custom Pool Designs, Expert Craftsmanship, and Unmatched Quality.
          </p>
        </motion.div>
      </section>
      {/* Hero Section */}
      <section className="container pb-10 px-[5%]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl text-[#191919] font-bold leading-tight">
              Redefining Pool Construction with Cutting-Edge Innovation and Superior Craftsmanship
            </h1>
            <p className="text-[#6B6B6B] text-xl md:text-2xl font-medium">
              Building Exceptional Pools with Innovation, Precision, and Unmatched Craftsmanship for Lasting Enjoyment.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#E6FBFF] rounded-full">
                  <Clock className="w-5 h-5 text-[#00A3C4]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#191919] text-2xl">Decades of Experience</h3>
                  <p className="text-[#191919] font-medium text-xl md:text-2xl">Trusted pool builders with years of expertise</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#E6FBFF] rounded-full">
                  <Shield className="w-5 h-5 text-[#00A3C4]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#191919] text-2xl">Premium Materials</h3>
                  <p className="text-[#191919] font-medium text-xl md:text-2xl">
                    Durable, high-quality finishes for long-lasting beauty
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#E6FBFF] rounded-full">
                  <Star className="w-5 h-5 text-[#00A3C4]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#191919] text-2xl">Fast Response</h3>
                  <p className="text-[#191919] font-medium text-xl md:text-2xl">We'll get back to you within 24 hours</p>
                </div>
              </div>
            </div>

            <button className="flex items-center justify-center text-xl gap-2 bg-[#00A3C4] text-white px-6 py-3 w-full font-semibold hover:bg-[#008CAD] transition-colors">
              View Our Projects
            </button>
          </div>

          <div>
            <Image src={group || "/placeholder.svg"} height={500} width={600} alt="pool images" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-[5%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#E6FBFF] pb-8 rounded-[15px] overflow-hidden shadow-lg transition-transform hover:scale-105">
              <Image
                src={img1 || "/placeholder.svg"}
                alt="Custom Pool Design"
                width={400}
                height={300}
                className="w-full rounded-b-[20px] h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-[#00A3C4] font-semibold">Custom Pool Design</h3>
                <p className="text-[#4B4B4B] font-semibold ">Unique pools crafted to match your vision</p>
              </div>
            </div>

            <div className="bg-[#E6FBFF] rounded-[15px] overflow-hidden shadow-lg transition-transform hover:scale-105">
              <Image
                src={img2 || "/placeholder.svg"}
                alt="Pool Installation"
                width={400}
                height={300}
                className="w-full rounded-b-[20px] h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-[#00A3C4] font-semibold">Pool Installation</h3>
                <p className="text-[#4B4B4B] font-semibold ">High-quality construction with precision and care</p>
              </div>
            </div>

            <div className="bg-[#E6FBFF]  rounded-[15px] overflow-hidden shadow-lg transition-transform hover:scale-105">
              <Image
                src={img3 || "/placeholder.svg"}
                alt="Pool Renovation"
                width={400}
                height={300}
                className="w-full rounded-b-[20px] h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-[#00A3C4] font-semibold">Pool Renovation</h3>
                <p className="text-[#4B4B4B] font-semibold ">Modernize and upgrade your existing pool</p>
              </div>
            </div>

            <div className="bg-[#E6FBFF] rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
              <Image
                src={img4 || "/placeholder.svg"}
                alt="Pool Maintenance & Repairs"
                width={400}
                height={300}
                className="w-full rounded-b-[20px] h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-[#00A3C4] font-semibold">Pool Maintenance & Repairs</h3>
                <p className="text-[#4B4B4B] font-semibold ">Keep your pool in perfect condition year-round</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <div className="text-center pt-[5%] bg-[#E6FBFF]">
        <h2 className="text-3xl font-bold">Our Work in Action</h2>
      </div>
      <div className="flex justify-center bg-[#E6FBFF] gap-6 flex-wrap py-[5%] px-[5%]">
        {pools.map((pool, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg w-full sm:w-[85%] md:w-[45%] lg:w-[30%] xl:w-[28%]">
            <Image
              src={pool.image || "/placeholder.svg"}
              alt={pool.title}
              width={360}
              height={250}
              className="w-full rounded-t-lg h-[250px] object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl text-[#00A3C4] font-bold mt-4">{pool.title}</h3>
              <p className="text-gray-700 text-lg mt-2">{pool.description}</p>
              <ul className="mt-4">
                {pool.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm md:text-base">
                    <span className="text-black">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Section */}
      <div className="bg-[#00A3C4] text-white mx-[5%] my-10 rounded-[19px] md:py-[5%] py-[8%] p-8 text-center">
        <h1 className="text-2xl md:text-3xl pb-3 font-bold">Get Your Free Quote Today!</h1>
        <h3 className="mt-2 text-lg">
          Start your pool project with a free consultation. Our team is ready to
          <br className="hidden md:flex" /> design and build the perfect pool for you.
        </h3>
        <button className="mt-4 text-lg bg-white text-[#00A3C4] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Get a Free Quote
        </button>
      </div>
    </div>
  )
}

const pools = [
  {
    title: "The Coastal Retreat Pool",
    description:
      "A stunning infinity-edge pool designed to blend seamlessly with the ocean view. Featuring crystal-clear water, LED lighting, and a built-in spa section, this project redefines luxury and relaxation.",
    features: ["Infinity-edge design", "Premium tile finish", "Automated lighting & filtration system"],
    image: homework,
  },
  {
    title: "The Family Paradise Pool",
    description:
      "A spacious, kid-friendly pool designed for ultimate family fun. Complete with a shallow play area, a built-in waterfall, and non-slip surfaces, this pool is perfect for both relaxation and recreation.",
    features: ["Child-safe shallow area", "Waterfall feature for ambiance", "Energy-efficient heating system"],
    image: homework,
  },
  {
    title: "The Family Paradise Pool",
    description:
      "A spacious, kid-friendly pool designed for ultimate family fun. Complete with a shallow play area, a built-in waterfall, and non-slip surfaces, this pool is perfect for both relaxation and recreation.",
    features: ["Child-safe shallow area", "Waterfall feature for ambiance", "Energy-efficient heating system"],
    image: homework,
  },
]

