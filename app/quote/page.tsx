"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { MapPin } from "lucide-react"
import Image from "next/image"
import quote from "@/public/images/quote.png"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  location: z.string().min(2, {
    message: "Please enter a valid location.",
  }),
  serviceType: z.string({
    required_error: "Please select a type of service.",
  }),
  budget: z.string().optional(),
  additionalDetails: z.string().optional(),
})

export default function QuoteForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      serviceType: "",
      budget: "",
      additionalDetails: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="rounded-3xl overflow-hidden bg-white shadow-lg flex flex-col lg:flex-row max-w-6xl mx-auto">
        <div className="lg:w-1/2 relative h-[300px] lg:h-auto">
          <Image
            src={quote}
            alt="Luxury pool with wooden deck chairs"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="lg:w-1/2 p-8 lg:p-12">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Get a Free, No-Obligation Quote for Your Dream Pool!</h1>
            <p className="text-[#6B6B6B] text-xl">
              Fill out the form below, and our team will get back to you with a custom quote tailored to your needs.
            </p>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-lg font-semibold mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...form.register("name")}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-1">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  {...form.register("email")}
                  type="email"
                  className="w-full px-3 py-2 border rounded-md text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-lg font-semibold mb-1">
                  Your Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  {...form.register("phone")}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                  placeholder="Enter your Phone number"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-1">
                  Project Location <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    {...form.register("location")}
                    className="w-full pl-8 pr-3 py-2 border rounded-md text-sm"
                    placeholder="Enter your location"
                  />
                  <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-lg font-semibold mb-1">
                  Type of service <span className="text-red-500">*</span>
                </label>
                <select
                  {...form.register("serviceType")}
                  className="w-full px-3 py-2 border text-[#789AA1] rounded-md text-sm appearance-none bg-white"
                  defaultValue=""
                >
                  <option value="new-pool">New Pool</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="renovation">Renovation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-lg font-semibold mb-1">Budget (Optional)</label>
                <input
                  {...form.register("budget")}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                  placeholder="Enter your budget range"
                />
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold mb-1">Additional Details (Optional)</label>
              <textarea
                {...form.register("additionalDetails")}
                className="w-full px-3 py-2 border rounded-md text-sm min-h-[100px]"
                placeholder="Anything else you'd like us to know?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#00A3C4] hover:bg-[#008CAD] text-white py-3 transition-colors"
            >
              View Our Projects
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

