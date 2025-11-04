"use client";
import { useState } from "react";
import Image from "next/image";

export default function ServicesSection({ data }) {
    const { tabs, desktopImg, mobileImg } = data;
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [selectedService, setSelectedService] = useState(tabs[0].services[0]);

    // split services evenly for left/right columns
    const midIndex = Math.ceil((activeTab.services?.length || 0) / 2);
    const leftServices = activeTab.services?.slice(0, midIndex) || [];
    const rightServices = activeTab.services?.slice(midIndex) || [];

    return (
        <section
            className="flex flex-col items-center justify-center py-16 px-4 relative min-h-screen"
            style={{ backgroundColor: activeTab.color }}
        >
            {/* Tabs */}
            <div className="w-full flex max-md:justify-start justify-center overflow-x-auto no-scrollbar px-4 pb-4">
                <div className="inline-flex gap-4">
                    {tabs?.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveTab(tab);
                                setSelectedService(tab.services[0]);
                            }}
                            className={`flex-shrink-0 px-5 py-3 font-semibold rounded-xl transition-all duration-300 relative ${activeTab.id === tab.id
                                ? "bg-white text-black shadow-lg"
                                : "bg-white/20 text-white hover:bg-white/40"
                                }`}
                        >
                            <span className="relative z-10">{tab.title}</span>
                            {activeTab.id === tab.id && (
                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-black rounded-full"></span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Heading */}
            <h2
                className="text-white font-extrabold text-3xl md:text-5xl mb-10 text-center drop-shadow-lg"
                style={{
                    fontFamily: '"Big Shoulders", sans-serif',
                    textShadow: "0px 4px 8px rgba(0,0,0,0.5)",
                }}
            >
                {activeTab.title} Services
            </h2>

            {/* Desktop View */}
            <div className="hidden lg:flex items-center justify-between w-full max-w-6xl gap-10">
                {/* Left Services */}
                <div className="flex flex-col w-1/4 gap-4 max-h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent hover:scrollbar-thumb-white/60">
                    {leftServices.map((service, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedService(service)}
                            className={`relative p-4 pl-8 rounded-3xl font-bold text-white cursor-pointer transition-all ${selectedService.title === service.title
                                ? "bg-white/20"
                                : "bg-black/10 hover:bg-white/10"
                                }`}
                        >
                            <span className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"></span>
                            {service.title}
                        </div>
                    ))}
                </div>

                {/* Center Laptop */}
                <div className="relative flex justify-center items-center">
                    <Image
                        src={desktopImg}
                        alt="Service Laptop"
                        width={550}
                        height={330}
                        className="rounded-md"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8">
                        <h3
                            className="text-white font-bold text-xl md:text-2xl mb-3"
                            style={{
                                fontFamily: "kenyan-coffee-rg",
                                textShadow: "0px 4px 8px rgba(0,0,0,0.5)",
                            }}
                        >
                            {selectedService.title}
                        </h3>
                        <div className="max-h-[120px] max-w-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 no-scrollbar">
                            <p className="text-white text-sm md:text-base leading-relaxed text-center">
                                {selectedService.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Services */}
                <div className="flex flex-col w-1/4 gap-4 max-h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent hover:scrollbar-thumb-white/60">
                    {rightServices.map((service, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedService(service)}
                            className={`relative p-4 pl-8 rounded-3xl font-bold text-white cursor-pointer transition-all ${selectedService.title === service.title
                                ? "bg-white/20"
                                : "bg-black/10 hover:bg-white/10"
                                }`}
                        >
                            <span className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"></span>
                            {service.title}
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile View */}
            <div className="flex flex-col lg:hidden items-center gap-6 w-full max-w-2xl">
                {/* Laptop Image */}
                <div className="relative flex justify-center items-center w-full">
                    <Image
                        src={mobileImg}
                        alt="Service Laptop Mobile"
                        width={400}
                        height={400}
                        className="mx-auto"
                    />
                    <div className="absolute inset-0 flex flex-col justify-start items-center text-center px-5 pt-3">
                        <h3
                            className="text-white font-bold text-lg mb-2"
                            style={{
                                fontFamily: "kenyan-coffee-rg",
                                textShadow: "0px 4px 8px rgba(0,0,0,0.5)",
                            }}
                        >
                            {selectedService.title}
                        </h3>
                        <div className="relative max-h-[130px] max-w-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent hover:scrollbar-thumb-white/30 no-scrollbar">
                            <p className="text-white text-xs sm:text-sm leading-relaxed text-center">
                                {selectedService.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Service Buttons 2-column layout */}
                <div className="grid grid-cols-2 gap-4 w-full max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent hover:scrollbar-thumb-white/20">
                    {activeTab.services.map((service, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedService(service)}
                            className={`relative p-3 pl-6 rounded-2xl font-semibold text-xs sm:text-sm text-white cursor-pointer transition-all ${selectedService.title === service.title
                                ? "bg-white/20"
                                : "bg-black/10 hover:bg-white/10"
                                }`}
                        >
                            <span className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"></span>
                            {service.title}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}










// "use client";
// import { useState } from "react";
// import Image from "next/image";
// // import homeData from "@/data/homeData.json";

// export default function ServicesSection({data}) {
//     const {tabs, desktopImg, mobileImg} = data;
//     const [activeTab, setActiveTab] = useState(tabs[0]);
//     const [selectedService, setSelectedService] = useState(tabs[0].services[0]);

//     return (
//         <section
//             className="flex flex-col items-center justify-center py-16 px-4 relative min-h-screen"
//             style={{ backgroundColor: activeTab.color }}
//         >
//             {/* Tabs */}
//             <div className="w-full flex max-md:justify-start justify-center overflow-x-auto no-scrollbar px-4 pb-4">
//                 <div className="inline-flex gap-4">
//                     {tabs.map((tab) => (
//                         <button
//                             key={tab.id}
//                             onClick={() => {
//                                 setActiveTab(tab);
//                                 setSelectedService(tab.services[0]);
//                             }}
//                             className={`flex-shrink-0 px-5 py-3 font-semibold rounded-xl transition-all duration-300 relative ${activeTab.id === tab.id
//                                     ? "bg-white text-black shadow-lg"
//                                     : "bg-white/20 text-white hover:bg-white/40"
//                                 }`}
//                         >
//                             <span className="relative z-10">{tab.title}</span>
//                             {activeTab.id === tab.id && (
//                                 <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-black rounded-full"></span>
//                             )}
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Heading */}
//             <h2
//                 className="text-white font-extrabold text-3xl md:text-5xl mb-10 text-center drop-shadow-lg"
//                 style={{
//                     fontFamily: '"Big Shoulders", sans-serif',
//                     textShadow: "0px 4px 8px rgba(0,0,0,0.5)",
//                 }}
//             >
//                 {activeTab.title} Services
//             </h2>

//             {/* Desktop View */}
//             <div className="hidden lg:flex items-center justify-between w-full max-w-6xl gap-10">
//                 {/* Left Services */}
//                 <div className="flex flex-col w-1/4 gap-4">
//                     {activeTab.services.slice(0, 3).map((service, i) => (
//                         <div
//                             key={i}
//                             onClick={() => setSelectedService(service)}
//                             className={`relative p-4 pl-8 rounded-3xl font-bold text-white cursor-pointer transition-all ${selectedService.title === service.title
//                                     ? "bg-white/20"
//                                     : "bg-black/10 hover:bg-white/10"
//                                 }`}
//                         >
//                             <span className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"></span>
//                             {service.title}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Center Laptop */}
//                 <div className="relative flex justify-center items-center">
//                     <Image
//                         src="/assets/home/services/service-img.png"
//                         alt="Service Laptop"
//                         width={550}
//                         height={330}
//                         className="rounded-md"
//                     />
//                     <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8">
//                         <h3
//                             className="text-white font-bold text-xl md:text-2xl mb-3"
//                             style={{
//                                 fontFamily: "kenyan-coffee-rg",
//                                 textShadow: "0px 4px 8px rgba(0,0,0,0.5)",
//                             }}
//                         >
//                             {selectedService.title}
//                         </h3>
//                         <div className="max-h-[120px] max-w-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 no-scrollbar">
//                             <p className="text-white text-sm md:text-base leading-relaxed text-center">
//                                 {selectedService.description}
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Services */}
//                 <div className="flex flex-col w-1/4 gap-4">
//                     {activeTab.services.slice(3).map((service, i) => (
//                         <div
//                             key={i}
//                             onClick={() => setSelectedService(service)}
//                             className={`relative p-4 pl-8 rounded-3xl font-bold text-white cursor-pointer transition-all ${selectedService.title === service.title
//                                     ? "bg-white/20"
//                                     : "bg-black/10 hover:bg-white/10"
//                                 }`}
//                         >
//                             <span className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"></span>
//                             {service.title}
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Mobile View */}
//             <div className="flex flex-col lg:hidden items-center gap-6 w-full max-w-2xl">
//                 {/* Laptop Image */}
//                 <div className="relative flex justify-center items-center w-full">
//                     <Image
//                         src="/assets/home/services/services-res.webp"
//                         alt="Service Laptop Mobile"
//                         width={400}
//                         height={400}
//                         className="mx-auto"
//                     />
//                     <div className="absolute inset-0 flex flex-col justify-start items-center text-center px-5 pt-3">
//                         <h3
//                             className="text-white font-bold max-sm:text-sm text-lg mb-2"
//                             style={{
//                                 fontFamily: "kenyan-coffee-rg",
//                                 textShadow: "0px 4px 8px rgba(0,0,0,0.5)",
//                             }}
//                         >
//                             {selectedService.title}
//                         </h3>
//                         <div className="relative max-h-[110px] max-w-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 no-scrollbar">
//                             <p className="text-white text-xs sm:text-sm leading-relaxed text-center">
//                                 {selectedService.description}
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Service Buttons 2-column layout */}
//                 <div className="grid grid-cols-2 gap-4 w-full">
//                     {activeTab.services.map((service, i) => (
//                         <div
//                             key={i}
//                             onClick={() => setSelectedService(service)}
//                             className={`relative p-3 pl-6 rounded-2xl font-semibold text-xs sm:text-sm text-white cursor-pointer transition-all ${selectedService.title === service.title
//                                     ? "bg-white/20"
//                                     : "bg-black/10 hover:bg-white/10"
//                                 }`}
//                         >
//                             <span className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"></span>
//                             {service.title}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
