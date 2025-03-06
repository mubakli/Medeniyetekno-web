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
    <div className="md:flex relative justify-center  ">
      <div className="flex w-[90%]  ">
        <div className="border-r-2 absolute md:border-r-0  md:border-t-2 md:w-[95%]  border-[#df9404] h-full " />
        <div className="md:border-l-2 right-0 border-t-2 w-full absolute  md:w-auto md:flex md:h-full border-[#df9404] items-center justify-center ">
          {/* left line */}
          <div className="absolute left-1/2 md:left-auto text-white z-10 md:px-4  md:py-1 bg-[#231E2F]">
            {date}
          </div>
          {/* Adjusted dot positioning */}
          {/* <div className="absolute left-0 top-0 w-3 h-3 ml-[0.5px] bg-[#df9404] rounded-full -translate-x-1/2 -translate-y-1/2"></div> */}
        </div>

        <div className="pt-8 pl-8 md:pb-0  mb-10 flex flex-col">
          <div className="flex flex-row ">
            <div className="  flex items-center justify-center w-full h-full bg-[#231E2F] text-white space-x-10">
              <div className="w-1/2 md:w-auto flex flex-col space-y-2 w-[70%]">
                <h1 className="pb-5 md:pb-0 text-2xl md:text-4xl text-[#df0447]">
                  {title}
                </h1>
                <h2 className="pb-5 md:pb-0 text-xl md:text-2xl text-[#df9404]">
                  {presenter}
                </h2>
                <h3 className="pb-5 md:pb-0 text-md md:text-xl opacity-70">
                  {date} - {time}
                </h3>
                <div className="hidden md:block">
                  <p>{description}</p>
                  <button className="bg-[#1b62ff] text-white w-[200px] py-3 px-3  rounded-full self-end">
                    Başvur
                  </button>
                </div>
              </div>
              <Image
                src={`${poster}`}
                alt={`${poster}`}
                width={230}
                height={230}
                className="w-[200px] h-[200px] md:w-[230px] md:h-[230px]"
              />
            </div>
          </div>
          <div className="flex flex-col block md:hidden">
            <p className="text-white">{description}</p>
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
//     <div className="relative flex justify-center">
//       {/* Main container with borders */}
//       <div className="w-full relative md:w-[90%] border-t-2 border-b-2 border-[#df9404]">
//         <div className="border-r-2 md:border-l-2 md:border-r-0 md:right-0 h-full border-[#df9404] items-center justify-center absolute" />

//         {/* Date badge */}
//         <div className="absolute left-0 md:left-[5%] -translate-x-1/2 -translate-y-1/2 top-0">
//           <div className="text-white px-4 py-1 bg-[#231E2F]">{date}</div>
//         </div>

//         {/* Content container */}
//         <div className="bg-[#231E2F] p-4 md:p-8">
//           {/* Desktop layout */}
//           <div className="hidden md:flex justify-between items-start gap-8">
//             {/* Text content */}
//             <div className="flex-1 max-w-[70%]">
//               <h1 className="text-4xl text-[#df0447] pb-4">{title}</h1>
//               <h2 className="text-2xl text-[#df9404] pb-4">{presenter}</h2>
//               <h3 className="text-xl opacity-70 pb-6">
//                 {date} - {time}
//               </h3>
//               <p className="pb-6">{description}</p>
//               <button className="bg-[#1b62ff] text-white w-[200px] py-3 rounded-full">
//                 Başvur
//               </button>
//             </div>

//             {/* Image container */}
//             <div className="w-[230px] h-[230px] md:w-[230px] md:h-[230px] overflow-hidden flex items-center justify-center">
//               <Image
//                 src={poster}
//                 alt={title}
//                 width={230}
//                 height={230}
//                 className="object-cover"
//               />
//             </div>
//           </div>

//           {/* Mobile layout */}
//           <div className="md:hidden">
//             <div className="flex flex-col">
//               <div className="flex justify-between gap-4 pb-4">
//                 <div className="flex-1">
//                   <h1 className="text-2xl text-[#df0447] pb-2">{title}</h1>
//                   <h2 className="text-xl text-[#df9404] pb-2">{presenter}</h2>
//                   <h3 className="text-lg opacity-70">
//                     {date} - {time}
//                   </h3>
//                 </div>
//                 <div className="w-32 h-32 relative flex-shrink-0">
//                   <Image
//                     src={poster}
//                     alt={title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//               <p className="py-4">{description}</p>
//               <button className="bg-[#1b62ff] text-white w-full py-3 rounded-full">
//                 Başvur
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EventComponent;
