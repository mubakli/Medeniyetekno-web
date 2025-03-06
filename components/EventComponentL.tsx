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
        <div className="border-r-2 flex h-full border-[#df9404] items-center justify-center relative">
          <div className="absolute text-white z-10 px-4 py-1 bg-[#231E2F]">
            {date}
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full bg-[#231E2F] text-white space-x-10">
          <Image src={`${poster}`} alt={`${poster}`} width={230} height={230} />
          <div className="flex flex-col space-y-2 w-[70%]">
            <h1 className="text-4xl text-[#df0447]">{title}</h1>
            <h2 className="text-2xl text-[#df9404]">{presenter}</h2>
            <h3 className="text-xl opacity-70">
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
