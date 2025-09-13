import { useState } from "react";

const faqs = [
  { que: "What is your Name!", ans: "The name's Bond! James Bond." },
  { que: "What is your Name!", ans: "The name's Bond! James Bond." },
  { que: "What is your Name!", ans: "The name's Bond! James Bond." },
  { que: "What is your Name!", ans: "The name's Bond! James Bond." },
  { que: "What is your Name!", ans: "The name's Bond! James Bond." },
  { que: "What is your Name!", ans: "The name's Bond! James Bond." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl">Frequently Asked Questions</h2>
      <ul className="grid grid-cols-1 gap-4">
        {faqs &&
          faqs.map((faq, index) => (
            <li
              onClick={() => toggleFAQ(index)}
              key={index}
              className="border p-2 border-gray-200 transition-all duration-300 ease rounded border-b-3 cursor-pointer"
            >
              <h2>{faq.que}</h2>
              {openIndex === index && (
                <p className="text-gray-400">{faq.ans}</p>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FAQ;
