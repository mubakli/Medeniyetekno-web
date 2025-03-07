interface MemberProps {
  name: string;
  mail: string;
  image: string;
  title: string;
  linkedinUrl: string;
  imgOps: string;
}

function MemberComponent({
  name,
  mail,
  image,
  title,
  linkedinUrl,
  imgOps,
}: MemberProps) {
  return (
    <div className="relative flex flex-col items-center justify-center w-auto h-auto">
      {/* Image container centered */}
      <div className="w-48 h-48 bg-[#d9d9d9] rounded-full flex items-center justify-center">
        <img
          src={`/members/${image}.jpg`}
          alt="Circle image"
          className={`w-full h-full object-cover rounded-full object-[${imgOps}]`}
        />
      </div>

      {/* Text content */}
      <div className="w-full h-auto text-center mt-2">
        <div className="font-bold text-white text-xl">{name}</div>
        <div className="font-normal text-[#df0447] text-sm">{mail}</div>
        <div className="font-extrabold text-[#df9404] text-sm">{title}</div>
      </div>

      {/* LinkedIn icon */}
      <div className="flex justify-center items-center mt-4">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img
            className="w-8 h-8 object-cover"
            alt="Linkedin"
            src="/linkedin.png"
          />
        </a>
      </div>
    </div>
  );
}

export default MemberComponent;
