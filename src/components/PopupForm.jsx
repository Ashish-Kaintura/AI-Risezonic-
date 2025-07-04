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
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative animate-fade-in">
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl"
          onClick={closeForm}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          Let’s Connect
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
