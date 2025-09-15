import { useEffect, useState } from "react";
import studentLogo from "../../assets/student.png";
import { db } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const StudentCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const ref = doc(db, "stats", "visits");

    const fetchAndUpdate = async () => {
      const snap = await getDoc(ref);
      const currentCount = snap.data()?.count || 0;

      // Always show the current value
      setCount(currentCount);

      // Only increment if first visit in this session
      if (!sessionStorage.getItem("visit")) {
        await updateDoc(ref, { count: currentCount + 1 });
        setCount(currentCount + 1);
        sessionStorage.setItem("visit", "true");
      }
    };

    fetchAndUpdate();
  }, []);


  return (
    <section className="flex justify-center items-center gap-2 bg-white rounded h-[40px] border border-gray-300">
      <img
        src={studentLogo}
        alt="Scholarship Hat Logo"
        className="w-4 -mt-[2px] brightness-25"
      />
      Students Counter - {count} Visits
    </section>
  );
};

export default StudentCounter;
