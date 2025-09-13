import React from "react";

const faqs = [
  { que: "What is your Name!", ans: "The name's Bond! James Bond." },
  { que: "What is your Name!", ans: "The name's Bond! James Bond." },
  { que: "What is your Name!", ans: "The name's Bond! James Bond." },
];

const FAQ = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl">Frequently Asked Questions</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {faqs &&
          faqs.map((faq, index) => (
            <Link
              to={`${material.id.toLowerCase().replace(/\s/g, "")}`}
              key={index}
              className="border p-2 border-gray-200 hover:-translate-y-1 transition-all duration-300 ease rounded border-b-3 text-blue-600 cursor-pointer"
            >
              {faq.que} - {faq.ans}
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default FAQ;
