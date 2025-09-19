import { Suspense, lazy } from "react";
import Carousel from "../components/Carousel";
import EnterData from "../components/EnterData";
import FAQ from "../components/ask/FAQ";
import { useAppContext } from "../context/AppContext";

// Lazy-load Form for performance
const Form = lazy(() => import("../components/ask/Form"));

const AskDoubt = () => {
  const { user } = useAppContext();

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Optional: show EnterData only for logged-in users */}
      {user && <EnterData />}

      <h1 className="text-2xl font-bold text-gray-700 mb-4">Ask Doubts</h1>

      {/* Carousel with lazy-loaded sidebar Form */}
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
    </div>
  );
};

export default AskDoubt;
