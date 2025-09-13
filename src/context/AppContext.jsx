import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedSemester, setSelectedSemester] = useState("Semester One");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedStep, setSelectedStep] = useState("synopsis");
  const [selectedSession, setSelectedSession] = useState("june");
  const [showForm, setShowForm] = useState(false);

  return (
    <AppContext.Provider
      value={{
        selectedSemester,
        setSelectedSemester,
        selectedCourse,
        setSelectedCourse,
        selectedStep,
        setSelectedStep,
        selectedSession,
        setSelectedSession,
        showForm,
        setShowForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
