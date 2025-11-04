// import Image from "next/image";
// import homeData from "@/data/homeData.json";

// const PartnershipSection = ({ data }) => {
//   const { title, logos } = data;

//   return (
//     <section className="bg-black text-white py-16 px-6 md:px-16">
//       <div className="mx-auto">
//         <h2 className="text-3xl md:text-4xl mb-12">
//           {title}
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
//           {logos.map((logo, index) => (
//             <div key={index} className="grayscale hover:grayscale-0 transition">
//               <Image
//                 src={logo.src}
//                 alt={logo.name}
//                 width={150}
//                 height={60}
//                 className="object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// export default PartnershipSection;



// "use client";
// import Image from "next/image";
// import React from "react";

// const PartnershipSection = ({ data }) => {
//   const { title, logos } = data;

//   return (
//     <section className="bg-black text-white py-16 px-6 md:px-16">
//       <div className="mx-auto">
//         <h2 className="text-3xl md:text-4xl mb-12 text-center">
//           {title}
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
//           {logos.map((logo, index) => (
//             <div
//               key={index}
//               className="relative w-[150px] h-[80px] [perspective:1000px]"
//             >
//               <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">

//                 {/* Front side (logo) */}
//                 <div className="absolute inset-0 flex items-center justify-center bg-white rounded-xl p-3 backface-hidden">
//                   <Image
//                     src={logo.src}
//                     alt={logo.name}
//                     width={150}
//                     height={60}
//                     className="object-contain grayscale hover:grayscale-0 transition"
//                   />
//                 </div>

//                 {/* Back side (text) */}
//                 <div className="absolute inset-0 flex items-center justify-center bg-[#111] text-white text-lg font-semibold rounded-xl [transform:rotateY(180deg)] backface-hidden">
//                   {logo.name}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PartnershipSection;






"use client";
import Image from "next/image";
import React, { useState } from "react";

const PartnershipSection = ({ data }) => {
  const { title, logos } = data;
  const [flippedCards, setFlippedCards] = useState(Array(logos.length).fill(false));

  const handleFlip = (index) => {
    setFlippedCards((prev) =>
      prev.map((isFlipped, i) => (i === index ? !isFlipped : isFlipped))
    );
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      <div className="mx-auto">
        <h2 className="text-3xl md:text-4xl mb-12 text-center">
          {title}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative w-[150px] h-[80px] [perspective:1000px] cursor-pointer"
              onClick={() => handleFlip(index)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${flippedCards[index]
                    ? "[transform:rotateY(180deg)]"
                    : "hover:[transform:rotateY(180deg)]"
                  }`}
              >
                {/* Front side (logo) */}
                <div className="absolute inset-0 flex items-center justify-center bg-white rounded-xl p-3 backface-hidden">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={150}
                    height={60}
                    className="object-contain grayscale hover:grayscale-0 transition"
                  />
                </div>

                {/* Back side (text) */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#111] text-white text-lg font-semibold rounded-xl [transform:rotateY(180deg)] backface-hidden">
                  {logo.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
