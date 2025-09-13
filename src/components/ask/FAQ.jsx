import { useState } from "react";

const faqs = [
  {
    que: "What is BCA Guide?",
    ans: "BCA Guide is a platform created to help IGNOU BCA students access question papers, assignments, study materials, solutions, and important updates in one organized place.",
  },
  {
    que: "Is BCA Guide free to use?",
    ans: "Yes! All resources provided on BCA Guide are free to access for every IGNOU BCA student.",
  },
  {
    que: "Can I download previous year question papers with solutions?",
    ans: "Absolutely. We provide PYQs along with solutions so you can practice effectively for exams.",
  },
  {
    que: "Does BCA Guide provide assignment solutions?",
    ans: "Yes, you will find solved assignments and guidance to help you prepare and submit your assignments on time.",
  },
  {
    que: "How do I know about IGNOU updates and notifications?",
    ans: "We regularly update the platform with official guidelines, notifications, and important links so that you never miss an update.",
  },
  {
    que: "Can I ask my own doubts?",
    ans: "Yes, you can submit your doubts through the contact form, and we will try our best to provide solutions and guidance.",
  },
  {
    que: "Does BCA Guide cover only IGNOU BCA?",
    ans: "Currently, the platform is focused on IGNOU BCA students, but in the future we may expand to cover other programs too.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
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
