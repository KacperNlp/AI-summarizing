import { useState } from "react";
import { pipeline } from "@xenova/transformers";

import { AppButton } from "./components/AppButton";
import { AppLoader } from "./components/AppLoader";

function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [message, setMessage] = useState(false);

  async function summarizeLocally(text) {
    const summarizer = await pipeline("summarization");
    const summary = await summarizer(text, { max_length: 100 });
    return summary[0]?.summary_text;
  }

  async function analyzeWebsite() {
    setIsAnalyzing(true);

    await summarizeLocally(message);
    setIsAnalyzing(false);
  }

  const updateInputValue = (e: Event) => {
    if (!e || e === null) return;

    setMessage(e.target.value);
  };

  return (
    <>
      <section className="flex flex-col items-center">
        <h1 className="text-lg my-2 font-semibold text-center">
          <span className="font-bold text-purple-600">AI</span> Summaring
        </h1>
        <AppButton onClick={analyzeWebsite}>Przeanalizuj stronę!</AppButton>
        <input type="text" onChange={updateInputValue} />
      </section>
      {isAnalyzing && <AppLoader />}
    </>
  );
}

export default App;
