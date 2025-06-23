const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+", "C", "←"];

const Keypad = ({ onButtonClick }) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {buttons.map((btn, index) => (
        <button key={index} onClick={() => onButtonClick(btn)} className="p-3 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
