import useCalculatorStore from "../store/calculatorStore";

const History = () => {
  const history = useCalculatorStore((state) => state.history);

  if (history.length === 0) {
    return <div className="text-center text-gray-400 dark:text-gray-500 mt-4">Henüz geçmiş yok.</div>;
  }

  return (
    <div className="mt-4 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg shadow-inner">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Geçmiş</h3>
      <ul className="text-sm space-y-1 max-h-40 overflow-y-auto">
        {history.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>{item.expression}</span>
            <span className="font-semibold text-blue-600 dark:text-blue-300">= {item.result}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
