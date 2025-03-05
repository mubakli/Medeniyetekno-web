import Image from "next/image";

function EventComponent({
  title,
  presenter,
  date,
  time,
  description,
  poster,
}: EventProps) {
  return (
    <div className="flex justify-center">
      <div className="flex w-[90%] h-96">
        <div className="md:border-r-2 border-t-2 w-full absolute md:w-auto md:flex md:h-full border-[#df9404] items-center justify-center md:relative">
          {" "}
          {/* left line */}
          <div className="absolute text-white z-10 px-4 py-1 bg-[#231E2F]">
            {date}
          </div>
          {/* Adjusted dot positioning */}
          <div className="absolute left-0 top-0 w-3 h-3 ml-[0.5px] bg-[#df9404] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="flex items-center justify-center w-full h-full bg-[#231E2F] text-white space-x-10">
          <Image
            src={`${poster}`}
            alt={`${poster}`}
            width={230}
            height={230}
            className="w-[109px] h-[158px]"
          />
          <div className="flex flex-col space-y-2 w-[70%]">
            <h1 className="text-md md:text-4xl text-[#df0447]">{title}</h1>
            <h2 className="text-sm md:text-2xl text-[#df9404]">{presenter}</h2>
            <h3 className="text-sm md:text-xl opacity-70">
              {date} - {time}
            </h3>
            <p>{description}</p>
            <button className="bg-[#1b62ff] text-white w-[200px] py-3 px-3 rounded-full self-end">
              Başvur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventComponent;

// import Image from "next/image";

// function EventComponent({
//   title,
//   presenter,
//   date,
//   time,
//   description,
//   poster,
// }: EventProps) {
//   return (
//     <div className="flex justify-center">
//       <div className="flex w-[90%] h-192 md:h-96">
//         <div className="md:border-r-2 border-t-2 w-full absolute md:w-auto md:flex md:h-full border-[#df9404] items-center justify-center md:relative">
//           {" "}
//           {/* left line */}
//           <div className="absolute text-white z-10 px-4 py-1 bg-[#231E2F]">
//             {date}
//           </div>
//           {/* Adjusted dot positioning */}
//           <div className="absolute left-0 top-0 w-3 h-3 ml-[0.5px] bg-[#df9404] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//         </div>
//         <div className="flex flex-col">
//           <div className="w-1/2 md:w-auto flex flex-row md:flex-col items-center justify-center w-full h-full bg-[#231E2F] text-white space-x-10">
//             <Image
//               src={`${poster}`}
//               alt={`${poster}`}
//               width={230}
//               height={230}
//               className=" w-[109px] h-[158px]"
//             />
//             <div className="w-1/2 md:w-auto flex flex-col space-y-2 md:w-[70%]">
//               <h1 className="flex text-md md:text-4xl text-[#df0447]">
//                 {title}
//               </h1>
//               <h2 className="text-sm md:text-2xl text-[#df9404]">
//                 {presenter}
//               </h2>
//               <h3 className="text-sm md:text-xl opacity-70">
//                 {date} - {time}
//               </h3>
//             </div>
//           </div>
//           <div className="flex flex-col text-center justify-center">
//             <p className="text-sm text-center">{description}</p>
//             <button className="justify-center bg-[#1b62ff] text-white w-[200px] py-3 px-3 rounded-full self-end">
//               Başvur
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EventComponent;
