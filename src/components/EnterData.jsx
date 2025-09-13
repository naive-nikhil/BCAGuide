import React from "react";
import { useAppContext } from "../context/AppContext";

const EnterData = () => {
  const { showForm } = useAppContext();
  return (
    showForm && (
      <div className="absolute top-0 left-0 h-dvh w-full bg-black/70 flex justify-center items-center z-999">
        <div className="h-100 w-80 bg-white rounded-md">Enter Data Form</div>
      </div>
    )
  );
};

export default EnterData;
