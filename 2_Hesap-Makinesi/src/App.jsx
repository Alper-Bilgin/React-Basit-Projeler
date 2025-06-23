import Display from "./components/Display";
import Keypad from "./components/Keypad";
import History from "./components/History";
import useCalculatorStore from "./store/calculatorStore";
import { evaluateExpression } from "./utils/evaluate";
import { useEffect } from "react";

function App() {
  const { input, result, setInput, appendInput, deleteLastChar, clearInput, setResult, addToHistory, theme, toggleTheme } = useCalculatorStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleButtonClick = (value) => {
    if (value === "C") {
      clearInput();
    } else if (value === "←") {
      deleteLastChar();
    } else if (value === "=") {
      const evalResult = evaluateExpression(input);
      setResult(evalResult.toString());
      if (evalResult !== "Hata") {
        addToHistory(input, evalResult.toString());
      }
    } else {
      appendInput(value);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <button onClick={toggleTheme} className="mb-2 text-sm text-blue-500 dark:text-blue-300">
        Tema: {theme === "light" ? "Açık" : "Koyu"}
      </button>

      <Display />
      <Keypad onButtonClick={handleButtonClick} />
      <History />
    </div>
  );
}

export default App;
