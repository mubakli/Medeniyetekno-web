interface MemberProps {
  name: string;
  surname: string;
  image: string;
  title: string;
  linkedinUrl: string;
  imgOps: string;
}

function MemberComponent({
  name,
  surname,
  image,
  title,
  linkedinUrl,
  imgOps,
}: MemberProps) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-xs mx-auto">
      {/* Image */}
      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-[#d9d9d9] rounded-full flex items-center justify-center overflow-hidden">
        <img
          src={`/members/${image}.jpg`}
          alt={`${name}'s profile`}
          className={`w-full h-full object-cover rounded-full object-[${imgOps}]`}
        />
      </div>

      {/* Text Content */}
      <div className="w-full text-center mt-3 space-y-1 sm:space-y-2">
        <p className="text-xs sm:text-base font-extrabold text-[#df9404]">
          {title}
        </p>

        <h3 className="text-xs sm:text-xl font-bold text-white">{name}</h3>
        <h3 className="text-xs sm:text-xl font-bold text-white">{surname}</h3>
      </div>

      {/* LinkedIn Icon */}
      <div className="mt-3">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img
            className="w-6 h-6 sm:w-8 sm:h-8"
            alt="LinkedIn"
            src="/linkedin.png"
          />
        </a>
      </div>
    </div>
  );
}

export default MemberComponent;
