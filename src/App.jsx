import React, { useEffect, useState } from "react";
import lg_divider from "./assets/images/pattern-divider-desktop.svg";
import sm_divider from "./assets/images/pattern-divider-mobile.svg";
import dice from "./assets/images/icon-dice.svg";
import { use } from "react";

const App = () => {
  const [advice, setAdvice] = useState("");

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip);
    } catch (error) {
      console.log("Errors fetching data", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <section>
      <div className="bg-[#1f2632ff] w-full h-screen flex justify-center items-center px-[5%]">
        <div className="bg-[#323a49ff] flex flex-col items-center rounded-lg p-6 w-full sm:w-[35%]">
          <div className="flex flex-col items-center gap-4 ">
            <span className="text-[#52ffa8ff] text-xs">{`ADICE ${advice.id}`}</span>
            <p className="text-[#cee3e9ff] font-medium text-center">
              {advice.advice}
            </p>
            <picture>
              <source media="(min-width: 768px )" srcSet={lg_divider} />
              <img src={sm_divider} alt="" />
            </picture>
          </div>

          <div
            onClick={fetchQuote}
            className="p-3 rounded-full bg-[#52ffa8ff] relative top-11"
          >
            <img src={dice} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
