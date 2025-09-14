import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    doubt: "",
  });

  const [isAdmin, setIsAdmin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Trigger hidden login panel if name is "admin"
    if (name === "name" && value.toLowerCase() === "admin") {
      setIsAdmin(true);
    } else if (name === "name" && value.toLowerCase() !== "admin") {
      setIsAdmin(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  const handleLogout = async () => {
    await signOut(auth);
    onLogin(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isAdmin) {
      try {
        const userCred = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        onLogin(userCred.user);
        console.log("Login Successfull");
      } catch (err) {
        console.log(err);
      }
    } else {
      const phone = "918178455863";
      const message = `Hello
Name - ${formData.name}.
Email - ${formData.email}.

Doubt - ${formData.doubt}

This message is sent from BCAGuide`;

      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-full lg:max-w-100 p-2 bg-white text-gray-700"
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
      {isAdmin ? (
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="border border-b-2 border-emerald-400 rounded-md p-2 antialiased"
          value={formData.password}
          onChange={handleChange}
          required
        />
      ) : (
        <textarea
          name="doubt"
          className="border border-b-2 border-emerald-400 rounded-md p-2 h-full resize-none antialiased"
          placeholder="Ask Doubt"
          value={formData.doubt}
          onChange={handleChange}
          required
        ></textarea>
      )}
      <input
        type="submit"
        value={`${isAdmin ? "Login" : "Send Message"}`}
        className="bg-emerald-600 text-white p-2 cursor-pointer rounded-md"
      />
    </form>
  );
};

export default Form;
