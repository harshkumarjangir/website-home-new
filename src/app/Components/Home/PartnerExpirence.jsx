"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import homeData from "@/data/homeData.json";

export default function PartnershipExperience({ data }) {
  const { heading, description, testimonials } = data;
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-black text-white py-12 sm:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">
          {heading}
        </h2>
        <p className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-12 max-w-5xl">
          {description}
        </p>

        {/* Arrows (desktop) */}
        <div className="hidden sm:flex justify-end gap-3 mb-6">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-gray-600 hover:bg-[#116BFB] transition"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-gray-600 hover:bg-[#116BFB] transition"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            animate={{ x: `-${current * 100}%` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 px-2 sm:px-6"
                style={{ flex: "0 0 100%" }}
              >
                <div className="bg-transparent border border-[#343434] rounded-xl sm:rounded-2xl p-6 sm:p-12 shadow-lg">
                  <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    {testimonial.text}
                  </p>
                  <hr className="text-[#343434] mb-4" />

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={60}
                        height={60}
                        className="rounded-lg sm:w-[80px] sm:h-[80px]"
                      />
                      <div>
                        <h4 className="font-semibold text-white">
                          {testimonial.author}
                        </h4>
                        <p className="text-gray-400 text-sm sm:text-base">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-400 text-sm sm:text-base">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <Image
                      src={testimonial.logo}
                      alt="Company Logo"
                      width={100}
                      height={50}
                      className="object-contain max-sm:hidden rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Arrows (mobile) */}
        <div className="flex sm:hidden justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-gray-600 hover:bg-[#116BFB] transition"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-gray-600 hover:bg-[#116BFB] transition"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
