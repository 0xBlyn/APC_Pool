import { Mail, Phone } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-[#00A3C4] text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:contact@poolside.com">contact@poolside.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+234809797087">+234 809 7978 087</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-10 px-[5%]">
        <div className="grid md:grid-cols-[250px,1fr] gap-8">
          {/* Sidebar Navigation */}
          <nav className="space-y-4 hidden md:flex md:flex-col  border-[#1f1f1f] border-r-2">
            <a href="#who-we-are" className="block text-lg font-bold hover:text-[#00B5E2] transition-colors">
              Who We Are
            </a>
            <a href="#our-mission" className="block text-lg font-bold hover:text-[#00B5E2] transition-colors">
              Our Mission
            </a>
            <a href="#our-vision" className="block text-lg font-bold hover:text-[#00B5E2] transition-colors">
              Our Vision
            </a>
          </nav>

          {/* Content */}
          <div className="space-y-5">
            <section id="who-we-are">
              <h2 className="text-2xl md:text-3xl font-bold">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Pool side is a leading pool construction company dedicated to designing, building, and maintaining
                premium swimming pools. With years of experience in the industry, we take pride in transforming outdoor
                spaces into luxurious escapes.
              </p>
            </section>

            <section id="our-mission">
              <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide top-quality, custom pool solutions that enhance lifestyles and add value to homes, all while
                delivering superior craftsmanship and customer satisfaction.
              </p>
            </section>

            <section id="our-vision">
              <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Want to upgrade an outdated pool? We specialize in pool renovations, including resurfacing, adding new
                features, and modernizing designs to give your pool a fresh, stunning look.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

