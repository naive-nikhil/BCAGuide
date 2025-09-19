import { Suspense, lazy } from "react";
import Carousel from "../components/Carousel";
import EnterData from "../components/EnterData";
import FAQ from "../components/ask/FAQ";
import { useAppContext } from "../context/AppContext";

// Lazy-load Form
const Form = lazy(() => import("../components/ask/Form"));

const AskDoubt = () => {
  const { user } = useAppContext();

  return (
    <>
      {user && <EnterData />}
      <h1 className="text-xl text-gray-700">Ask Doubts</h1>

      <Carousel
        sidebarComponent={
          <Suspense
            fallback={
              <div className="w-full h-[200px] bg-gray-100 animate-pulse rounded">
                Loading form...
              </div>
            }
          >
            <Form />
          </Suspense>
        }
        page={<FAQ />}
      />
    </>
  );
};

export default AskDoubt;
