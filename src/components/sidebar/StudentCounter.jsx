import studentLogo from "../../assets/student.png";

const StudentCounter = ({ count }) => {
  return (
    <section className="flex justify-center items-center gap-2 bg-white rounded h-[40px] border border-gray-300">
      <img
        src={studentLogo}
        alt="Scholarship Hat Logo"
        className="w-4 -mt-[2px] brightness-25"
      />
      Students Counter - {count.toLocaleString()}
    </section>
  );
};

export default StudentCounter;
