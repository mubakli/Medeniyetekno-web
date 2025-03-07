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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Successfully submitted!");
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
    <div className="bg-[#231e2f] flex flex-col lg:flex-row justify-center items-center w-full min-h-screen p-6">
      {/* Banner Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-full max-w-lg">
          <img
            className="w-full rounded-[30px] shadow-lg"
            alt="Banner"
            src="/Banner.jpeg"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center mt-6 lg:mt-0">
        <div className="bg-[#231e2f] p-8 rounded-[30px] shadow-lg w-full max-w-md">
          <h2 className="text-white text-2xl font-bold text-center mb-4">
            ETKİNLİĞE BAŞVURU FORMU
          </h2>
          <div className="border-b-2 border-white w-32 mx-auto mb-6"></div>

          {/* Input Fields */}
          {[
            {
              name: "name",
              placeholder: "İsminizi ve Soyisminizi Giriniz",
              icon: "nameIcon.png",
            },
            {
              name: "school",
              placeholder: "Okulunuzun Adını Giriniz",
              icon: "universityIcon.png",
            },
            {
              name: "faculty",
              placeholder: "Bölümünüzü Giriniz",
              icon: "departmentIcon.png",
            },
            {
              name: "grade",
              placeholder: "Sınıfınızı Giriniz",
              icon: "gradeIcon.png",
            },
            {
              name: "email",
              placeholder: "E-mail Adresinizi Giriniz",
              icon: "emailIcon.png",
            },
            {
              name: "phone",
              placeholder: "Telefon Numaranızı Giriniz",
              icon: "phoneNumberIcon.png",
            },
          ].map(({ name, placeholder, icon }) => (
            <div key={name} className="relative mb-4">
              <img
                className="absolute left-4 top-3 w-6 h-6"
                alt={name}
                src={`/apply/${icon}`}
              />
              <input
                type="text"
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                placeholder={placeholder}
                className="pl-14 pr-4 py-2 w-full bg-[#ddd9d2] text-[#0b338b] text-base font-semibold rounded-[25px] outline-none"
              />
            </div>
          ))}

          {/* Textarea Field */}
          <div className="relative mb-4">
            <img
              className="absolute left-4 top-3 w-6 h-6"
              alt="message icon"
              src="/apply/messageIcon.png"
            />
            <textarea
              name="more"
              value={formData.more}
              onChange={handleChange}
              placeholder="Etkinliğimizi Nereden Duydunuz?"
              className="pl-14 pr-4 py-3 w-full h-24 bg-[#ddd9d2] text-[#0b338b] text-base font-semibold rounded-[25px] outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-[25px] transition duration-200"
            onClick={handleSubmit}
          >
            Kayıt Ol
          </button>
        </div>
      </div>
    </div>
  );
}
