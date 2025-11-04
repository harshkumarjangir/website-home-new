// "use client";
// import React from "react";
// import homeData from "@/data/homeData.json";

// const DevelopmentProcess = () => {
//     const data = homeData.developmentProcessSection;

//     if (!data || !data.steps || data.steps.length === 0) {
//         return <p className="text-center text-gray-400">No data available</p>;
//     }

//     return (
//         <section className="bg-black text-white py-16 max-md:pl-5">
//             <div className="container max-w-[1140px] mx-auto">
//                 <div className="flex flex-col items-center text-center">
//                     {data.heading && (
//                         <h2 className="text-[clamp(20px,4vw,35px)] font-bold uppercase leading-tight text-white">
//                             {data.heading}
//                             <span className="text-[#FFC736]"> Process</span>
//                         </h2>
//                     )}

//                     <div className="flex flex-wrap justify-center -mx-4 mt-8">
//                         {data.steps.map((step, index) => (
//                             <div
//                                 key={index}
//                                 className="w-full min-h-[1px] px-4 relative md:basis-1/4 md:max-w-[25%]"
//                             >
//                                 <div
//                                     className="bg-no-repeat bg-cover max-md:w-[90%] max-md:min-h-[650px] min-h-[500px] mt-[50px]"
//                                     style={{
//                                         backgroundImage: `url('/assets/home/developmentProcess/${step.bgImage}')`,
//                                         backgroundSize: "contain",
//                                         paddingLeft: step.paddingLeft,
//                                         paddingTop: step.paddingTop,
//                                     }}
//                                 >
//                                     <div className="text-[18px] text-[#FFC736] font-semibold capitalize pb-2 text-left">
//                                         {step.title}
//                                     </div>
//                                     {step.points.map((point, i) => (
//                                         <p
//                                             key={i}
//                                             className="text-[16px] pt-2 text-white leading-[1.8] text-left"
//                                         >
//                                             {point}
//                                         </p>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default DevelopmentProcess;





// "use client";
// import React from "react";
// import Image from "next/image";
// import homeData from "@/data/homeData.json";

// const DevelopmentProcess = () => {
//     const data = homeData.developmentProcessSection;

//     if (!data || !data.steps || data.steps.length === 0) {
//         return <p className="text-center text-gray-400">No data available</p>;
//     }

//     return (
//         <section className="bg-black text-white py-16 px-4 md:px-8">
//             <div className="max-w-6xl mx-auto text-center">
//                 {/* Heading */}
//                 {data.heading && (
//                     <h2 className="text-[clamp(22px,4vw,38px)] font-bold uppercase leading-tight mb-12">
//                         {data.heading}
//                         <span className="text-[#FFC736]"> Process</span>
//                     </h2>
//                 )}

//                 {/* Steps */}
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
//                     {data.steps.map((step, index) => (
//                         <div
//                             key={index}
//                             className="relative flex flex-col items-center text-center w-full max-w-[320px]"
//                         >
//                             {/* Step number */}
//                             <span className="absolute -top-6 left-4 text-[60px] font-bold text-[#FFC736] opacity-20 select-none">
//                                 {index + 1}
//                             </span>

//                             {/* Image */}
//                             <div className="relative w-[90%] h-[500px] rounded-full overflow-hidden shadow-lg mb-5">
//                                 <Image
//                                     src={`/assets/home/developmentProcess/${step.bgImage}`}
//                                     alt={step.title}
//                                     fill
//                                     className="object-cover"
//                                 />
//                             </div>

//                             {/* Title */}
//                             <h3 className="text-[#FFC736] text-lg font-semibold mb-3">
//                                 {step.title}
//                             </h3>

//                             {/* Points */}
//                             <ul className="text-left text-sm text-gray-200 space-y-2">
//                                 {step.points.map((point, i) => (
//                                     <li key={i} className="leading-relaxed">
//                                         {point}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default DevelopmentProcess;






// "use client";
// import React from "react";
// import homeData from "@/data/homeData.json";

// const DevelopmentProcess = () => {
//     const data = homeData.developmentProcessSection;

//     if (!data || !data.steps || data.steps.length === 0) {
//         return <p className="text-center text-gray-400">No data available</p>;
//     }

//     return (
//         <section className="text-white py-16 max-md:px-5 bg-black">
//             <div className="container max-w-[1140px] mx-auto">
//                 <div className="flex flex-col items-center text-center">
//                     {/* Heading */}
//                     {data.heading && (
//                         <h2 className="text-[clamp(20px,4vw,35px)] font-bold uppercase leading-tight text-white">
//                             {data.heading}
//                             <span className="text-[#FFC736]"> Process</span>
//                         </h2>
//                     )}

//                     {/* Steps */}
//                     <div className="flex flex-wrap justify-center -mx-4 mt-10">
//                         {data.steps.map((step, index) => (
//                             <div
//                                 key={index}
//                                 className="w-full px-4 relative md:basis-1/2 lg:basis-1/4  md:max-w-[25%] mt-10 flex justify-center"
//                             >
//                                 {/* <div
//                                     className="w-full max-md:w-[90%] max-w-[340px] bg-center bg-no-repeat bg-contain min-h-[460px] flex flex-col justify-start text-left px-6 py-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
//                                     style={{
//                                         backgroundImage: `url('/assets/home/developmentProcess/${step.bgImage}')`,
//                                         backgroundSize: 'contain',
//                                         paddingLeft: step.paddingLeft,
//                                         paddingTop: step.paddingTop,
//                                     }}
//                                 >
//                                     <div className="text-[#FFC736] text-lg font-semibold capitalize mb-3">
//                                         {step.title}
//                                     </div>
//                                     {step.points.map((point, i) => (
//                                         <p
//                                             key={i}
//                                             className="text-[15px] text-white leading-relaxed mb-1"
//                                         >
//                                             {point}
//                                         </p>
//                                     ))}
//                                 </div> */}
//                                 <div
//                                     className="w-full max-md:w-[95%] max-w-[340px] min-h-[460px] bg-center bg-no-repeat bg-cover aspect-[3/4] flex flex-col justify-start text-left px-6 py-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
//                                     style={{
//                                         backgroundImage: `url('/assets/home/developmentProcess/${step.bgImage}')`,
//                                         backgroundSize: 'contain',
//                                         paddingLeft: step.paddingLeft,
//                                         paddingTop: step.paddingTop,
//                                     }}
//                                 >
//                                     <div className="text-[#FFC736] text-lg font-semibold capitalize mb-3">
//                                         {step.title}
//                                     </div>
//                                     {step.points.map((point, i) => (
//                                         <p key={i} className="text-[15px] text-white leading-relaxed mb-1">
//                                             {point}
//                                         </p>
//                                     ))}
//                                 </div>


//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default DevelopmentProcess;




// "use client";
// import React from "react";
// import homeData from "@/data/homeData.json";

// const DevelopmentProcess = () => {
//     const data = homeData.developmentProcessSection;

//     if (!data || !data.steps || data.steps.length === 0) {
//         return <p className="text-center text-gray-400">No data available</p>;
//     }

//     return (
//         <section className="text-white py-16 max-md:px-5 bg-black">
//             <div className="container max-w-[1140px] mx-auto">
//                 <div className="flex flex-col items-center text-center">
//                     {/* Heading */}
//                     {data.heading && (
//                         <h2 className="text-[clamp(20px,4vw,35px)] font-bold uppercase leading-tight text-white">
//                             {data.heading}
//                             <span className="text-[#FFC736]"> Process</span>
//                         </h2>
//                     )}

//                     {/* Steps */}
//                     <div className="flex flex-wrap justify-center -mx-4 mt-10">
//                         {data.steps.map((step, index) => (
//                             <div
//                                 key={index}
//                                 className="w-full px-4 relative md:basis-1/2 lg:basis-1/4 mt-10 flex justify-center"
//                             >
//                                 <div
//                                     className="w-full max-md:w-[95%] max-w-[340px] bg-center bg-no-repeat bg-contain h-[480px] flex flex-col justify-start text-left px-6 py-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
//                                     style={{
//                                         backgroundImage: `url('/assets/home/developmentProcess/${step.bgImage}')`,
//                                         paddingLeft: step.paddingLeft,
//                                         paddingTop: step.paddingTop,
//                                     }}
//                                 >
//                                     <div className="text-[#FFC736] text-lg font-semibold capitalize mb-3">
//                                         {step.title}
//                                     </div>
//                                     {step.points.map((point, i) => (
//                                         <p key={i} className="text-[15px] text-white leading-relaxed mb-1">
//                                             {point}
//                                         </p>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default DevelopmentProcess;




"use client";
import React from "react";
import homeData from "@/data/homeData.json";

const DevelopmentProcess = () => {
    const data = homeData.developmentProcessSection;

    if (!data || !data.steps || data.steps.length === 0) {
        return <p className="text-center text-gray-400">No data available</p>;
    }

    return (
        <section className="text-white py-16 bg-black max-md:px-4 overflow-hidden">
            <div className="max-w-[1140px] mx-auto text-center">
                {/* Heading */}
                {data.heading && (
                    <h2 className="text-[clamp(20px,4vw,35px)] font-bold uppercase leading-tight">
                        {data.heading}
                        <span className="text-[#FFC736]"> Process</span>
                    </h2>
                )}

                {/* Steps */}
                <div className="flex flex-wrap justify-center gap-y-10 mt-10">
                    {data.steps.map((step, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-1/2 lg:w-1/4 flex justify-center px-3"
                        >
                            <div
                                className="relative w-full max-w-[300px] h-[460px] bg-no-repeat bg-contain bg-center flex flex-col text-left transition-all duration-300 hover:scale-[1.03]"
                                style={{
                                    backgroundImage: `url('/assets/home/developmentProcess/${step.bgImage}')`,
                                }}
                            >
                                {/* Text Wrapper */}
                                <div
                                    className="absolute inset-0 flex flex-col text-left px-6 transition-all duration-300"
                                    style={{
                                        paddingLeft: step.paddingLeft,
                                        paddingTop: step.paddingTop,
                                    }}
                                >
                                    <h3 className="text-[#FFC736] text-lg font-semibold capitalize mb-3">
                                        {step.title}
                                    </h3>
                                    {step.points.map((point, i) => (
                                        <p
                                            key={i}
                                            className="text-[15px] text-white leading-relaxed mb-1"
                                        >
                                            {point}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevelopmentProcess;
