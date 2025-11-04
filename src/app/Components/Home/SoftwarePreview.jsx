"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SoftwarePreview = ({ data }) => {
    const softwareData = data;
    const tabs = softwareData.tabs;
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const currentData = softwareData.tabData[activeTab];
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        responsive: [
            { breakpoint: 824, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(currentSlide);
        }
    }, [currentSlide]);

    const handlePrev = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? currentData.sliderData.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentSlide((prev) =>
            prev === currentData.sliderData.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="bg-[#0066FF] text-white py-12">
            {/* Tabs Section */}
            <div className="relative mb-10">
                <div className="flex max-md:justify-start justify-center gap-3 overflow-x-auto no-scrollbar px-6 py-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                setCurrentSlide(0);
                            }}
                            className={`flex-shrink-0 px-6 py-3 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 border cursor-pointer
                                ${activeTab === tab
                                    ? "bg-white text-black border-white shadow-lg"
                                    : "bg-white/20 text-white border-white/40 hover:bg-white/30 hover:text-gray-800"
                                }`}
                            style={{
                                minWidth: "130px",
                                letterSpacing: "0.03em",
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Hide scrollbar */}
                <style jsx>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .no-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>
            </div>

            {/* Heading */}
            <div className="flex flex-col items-center mb-10">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white drop-shadow-xl tracking-wide">
                    {currentData.heading}
                </h2>
            </div>


            {/* Main Section */}
            <div className="md:mx-32 mx-2 flex flex-col items-center">
                <div className="relative flex justify-center w-full max-w-[1500px] h-[550px] rounded-3xl overflow-hidden">

                    {/*  Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={currentData.sliderData[currentSlide]?.img}
                            alt={currentData.sliderData[currentSlide]?.title || "Slide background"}
                            fill
                            className="object-cover object-center transition-all duration-700 ease-in-out"
                            priority
                        />
                    </div>

                    {/* ✅ Overlay Content */}
                    <div className="relative z-10 flex justify-end w-full h-full">
                        <div className="bg-black/70 max-md:w-full max-md:h-1/3 max-md:mt-auto max-md:rounded-2xl w-1/2 h-full p-6 rounded-r-3xl text-center flex flex-col justify-start md:ml-auto">
                            <h3 className="text-xl font-bold">
                                {currentData.sliderData[currentSlide]?.title}
                            </h3>
                            <p className="mt-2 text-base">
                                {currentData.sliderData[currentSlide]?.description}
                            </p>
                        </div>
                    </div>

                    {/* ✅ Desktop Slider */}
                    <div className="absolute bottom-12 w-[600px] px-4 right-0 hidden md:block z-20">
                        <Slider ref={sliderRef} {...settings}>
                            {currentData.sliderData.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`px-2 cursor-pointer transition-all duration-300 ${currentSlide === index ? "opacity-100" : "opacity-100"
                                        }`}
                                    onClick={() => setCurrentSlide(index)}
                                >
                                    <Image
                                        src={slide.img}
                                        alt={slide.title}
                                        width={400}
                                        height={300}
                                        className="rounded-xl shadow-lg w-[300px] h-[250px] object-cover"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                {/*  Mobile Buttons Outside Entire Section */}
                <div className="flex justify-center gap-6 mt-6 md:hidden">
                    <button
                        onClick={handlePrev}
                        className="bg-white/25 hover:bg-white/35 p-3 rounded-full transition border border-white/40 backdrop-blur-md shadow-lg cursor-pointer"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-white/25 hover:bg-white/35 p-3 rounded-full transition border border-white/40 backdrop-blur-md shadow-lg cursor-pointer"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SoftwarePreview;
