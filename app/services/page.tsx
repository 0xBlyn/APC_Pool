import { Mail, Phone } from "lucide-react";

export default function ServicesPage() {
    return (
      <div>
        <div className="bg-[#00A3C4] text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
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
        <div className="container mx-auto py-6 px-[5%]">
          <div className="grid md:grid-cols-[250px,1fr] gap-8">
            {/* Sidebar Navigation */}
            <nav className="space-y-4 hidden md:flex md:flex-col  border-[#1f1f1f] border-r-2">
              <a href="#custom-pool-design" className="block text-lg font-medium hover:text-[#00B5E2] transition-colors">
                Custom Pool Design
              </a>
              <a href="#pool-installation" className="block text-lg font-medium hover:text-[#00B5E2] transition-colors">
                Pool Installation
              </a>
              <a
                href="#renovation-remodeling"
                className="block text-lg font-medium hover:text-[#00B5E2] transition-colors"
              >
                Pool Renovation & Remodeling
              </a>
              <a href="#maintenance-repairs" className="block text-lg font-medium hover:text-[#00B5E2] transition-colors">
                Pool Maintenance & Repairs
              </a>
              <a
                href="#features-landscaping"
                className="block text-lg font-medium hover:text-[#00B5E2] transition-colors"
              >
                Water Features & Landscaping
              </a>
            </nav>
  
            {/* Content */}
            <div className="space-y-5">
  
              <section id="custom-pool-design">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Custom Pool Design</h2>
                <p className="text-gray-600 leading-relaxed">
                  Every pool we design is tailored to your unique preferences and space. From sleek modern pools to
                  natural lagoon-style retreats, we bring your ideas to life with innovative designs and premium
                  materials.
                </p>
              </section>
  
              <section id="pool-installation">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Pool Installation</h2>
                <p className="text-gray-600 leading-relaxed">
                  We handle every step of the pool construction process, ensuring a seamless and stress-free experience.
                  Our expert builders use high-quality materials and the latest techniques to create durable, beautiful
                  pools.
                </p>
              </section>
  
              <section id="renovation-remodeling">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Pool Renovation & Remodeling</h2>
                <p className="text-gray-600 leading-relaxed">
                  Want to upgrade an outdated pool? We specialize in pool renovations, including resurfacing, adding new
                  features, and modernizing designs to give your pool a fresh, stunning look.
                </p>
              </section>
  
              <section id="maintenance-repairs">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Pool Maintenance & Repairs</h2>
                <p className="text-gray-600 leading-relaxed">
                  Keep your pool in perfect condition year-round with our professional maintenance services. From routine
                  cleaning to equipment repairs, we ensure your pool remains clean, safe, and functional.
                </p>
              </section>
  
              <section id="features-landscaping">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Water Features & Landscaping</h2>
                <p className="text-gray-600 leading-relaxed">
                  Enhance your pool&apos;s beauty with waterfalls, fountains, LED lighting, and landscaping. We create the
                  perfect ambiance for relaxation and entertainment.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  