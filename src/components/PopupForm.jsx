import React, { useEffect } from "react";
import { useFormPopup } from "../context/FormContext"; // ✅

const PopupForm = () => {
  const { isOpen, openForm, closeForm } = useFormPopup(); // ✅ Fix

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("popup_shown")) {
        sessionStorage.setItem("popup_shown", "true");
        openForm(); // ✅ Will now work
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    closeForm();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-fade-in border border-blue-100">
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-3xl transition"
          onClick={closeForm}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center mb-4">
          <img
            src="https://i.postimg.cc/qqtCN8Gg/Whats-App-Image-2025-06-27-at-3-38-13-PM-removebg-preview.png"
            alt="Brand Logo"
            className="w-20 h-20 mb-2 rounded-full object-contain bg-white bg-center shadow-lg border-2 border-blue-200"
            style={{ objectFit: "contain" }}
          />
          <h2 className="text-2xl font-extrabold text-blue-700 mb-1 text-center tracking-tight">
            Let’s Connect
          </h2>
          <p className="text-gray-500 text-sm text-center mb-2">
            We’d love to hear from you! Fill out the form below and we’ll get in
            touch.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition"
            required
            autoFocus
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition"
            required
          />
           <input
            type="tel"
            placeholder="Your Number"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold py-3 rounded-xl shadow hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
