import { useAppContext } from "../context/AppContext";

const EnterData = () => {
  const { showForm, setShowForm } = useAppContext();
  return (
    showForm && (
      <div className="absolute top-0 left-0 h-dvh w-full bg-black/70 flex justify-center items-center z-999">
        <div className="max-h-150 h-full max-w-120 m-4 w-full bg-white rounded-md relative p-2">
          <span
            onClick={() => setShowForm(false)}
            className="absolute top-2 right-2 cursor-pointer text-sm"
          >
            Close
          </span>
          <h1>Enter Data</h1>
          <label htmlFor="type">Select Type</label> -
          <select name="type" id="type">
            <option value="paper">Paper</option>
          </select>
        </div>
      </div>
    )
  );
};

export default EnterData;
