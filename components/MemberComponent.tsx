interface MemberProps {
  name: string;
  mail: string;
  image: string;
  title: string;
  linkedinUrl: string;
}

function MemberComponent({
  name,
  mail,
  image,
  title,
  linkedinUrl,
}: MemberProps) {
  return (
    <div className="absolute w-[254px] h-[321px] top-[775px] left-[351px]">
      <div className="absolute w-[200px] h-[200px] top-0 left-6 bg-[#d9d9d9] rounded-[100px]" />
      <div className="absolute  w-[200px] h-[200px] top-0 left-6 bg-[#d9d9d9] rounded-[100px]">
        <img
          src={`/members/${image}.jpg`}
          alt="Circle image"
          className="w-full h-full object-cover rounded-full object-[50%_10%]"
        />
      </div>

      <div className="absolute w-[248px] h-[83px] top-52 left-0">
        <div className="absolute w-[248px] h-[33px] top-[26px] left-0 [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-xl text-center tracking-[0] leading-[normal]">
          {name}
        </div>

        <div className="left-0 absolute w-[248px] h-[33px] top-[50px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#df0447] text-[15px] text-center tracking-[0] leading-[normal]">
          {mail}
        </div>

        <div className="absolute w-[248px] h-[33px] top-0 left-0 [font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-[#df9404] text-[15px] text-center tracking-[0] leading-[normal]">
          {title}
        </div>
      </div>

      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <img
          className="absolute w-[30px] h-[30px] top-[291px] left-[109px] object-cover"
          alt="Linkedin"
          src="/linkedin.png"
        />
      </a>
    </div>
  );
}
export default MemberComponent;
