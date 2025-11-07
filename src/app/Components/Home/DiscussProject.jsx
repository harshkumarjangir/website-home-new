"use client";
import React from "react";
import Link from "next/link";

const DiscussProject = ({ data }) => {
    const discussProject = data;

    return (
        <section className="w-ful overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
                {/* Text Box (left side) */}
                <div className="w-full max-md:order-2 md:w-1/2 flex items-center justify-center p-8 md:p-12 bg-white/10 backdrop-blur-sm">
                    <div className="max-w-md">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            {discussProject.title}
                        </h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            {discussProject.description}
                        </p>
                        <Link
                            href={discussProject.buttonUrl}
                            className="inline-block bg-[#1163FB] border-2 border-[#1163FB] hover:border-black hover:bg-transparent text-white hover:text-black font-semibold py-3 px-6 rounded-full transition duration-300"
                        >
                            {discussProject.buttonText}
                        </Link>
                    </div>
                </div>

                {/* Google Map (right side) */}
                <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative">
                    <iframe
                        src={discussProject.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default DiscussProject;






// "use client";
// import React from "react";
// import Link from "next/link";

// const DiscussProject = ({ data }) => {
//     console.log(data);
    
//     const discussProject = data;

//     return (
//         <section className="w-full overflow-hidden shadow-lg">
//             {/* Google Map Background */}
//             <div className="relative w-full h-[300px] md:h-[400px]">
//                 <iframe
//                     src={discussProject.mapUrl}
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     className="absolute inset-0 w-full h-full"
//                 ></iframe>

//                 {/* Text Box (on top for md+, hidden on mobile) */}
//                 <div className="hidden md:block absolute top-1/2 left-6 md:left-16 -translate-y-1/2 z-10 max-w-lg bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg">
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
//                         {discussProject.title}
//                     </h2>
//                     <p className="text-gray-700 mb-6 leading-relaxed">
//                         {discussProject.description}
//                     </p>
//                     <Link
//                         href={discussProject.buttonUrl}
//                         className="inline-block bg-[#1163FB] border-2 border-[#1163FB] hover:border-black  hover:bg-transparent text-white hover:text-black font-semibold py-3 px-6 rounded-full transition duration-300"
//                     >
//                         {discussProject.buttonText}
//                     </Link>
//                 </div>
//             </div>

//             {/* Text Box (below map for mobile) */}
//             <div className="md:hidden bg-white p-6 rounded-b-2xl shadow-md">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-3">
//                     {discussProject.title}
//                 </h2>
//                 <p className="text-gray-700 mb-5 leading-relaxed">
//                     {discussProject.description}
//                 </p>
//                 <Link
//                     href={discussProject.buttonUrl}
//                     className="block text-center bg-[#1163FB] border-2 border-[#1163FB] hover:border-black  hover:bg-transparent text-white hover:text-black font-semibold py-3 px-6 rounded-full transition duration-300"
//                 >
//                     {discussProject.buttonText}
//                 </Link>
//             </div>
//         </section>
//     );
// };

// export default DiscussProject;
