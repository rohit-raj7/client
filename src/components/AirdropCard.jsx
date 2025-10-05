// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import { MapPin, Calendar, ArrowRight } from "lucide-react";

// // const AirdropCard = ({ airdrop }) => {
// //   const navigate = useNavigate();

// //   const handleCardClick = () => {
// //     navigate(`/airdrop/${airdrop.id}`);
// //   };

// //   return (
// //     <div
// //       onClick={handleCardClick}
// //       className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors cursor-pointer"
// //     >
// //       {/* same content as before */}
// //       <div className="flex items-start gap-4 mb-4">
// //         <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center text-2xl font-bold">
// //           {airdrop.name.charAt(0)}
// //         </div>
// //         <div>
// //           <h3 className="text-xl font-bold mb-2">{airdrop.name}</h3>
// //           <div className="flex gap-2">
// //             {airdrop.tags.map((tag, i) => (
// //               <span
// //                 key={i}
// //                 className={`px-3 py-1 rounded-full text-sm ${
// //                   tag === "Airdrop"
// //                     ? "bg-green-900 text-green-300"
// //                     : "bg-yellow-900 text-yellow-300"
// //                 }`}
// //               >
// //                 {tag}
// //               </span>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       <h4 className="text-lg font-semibold mb-2">{airdrop.title}</h4>
// //       <p className="text-gray-400 mb-4 text-sm">{airdrop.description}</p>

// //       <div className="space-y-3 mb-6">
// //         <div className="flex items-center gap-2 text-gray-300">
// //           <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
// //             💰
// //           </div>
// //           {airdrop.type}
// //         </div>
// //         <div className="flex items-center justify-between text-gray-300">
// //           <div className="flex items-center gap-2">
// //             <Calendar size={18} />
// //             {airdrop.daysLeft}
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <MapPin size={18} />
// //             {airdrop.location}
// //           </div>
// //         </div>
// //       </div>

// //       <button
// //         onClick={(e) => {
// //           e.stopPropagation();
// //           handleCardClick();
// //         }}
// //         className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
// //       >
// //         Claim now <ArrowRight size={18} />
// //       </button>
// //     </div>
// //   );
// // };

// // export default AirdropCard;
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { MapPin, Calendar, ArrowRight } from "lucide-react";

// const AirdropCard = ({ airdrop }) => {
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate(`/airdrop/${airdrop.id}`);
//   };

//   return (
//     <div
//       onClick={handleCardClick}
//       className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors cursor-pointer"
//     >
//       <div className="flex items-start gap-4 mb-4">
//         <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center text-2xl font-bold">
//           {airdrop.name.charAt(0)}
//         </div>
//         <div>
//           <h3 className="text-xl font-bold mb-2">{airdrop.name}</h3>
//           <div className="flex gap-2">
//             {airdrop.tags.map((tag, i) => (
//               <span
//                 key={i}
//                 className={`px-3 py-1 rounded-full text-sm ${
//                   tag === "Airdrop"
//                     ? "bg-green-900 text-green-300"
//                     : "bg-yellow-900 text-yellow-300"
//                 }`}
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       <h4 className="text-lg font-semibold mb-2">{airdrop.title}</h4>
//       <p className="text-gray-400 mb-4 text-sm">{airdrop.description}</p>

//       <div className="space-y-3 mb-6">
//         <div className="flex items-center gap-2 text-gray-300">
//           <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
//             💰
//           </div>
//           {airdrop.type}
//         </div>
//         <div className="flex items-center justify-between text-gray-300">
//           <div className="flex items-center gap-2">
//             <Calendar size={18} />
//             {airdrop.daysLeft}
//           </div>
//           <div className="flex items-center gap-2">
//             <MapPin size={18} />
//             {airdrop.location}
//           </div>
//         </div>
//       </div>

//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           handleCardClick();
//         }}
//         className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
//       >
//         Claim now <ArrowRight size={18} />
//       </button>
//     </div>
//   );
// };

// export default AirdropCard;






import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const AirdropCard = ({ airdrop }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/airdrops/${airdrop.id}`); // ✅ Opens details page
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors cursor-pointer"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center text-2xl font-bold">
          {airdrop.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{airdrop.name}</h3>
          <div className="flex gap-2">
            {airdrop.tags.map((tag, i) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-full text-sm ${
                  tag === "Airdrop"
                    ? "bg-green-900 text-green-300"
                    : "bg-yellow-900 text-yellow-300"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <h4 className="text-lg font-semibold mb-2">{airdrop.title}</h4>
      <p className="text-gray-400 mb-4 text-sm">{airdrop.description}</p>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-gray-300">
          <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
            💰
          </div>
          {airdrop.type}
        </div>
        <div className="flex items-center justify-between text-gray-300">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            {airdrop.daysLeft}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            {airdrop.location}
          </div>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent triggering card click
          handleCardClick();
        }}
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
      >
        Claim now <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default AirdropCard;
