import React, { use } from "react";
import { Montserrat } from "next/font/google";
import { useState } from "react";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

const montserratBold = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

function Contact() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // Check for a successful response and no error in the response data
      if (res.ok && !data.error) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", text: "" });
      } else {
        // If there is an error in the response (like Missing 'to' field)
        setStatus(data.error?.message || "Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className={`px-[5%] my-10 w-full ${montserrat.className}`}>
      <div
        className={`flex text-[#1b62ff] justify-center items-center text-[40px] font-bold mb-10 ${montserratBold.className}`}
      >
        BİZİMLE İLETİŞİME GEÇİN
      </div>
      <div className=" flex flex-col lg:flex-row justify-center items-center justify-between md:space-x-10 ">
        <div className="flex flex-col space-y-6 items-end h-auto w-full max-w-[90%] sm:max-w-[450px]">
          <input
            name="name"
            maxLength={50}
            required
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="İsminizi Giriniz"
            className="w-full lg:w-[450px] h-[40px] lg:h-[50px] px-4 text-[#0b338b] text-lg lg:text-base font-semibold font-['Montserrat'] bg-[#ddd9d2] rounded-[25px] border border-white"
          />
          <input
            name="email"
            maxLength={60}
            required
            value={formData.email}
            onChange={handleChange}
            type="text"
            placeholder="Email Adresinizi Giriniz"
            className="w-full lg:w-[450px] h-[40px] lg:h-[50px] px-4 text-[#0b338b] text-lg lg:text-base font-semibold font-['Montserrat'] bg-[#ddd9d2] rounded-[25px] border border-white"
          />
          <textarea
            name="text"
            maxLength={430}
            required
            value={formData.text}
            onChange={handleChange}
            placeholder="Mesajınızı Giriniz"
            className="w-full lg:w-[450px] h-[200px] lg:h-[300px] px-4 py-3 text-[#0b338b] text-lg lg:text-base font-semibold font-['Montserrat'] bg-[#ddd9d2] rounded-[25px] border border-white"
          />
          <div className="flex ">
            <button
              onClick={handleSubmit}
              className="w-36 lg:w-44 h-10 lg:h-12 bg-blue-600 rounded-full text-white flex items-center justify-center hover:cursor-pointer"
            >
              Gönder
            </button>
          </div>
          {status && (
            <p className="flex text-orange-600 text-sm mt-2">{status}</p>
          )}
        </div>
        <div
          className="flex flex-col items-center justify-between mt-10 py-36 lg:py-36 h-auto w-full md:max-w-[50%] lg:max-w-[550px] lg:p-10 bg-cover bg-center  rounded-lg "
          style={{
            backgroundImage: "url('/logoBg.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-[#df9404] md:text-xl font-bold text-center">
            E-mail
          </div>
          <div className="mb-5 text-base md:text-lg text-white font-light text-center">
            medeniyetekno@gmail.com
          </div>

          <div className="text-center">
            <div className="text-[#df9404] md:text-xl font-bold">Adres</div>
            <p className="text-base md:text-lg text-white font-light">
              Ünalan Mah. Ünalan Sok D-100 Karayolu Yanyolu, 34700
              Üsküdar/İstanbul
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
