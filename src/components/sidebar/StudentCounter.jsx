import { useEffect, useState } from "react";
import studentLogo from "../../assets/student.png";

// Placeholder component for initial render
const CounterPlaceholder = () => (
  <section className="flex justify-center items-center gap-2 bg-white rounded h-[40px] border border-gray-300">
    <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse -mt-[2px]" />
    Loading...
  </section>
);

const StudentCounter = () => {
  const [count, setCount] = useState(null); // null means "loading"

  useEffect(() => {
    // Lazy-load Firebase modules only when component mounts
    const loadFirebaseAndFetch = async () => {
      const { db } = await import("../../firebase"); // dynamic import
      const { doc, getDoc, updateDoc } = await import("firebase/firestore");

      const ref = doc(db, "stats", "visits");

      // Check session cache first
      const cachedCount = sessionStorage.getItem("studentCount");
      if (cachedCount) {
        setCount(Number(cachedCount));
        return;
      }

      // Fetch current count from Firestore
      const snap = await getDoc(ref);
      const currentCount = snap.data()?.count || 0;

      setCount(currentCount);
      sessionStorage.setItem("studentCount", currentCount);

      // Increment if first visit in this session
      if (!sessionStorage.getItem("visit")) {
        await updateDoc(ref, { count: currentCount + 1 });
        setCount(currentCount + 1);
        sessionStorage.setItem("visit", "true");
      }
    };

    loadFirebaseAndFetch();
  }, []);

  // Render placeholder while loading to avoid layout shift
  if (count === null) return <CounterPlaceholder />;

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
