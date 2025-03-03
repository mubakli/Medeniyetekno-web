"use client";
import { useState } from "react";

export default function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    faculty: "",
    grade: "",
    more: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    const { name, email, phone, school, faculty, grade, more } = formData;
    if (!name || !email || !phone || !school || !faculty || !grade || !more)
      return alert("Please fill all fields!");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          school,
          faculty,
          grade,
          more,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Successfully subscribed!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          school: "",
          faculty: "",
          grade: "",
          more: "",
        });
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert("Something went wrong.");
    }
  };
  return (
    <div className="bg-[#231e2f] flex flex-row justify-center w-full">
      <div className="bg-[#231e2f] overflow-hidden w-[1440px] h-[1572px] relative">
        <div className="absolute w-[1308px] h-[1130px] top-[85px] left-[66px]">
          <div className="absolute w-[1308px] h-[1006px] top-[124px] left-0 bg-[#0000004c] rounded-[30px]">
            <img
              className="absolute w-[298px]  md:w-[605px] md:h-[947px] top-8 md:left-[30px] "
              alt="Banner"
              src="/apply/Banner.jpeg"
            />

            <div className="absolute md:w-[595px] w-[343px] h-[456px] left-2 md:h-[934px] top-[501px] md:top-[37px] md:left-[679px] bg-[#231e2f] rounded-[30px] shadow-[0px_4px_4px_#00000040]">
              <div className="absolute w-[526px] h-[49px] top-[129px] left-[35px]">
                <div className="relative w-[524px] h-[49px] bg-[#ddd9d2] rounded-[25px]">
                  <img
                    className="absolute w-9 h-9 top-1.5 left-[26px] object-cover"
                    alt="Name icon"
                    src="/apply/nameIcon.png"
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="İsminizi ve Soyisminizi Giriniz"
                    className="pl-20 ml-4 w-full h-full bg-transparent text-[#0b338b] text-base font-semibold outline-none placeholder-[#0b338b]"
                  />
                </div>
              </div>

              <div className="absolute w-[526px] h-[49px] top-[215px] left-[35px]">
                <div className="relative w-[524px] h-[49px] bg-[#ddd9d2] rounded-[25px]">
                  <img
                    className="absolute w-9 h-9 top-1.5 left-[26px] object-cover"
                    alt="University icon"
                    src="/apply/universityIcon.png"
                  />
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    placeholder="Okulunuzun Adını Giriniz"
                    className="pl-20 ml-4 w-full h-full bg-transparent text-[#0b338b] text-base font-semibold outline-none placeholder-[#0b338b]"
                  />
                </div>
              </div>

              <div className="absolute w-[526px] h-[249px] top-[644px] left-[35px]">
                <div className="relative w-[524px] h-[249px] bg-[#ddd9d2] rounded-[25px]">
                  <div className="absolute w-[339px] h-[38px] top-[11px] left-[73px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#0b338b] text-base tracking-[0] leading-[normal]">
                    Etkinliğimizi Nereden Duydunuz?
                  </div>

                  <img
                    className="absolute w-9 h-9 top-3 left-[26px] object-cover"
                    alt="Message icon"
                    src="/apply/messageIcon.png"
                  />
                  <input
                    type="text"
                    name="more"
                    value={formData.more}
                    onChange={handleChange}
                    // placeholder="Etkinliğimizi Nereden Duydunuz?"
                    className="pl-20 ml-4 w-full h-full bg-transparent text-[#0b338b] text-base font-semibold outline-none placeholder-[#0b338b]"
                  />
                </div>
                <button
                  className="bg-blue-600 mx-30 my-2 px-2 py-2 rounded text-white items-center"
                  onClick={handleSubmit}
                >
                  Kayıt Ol
                </button>
              </div>

              <div className="absolute w-[526px] h-[50px] top-[292px] left-[35px]">
                <div className="relative w-[524px] h-[50px] bg-[#ddd9d2] rounded-[25px]">
                  <img
                    className="absolute w-9 h-9 top-1.5 left-[26px] object-cover"
                    alt="Department icon"
                    src="/apply/departmentIcon.png"
                  />
                  <input
                    type="text"
                    name="faculty"
                    value={formData.faculty}
                    onChange={handleChange}
                    placeholder="Bölümünüzü Giriniz"
                    className="pl-20 ml-4 w-full h-full bg-transparent text-[#0b338b] text-base font-semibold outline-none placeholder-[#0b338b]"
                  />
                </div>
              </div>

              <div className="absolute w-[526px] h-[50px] top-[379px] left-[35px]">
                <div className="relative w-[524px] h-[50px] bg-[#ddd9d2] rounded-[25px]">
                  <img
                    className="absolute w-9 h-9 top-[7px] left-[26px] object-cover"
                    alt="Grade icon"
                    src="/apply/gradeIcon.png"
                  />
                  <input
                    type="text"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    placeholder="Sınıfınızı Giriniz"
                    className="pl-20 ml-4 w-full h-full bg-transparent text-[#0b338b] text-base font-semibold outline-none placeholder-[#0b338b]"
                  />
                </div>
              </div>

              <div className="absolute w-[526px] h-[50px] top-[466px] left-[35px]">
                <div className="relative w-[524px] h-[50px] bg-[#ddd9d2] rounded-[25px]">
                  <img
                    className="absolute w-9 h-9 top-1.5 left-[26px] object-cover"
                    alt="Email icon"
                    src="/apply/emailIcon.png"
                  />
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail Adresinizi Giriniz"
                    className="pl-20 ml-4 w-full h-full bg-transparent text-[#0b338b] text-base font-semibold outline-none placeholder-[#0b338b]"
                  />
                </div>
              </div>

              <div className="absolute w-[526px] h-[50px] top-[553px] left-[35px]">
                <div className="relative w-[524px] h-[50px] bg-[#ddd9d2] rounded-[25px]">
                  <img
                    className="absolute w-9 h-9 top-1.5 left-[26px] object-cover"
                    alt="Phone number icon"
                    src="/apply/phoneNumberIcon.png"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Telefon Numaranızı Giriniz"
                    className="pl-20 ml-4 w-full h-full bg-transparent text-[#0b338b] text-base font-semibold outline-none placeholder-[#0b338b]"
                  />
                </div>
              </div>

              <div className="absolute w-[537px] h-[102px] top-[3px] left-[30px]">
                <div className="relative w-[541px] h-[102px] left-[-3px]">
                  <div className="absolute w-[524px] h-[102px] top-0 left-2 [font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-white text-[32px] text-center tracking-[0] leading-[normal]">
                    ETKİNLİĞE BAŞVURU FORMU
                  </div>

                  <img
                    className="w-[541px] h-[7px] top-[88px] left-0 absolute object-cover"
                    alt="Line"
                    src="/apply/line 25.png"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <img
            className="absolute w-[542px] h-[139px] top-0 left-[383px] object-cover"
            alt="Medeniyet teknoloji"
            // src={medeniyetTeknolojiGunleri1}
          /> */}
        </div>
      </div>
    </div>
  );
}
