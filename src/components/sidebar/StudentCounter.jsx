import { useEffect, useState } from "react";
import studentLogo from "../../assets/student.png";
import { db } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const StudentCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const ref = doc(db, "stats", "visits");

    const updateVisits = async () => {
      const snap = await getDoc(ref);
      const currentCount = snap.data().count;

      await updateDoc(ref, { count: currentCount + 1 });
      setCount(currentCount + 1);
      console.log(currentCount);
    };

    if (!sessionStorage.getItem("visited")) {
      console.log("I am running");
      updateVisits();
      sessionStorage.setItem("visited", "true");
    }
  }, []);


  return (
    <section className="flex justify-center items-center gap-2 bg-white rounded h-[40px] border border-gray-300">
      <img
        src={studentLogo}
        alt="Scholarship Hat Logo"
        className="w-4 -mt-[2px] brightness-25"
      />
      Students Counter - {count}
    </section>
  );
};

export default StudentCounter;
