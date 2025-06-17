// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import imge from "../../../public/assets/python-icon.svg"

// export default function page() {
//   return (
//     <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
//       <div className="max-w-6xl mx-auto">
//         <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
//           <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-white-600 text-center pb-20">
//             Projects
//           </h1>
          
//         </header>

//         {/* Grid  */}
//         <div className="grid md:grid-cols-6 gap-8 lg:-mt-8 pb-40">
//           <a
//             href=""
//             className="w-full block col-span-3 shadow-2xl"
//           >
//             <div className="relative overflow-hidden">
              
//               <Image
//                 src={"/assets/helo.png"}
//                 height={1000}
//                 width={1000}
//                 alt="portfolio"
//                 className="transform hover:scale-125 transition duration-1000 ease-out w-full block "
//               /> 
//               <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
//                 Project 1
//               </h1>
//               <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
//                 01
//               </h1>
//             </div>
//           </a>
//           {/* Single card */}
//           <a
//             href=""
//             className="w-full block col-span-3  shadow-2xl"
//           >
//             <div className="relative overflow-hidden">
//               <Image
//               height={1000}
//               width={1000}
//                 src="/assets/helo2.png"
//                 alt="portfolio"
//                 className="transform hover:scale-125 transition duration-1000 ease-out"
//               />
//                <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
//                 Project 2
//               </h1>
//               <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
//                 02
//               </h1>
//             </div>
//           </a>
//           {/* Single card */}
//           <a href="" className="w-full block col-span-3 shadow-2xl">
//             <div className="relative overflow-hidden pl:[20px]">
//             <Image
//               height={1000}
//               width={1000}
//               src="/assets/helo2.png"
//               alt="portflio"
//               className="transform hover:scale-125 transition duration-1000 ease-out"
//             />
//              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
//                 Project 3
//               </h1>
//               <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
//                 03
//               </h1>
//             </div>
//           </a>
//           <a href="" className="w-full block col-span-3 shadow-2xl">
//             <div className="relative overflow-hidden pl:[20px]">
//             <Image
//               height={1000}
//               width={1000}
//               src="/assets/helo2.png"
//               alt="portflio"
//               className="transform hover:scale-125 transition duration-1000 ease-out"
//             />
//              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
//                 Project 4
//               </h1>
//               <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
//                 04
//               </h1>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { WobbleCard } from "@/src/components/effects/wobble-card";
import Image from "next/image";
import React from "react";

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/assets/helo.png"
          width={450}
          height={450}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[20%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/assets/helo2.png"
          width={450}
          height={450}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
