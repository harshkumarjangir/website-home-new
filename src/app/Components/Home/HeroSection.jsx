// import React from "react";

// const HeroSection = ({ data }) => {
//   const { backgroundVideo, heading, description, heroStats } = data;

//   return (
//     <div className="relative md:h-[90vh] w-full flex max-md:flex-col flex-row items-center max-md:justify-center justify-between text-white px-2 py-5">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute inset-0 w-full h-full object-cover -z-10"
//       >
//         <source src={backgroundVideo} type="video/webm" />
//         Your browser does not support the video tag.
//       </video>

//       {/* LEFT SIDE - TEXT + STATS */}
//       <div className="lg:max-w-4xl px-4 max-md:py-12 md:px-8">
//         <h2 className="text-3xl md:text-5xl mb-4">{heading}</h2>
//         <p className="text md:text-lg mb-8 max-w-4xl">{description}</p>

//         {/* STATS */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mt-10">
//           {heroStats.map((item, i) => (
//             <div
//               key={i}
//               className="bg-white/10 backdrop-blur-md rounded-xl p-5 text-center border border-white/10 hover:bg-white/20 transition-all"
//             >
//               <h3 className="text-3xl font-semibold text-white mb-1">{item.value}</h3>
//               <p className="text-sm text-gray-300">{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* RIGHT SIDE - TRANSPARENT FORM */}
//       <div className="max-md:hidden md:mr-12 mt-10 md:mt-0 bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 w-full max-w-md border border-white/20 shadow-lg shadow-black/20">
//         <h3 className="text-2xl font-semibold mb-6 text-center text-white">
//           Send Your Query
//         </h3>

//         <form className="space-y-5">
//           <div>
//             <label className="block text-sm mb-1 text-gray-200">
//               Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your name"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1 text-gray-200">
//               Phone <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your phone number"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1 text-gray-200">
//               Email Address
//             </label>
//             <input
//               type="email"
//               className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1 text-gray-200">
//               Description (Interested Software) <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               rows="3"
//               className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Describe your interest..."
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#1163FB]/90 hover:bg-[#1163FB] transition-colors rounded-md py-3 font-medium text-white"
//           >
//             Submit
//           </button>
//         </form>
//       </div>

//       {/* Mobile Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="hidden w-full h-80 object-cover p-5"
//       >
//         <source src={backgroundVideo} type="video/webm" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default HeroSection;



import React from "react";

const HeroSection = ({ data }) => {
  const { backgroundVideo, heading, description, heroStats } = data;

  return (
    <div className="relative w-full text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src={backgroundVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Content Wrapper */}
      <div className="relative flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 md:px-8 lg:px-16 py-12 lg:py-20 gap-10">
        {/* LEFT SIDE - TEXT + STATS */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 leading-tight">
            {heading}
          </h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
            {description}
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mt-8 justify-items-center lg:justify-items-start">
            {heroStats?.map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-5 text-center border border-white/10 hover:bg-white/20 transition-all w-full max-w-[140px]"
              >
                <h3 className="text-3xl font-semibold mb-1">{item.value}</h3>
                <p className="text-sm text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - TRANSPARENT FORM */}
        <div className="max-md:hidden w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg shadow-black/20">
          <h3 className="text-2xl font-semibold mb-6 text-center text-white">
            Send Your Query
          </h3>

          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-1 text-gray-200">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-200">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-200">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-200">
                Description (Interested Software){" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="3"
                className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your interest..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1163FB]/90 hover:bg-[#1163FB] transition-colors rounded-md py-3 font-medium text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
