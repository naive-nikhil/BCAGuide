const Viva = () => {
  return (
    <div className="w-full text-gray-700">
      <h1 className="text-2xl">Viva Voce (Max Marks - 100)</h1>
      <h1 className="text-lg mt-4">Calendar</h1>
      <p>Twice a year as shown below</p>
      <ul className="list-inside list-disc pl-5">
        <li>
          In July - For reports submitted during 1st January to 31st March Slot
        </li>
        <li>
          In January - For reports submitted during 1st July to 30th Septemeber
          Slot
        </li>
      </ul>
      <h1 className="text-lg mt-4">MUST READ</h1>
      <ul className="list-inside list-disc pl-5 text-gray-600 space-y-1 pt-2">
        <li>Sincerely revise your Project Report</li>
        <li>All the questions will be asked from it</li>
        <li>Min - 50% marks are needed to pass this step.</li>
        <li>
          Passing Marks - Project Report (Min 75/150) & Viva Voce (Min 50/100)
        </li>
        <li>
          I have provided every bit of help I could to complete your course.
        </li>
      </ul>
    </div>
  );
};

export default Viva;
