import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    doubt: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = "918178455863"; // 👈 Your WhatsApp number in international format
    const message = `Hello, my name is ${formData.name}.
My email is ${formData.email}.
${formData.doubt}

This message is sent from BCAGuide`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // opens WhatsApp Web / App
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-full lg:max-w-60 p-2 bg-white text-gray-700"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="border border-emerald-400 rounded-md p-2"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border border-emerald-400 rounded-md p-2"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="doubt"
        className="border border-b-2 border-emerald-400 rounded-md p-2 h-full"
        placeholder="Ask Doubt"
        value={formData.doubt}
        onChange={handleChange}
        required
      ></textarea>
      <input
        type="submit"
        value="Send Message"
        className="bg-emerald-600 text-white p-2 cursor-pointer rounded-md"
      />
    </form>
  );
};

export default Form;
