import Carousel from "../components/Carousel";
import FAQ from "../components/ask/FAQ";
import Form from "../components/ask/Form";

const AskDoubt = () => {
  return (
    <>
      {" "}
      <h1 className="text-xl text-gray-700">Ask Doubts</h1>
      <Carousel sidebarComponent={<Form />} page={<FAQ />} />
    </>
  );
};

export default AskDoubt;
