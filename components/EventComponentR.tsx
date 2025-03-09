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
                <h1 className="pb-5 md:pb-0 text-xl md:text-2xl md:text-4xl text-[#df0447]">
                  {title}
                </h1>
                <h2 className="pb-5 md:pb-0 text-md md:text-xl md:text-2xl text-[#df9404]">
                  {presenter}
                </h2>
                <h3 className="pb-5 md:pb-0 text-sm md:text-md md:text-xl opacity-70">
                  {date} - {time}
                </h3>
                <div className="hidden md:block">
                  <p>{description}</p>
                  <button className=" bg-gray-500 mt-10 text-white w-[200px] py-3 px-3  rounded-full self-end">
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
            <button className="bg-gray-500 mt-10 text-white w-[200px] py-3 px-3 rounded-full self-end">
              Başvur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventComponent;
