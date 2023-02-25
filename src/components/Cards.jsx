// import { ClassNames } from "@emotion/react";
// import React, { useState } from "react";
// import ReactStars from "react-stars";

// const Cards = () => {
//   const [data, setdata] = useState([
//     {
//       name: "Avengers Endgame",
//       year: 2018,
//       rating: 5,
//       image:
//         "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
//     },
//     {
//       name: "Avengers Endgame",
//       year: 2018,
//       rating: 5,
//       image:
//         "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
//     },
//     {
//       name: "Avengers Endgame",
//       year: 2018,
//       rating: 4.5,
//       image:
//         "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
//     },
//     {
//       name: "Avengers Endgame",
//       year: 2018,
//       rating: 3,
//       image:
//         "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
//     },
//     {
//       name: "Avengers Endgame",
//       year: 2018,
//       rating: 3.2,
//       image:
//         "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
//     },
//     {
//       name: "Avengers Endgame",
//       year: 2018,
//       rating: 5,
//       image:
//         "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
//     },
//   ]);
//   return (
//     <div className="container mx-auto p-4">
//       <div className="row flex gap-8 flex-wrap justify-center items-center align-baseline py-10">
//         {data.map((e, i) => {
//           return (
//             <div className="col-md-12" key={i}>
//               <div className="card shadow-lg animate-pulse hover/:animate-none ">
//                 <div className="card-body bg-slate-900 px-4 py-2  w-72   flex justify-center items-start flex-col gap-2 rounded-xl">
//                   <img
//                     className="  w-72   "
//                     src={e.image}
//                     alt=" Avengers-Endgame"
//                   />
//                   <h3 className="card-title text-lg text-gray-500">
//                     Name: <span className="text-white"> {e.name}</span>
//                   </h3>
//                   <p className="card-text text-lg text-gray-500 flex gap-2 items-center">
//                     Rating:{" "}
//                     <span className="">
//                       <ReactStars
//                         count={5}
//                         value={e.rating}
//                         edit={false}
//                         size={20}
//                       />
//                     </span>
//                   </p>
//                   <p className="card-text text-lg text-gray-500">
//                     Year: <span className="text-white"> {e.year}</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Cards;
