import { useState } from "react";

import { AppButton } from "./components/AppButton";
import { AppLoader } from "./components/AppLoader";

function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeWebsite = () => {
    setIsAnalyzing(true);

    setTimeout(() => {
      setIsAnalyzing(false);
    }, 5000);
  };

  return (
    <>
      <section className="flex flex-col items-center">
        <h1 className="text-lg my-2 font-semibold text-center">
          <span className="font-bold text-purple-600">AI</span> Summaring
        </h1>
        <AppButton onClick={analyzeWebsite}>Przeanalizuj stronę!</AppButton>
      </section>
      {isAnalyzing && <AppLoader />}
    </>
  );
}

export default App;
