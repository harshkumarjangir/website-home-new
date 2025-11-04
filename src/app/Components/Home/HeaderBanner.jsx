"use client";
import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

const HeaderBanner = ({ data }) => {
    const { phones, tagline, cta, socials } = data;

    return (
        <div className="bg-[#0046E8] text-white py-1 max-md:px-2 px-4 text-sm md:text-[16px] sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex flex-row md:flex-row items-center justify-between gap-2 md:gap-0">

                {/* Left - Phone Numbers + Tagline */}
                <div className="flex flex-wrap items-center justify-start md:justify-start space-x-2 md:space-x-2">
                    {/* <Phone className="text-white w-5 h-5 mr-2" /> */}
                    {phones.map((p, i) => (
                        <span key={i} className="flex items-center space-x-2">
                            <Phone className="text-white w-5 h-5 mr-2" />
                            <a
                                href={`tel:${p.number.replace(/\s+/g, '')}`}
                                target="_blank"
                            >{p.number}</a>
                            <span className="text-gray-400">({p.label})</span>
                            {i !== phones.length - 1 && <span className="mx-2 hidden md:inline">|</span>}
                        </span>
                    ))}
                    <span className="text-blue-400 ml-2 max-md:hidden">{tagline}</span>
                </div>

                {/* Right - CTA + Socials */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2 md:mt-0">
                    {/* CTA Section */}
                    <div className="max-md:hidden flex items-center space-x-2">
                        <div className="relative w-10 h-10">
                            <Image
                                src={cta.icon}
                                alt="AI Icon"
                                fill
                                className="object-contain"
                                sizes="24px"
                            />
                        </div>
                        <span>{cta.text}</span>
                        <span className="text-teal-400 font-bold">{cta.highlight}</span>
                        <span>{cta.subtext}</span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center space-x-3">
                        {socials.map((s, i) => (
                            <a
                                key={i}
                                href={s.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition"
                            >
                                <div className="relative w-6 h-6">
                                    <Image
                                        src={s.icon}
                                        alt={s.name}
                                        fill
                                        className="object-contain"
                                        sizes="24px"
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;

















// "use client";
// import React from "react";
// import homeData from "@/data/homeData.json";
// import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
// import { FaMicrosoft } from "react-icons/fa6"; // Teams icon substitute

// const HeaderBanner = ({ data }) => {
//     const { phones, tagline, cta, socials } = data;

//     return (
//         <div className="bg-black text-white py-2 px-4 flex items-center justify-between text-sm">
//             {/* Left - Phone Numbers */}
//             <div className="flex items-center space-x-4">
//                 <FaPhoneAlt className="text-white mr-2" />
//                 {phones.map((p, i) => (
//                     <span key={i} className="flex items-center space-x-1">
//                         <span>{p.number}</span>
//                         <span className="text-gray-400">({p.label})</span>
//                         {i !== phones.length - 1 && <span className="mx-2">|</span>}
//                     </span>
//                 ))}
//                 <span className="text-blue-400 ml-2">{tagline}</span>
//             </div>

//             {/* Right - CTA + Social Icons */}
//             <div className="flex items-center space-x-4">
//                 {/* CTA */}
//                 <div className="flex items-center space-x-2">
//                     <img src={cta.icon} alt="cta-icon" className="w-6 h-6" />
//                     <span>{cta.text}</span>
//                     <span className="text-teal-400 font-bold">{cta.highlight}</span>
//                     <span>{cta.subtext}</span>
//                 </div>

//                 {/* Socials */}
//                 <div className="flex items-center space-x-3 ml-4">
//                     {socials.map((s, i) => {
//                         const Icon =
//                             s.icon === "FaWhatsapp"
//                                 ? FaWhatsapp
//                                 : s.icon === "FaMicrosoft"
//                                     ? FaMicrosoft
//                                     : SiGmail;
//                         return (
//                             <a
//                                 key={i}
//                                 href={s.link}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="hover:opacity-80"
//                             >
//                                 <Icon className="w-5 h-5" />
//                             </a>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeaderBanner;


// "use client";
// import React from "react";
// import { Phone, Mail, MessageSquare, Users } from "lucide-react";

// const HeaderBanner = ({ data }) => {
//     const { phones, tagline, cta, socials } = data;

//     const getIcon = (name) => {
//         switch (name) {
//             case "WhatsApp":
//                 return <MessageSquare className="w-5 h-5 text-green-500" />;
//             case "Teams":
//                 return <Users className="w-5 h-5 text-indigo-400" />;
//             case "Gmail":
//                 return <Mail className="w-5 h-5 text-red-500" />;
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="bg-black text-white py-2 px-4 text-sm">
//             <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
//                 {/* Left - Phone Numbers + Tagline */}
//                 <div className="flex flex-wrap items-center justify-center md:justify-start space-x-2 md:space-x-4">
//                     <Phone className="text-white w-4 h-4 mr-2" />
//                     {phones.map((p, i) => (
//                         <span key={i} className="flex items-center space-x-1">
//                             <span>{p.number}</span>
//                             <span className="text-gray-400">({p.label})</span>
//                             {i !== phones.length - 1 && <span className="mx-2 hidden md:inline">|</span>}
//                         </span>
//                     ))}
//                     <span className="text-blue-400 ml-2">{tagline}</span>
//                 </div>

//                 {/* Right - CTA + Socials */}
//                 <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2 md:mt-0">
//                     {/* CTA */}
//                     <div className="flex items-center space-x-2">
//                         <img src={cta.icon} alt="cta-icon" className="w-6 h-6" />
//                         <span>{cta.text}</span>
//                         <span className="text-teal-400 font-bold">{cta.highlight}</span>
//                         <span>{cta.subtext}</span>
//                     </div>

//                     {/* Socials */}
//                     <div className="flex items-center space-x-3">
//                         {socials.map((s, i) => (
//                             <a
//                                 key={i}
//                                 href={s.link}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="hover:opacity-80"
//                             >
//                                 {getIcon(s.name)}
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeaderBanner;
