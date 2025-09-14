import Carousel from "../components/Carousel";
import EnterData from "../components/EnterData";
import FAQ from "../components/ask/FAQ";
import Form from "../components/ask/Form";
import { useAppContext } from "../context/AppContext";

const AskDoubt = () => {
  const { user } = useAppContext();
  return (
    <>
      {user && <EnterData />}
      <h1 className="text-xl text-gray-700">Ask Doubts</h1>
      <Carousel sidebarComponent={<Form />} page={<FAQ />} />
    </>
  );
};

export default AskDoubt;
