import React, { useState } from "react";
import ac from "../assets/imgs/ac.png";

export default function Book({ id }) {
  const [formData, setFormData] = useState({ heroName: "", heroPhone: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.heroName || !formData.heroPhone) {
      setMessage("Please provide your name and phone number.");
      return;
    }
    console.log("Hero Form Submitted:", formData);
    setMessage("✅ Appointment request sent!");
    setFormData({ heroName: "", heroPhone: "" });
    setTimeout(() => setMessage(""), 4000);
  };

  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={ac}
        alt="Air conditioning background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-sky-950/70" />
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 text-center lg:text-left">
        <div className="text-white lg:w-1/2 space-y-5">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Stay Cool on the Road.
          </h1>
          <p className="text-xl opacity-90">
            Expert A/C Repair & Maintenance right when you need it.
          </p>
          <p className="text-sky-300 font-medium">Fill out the form to get a rapid quote.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md space-y-4"
        >
          <h3 className="text-2xl font-semibold text-sky-700">Quick Booking</h3>
          <input
            type="text"
            name="heroName"
            placeholder="Your Full Name"
            value={formData.heroName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
          />
          <input
            type="tel"
            name="heroPhone"
            placeholder="Phone Number"
            value={formData.heroPhone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
          />
          {message && (
            <p
              className={`text-sm p-2 rounded-md ${
                message.startsWith("✅")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-sky-600 text-white font-semibold py-3 rounded-lg hover:bg-sky-700 transition"
          >
            Get A Call Back Now
          </button>
        </form>
      </div>
    </section>
  );
}
