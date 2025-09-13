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

    const phone = "918178455863";
    const message = `Hello
Name - ${formData.name}.
Email - ${formData.email}.

Doubt - ${formData.doubt}

This message is sent from BCAGuide`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
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
        className="border border-b-2 border-emerald-400 rounded-md p-2 antialiased"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border border-b-2 border-emerald-400 rounded-md p-2 antialiased"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="doubt"
        className="border border-b-2 border-emerald-400 rounded-md p-2 h-full resize-none antialiased"
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
