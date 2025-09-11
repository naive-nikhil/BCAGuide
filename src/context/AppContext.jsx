import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedSemester, setSelectedSemester] = useState("Semester One");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [page, setPage] = useState(null);
  const [selectedStep, setSelectedStep] = useState("synopsis");
  const [selectedSession, setSelectedSession] = useState("june");

  return (
    <AppContext.Provider
      value={{
        selectedSemester,
        setSelectedSemester,
        selectedCourse,
        setSelectedCourse,
        page,
        setPage,
        selectedStep,
        setSelectedStep,
        selectedSession,
        setSelectedSession,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
