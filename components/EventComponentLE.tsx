import Image from "next/image";
import { useState } from "react";

function EventComponent({
  title,
  presenter,
  date,
  time,
  description,
  poster,
}: EventProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="md:flex relative justify-center  ">
      <div className="flex w-[90%]  ">
        <div className="border-r-2 absolute  md:hidden border-[#df9404] h-full right-0" />
        <div className="md:border-r-2  border-t-2 w-full absolute  md:w-auto md:flex md:h-full border-[#df9404] items-center justify-center md:relative">
          {/* left line */}
          <div className="absolute left-1/2 md:left-auto text-white z-10 md:px-4  md:py-1 bg-[#231E2F]">
            {date}
          </div>
          {/* Adjusted dot positioning */}
          {/* <div className="absolute left-0 top-0 w-3 h-3 ml-[0.5px] bg-[#df9404] rounded-full -translate-x-1/2 -translate-y-1/2"></div> */}
        </div>

        <div className="pt-8 pl-8 md:pb-0 md:pt-0 mb-10 flex flex-col">
          <div className="flex flex-row ">
            <div className="mt-5  flex items-center justify-center w-full h-full bg-[#231E2F] text-white space-x-10">
              <Image
                src={`${poster}`}
                alt={`${poster}`}
                width={230}
                height={230}
                className="w-[200px] h-[200px] md:w-full md:h-auto cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              />
              <div className="w-1/2 md:w-auto flex flex-col space-y-2 w-[70%]">
                <h1 className="pt-5 pb-5 md:pb-0 text-xl md:text-2xl md:text-4xl text-[#df0447]">
                  {title}
                </h1>
                <h2 className="pb-5 md:pb-0 text-md md:text-xl md:text-2xl text-[#df9404]">
                  {presenter}
                </h2>
                <h3 className="pb-5 md:pb-0 text-sm md:text-md md:text-xl opacity-70">
                  {date} - {time}
                </h3>
                <div className="hidden md:block">
                  <p style={{ whiteSpace: "pre-line" }}>{description}</p>
                  <div className="flex justify-end w-full">
                    <button className="bg-gray-500 text-white w-[200px] mt-10 py-3 px-3 rounded-full">
                      Başvur
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col block md:hidden">
            <p style={{ whiteSpace: "pre-line" }} className="text-white">
              {description}
            </p>
            <button className="bg-[#1b62ff] text-white w-[200px] mt-10 py-3 px-3 rounded-full self-end">
              Başvur
            </button>
          </div>
        </div>
      </div>
      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative">
            <Image
              src={poster}
              alt="Full Image"
              width={600}
              height={600}
              className="w-auto h-auto max-w-full max-h-[80vh] rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventComponent;
