import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedSemester, setSelectedSemester] = useState("Semester One");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [page, setPage] = useState(1);

  return (
    <AppContext.Provider
      value={{
        selectedSemester,
        setSelectedSemester,
        selectedCourse,
        setSelectedCourse,
        page,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
