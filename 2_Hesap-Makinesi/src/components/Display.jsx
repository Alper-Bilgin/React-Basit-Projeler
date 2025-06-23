import { useState } from "react";
import { Copy } from "lucide-react";
import useCalculatorStore from "../store/calculatorStore";

const Display = () => {
  // input: Kullanıcının girdiği ifade, result: Hesaplanan sonuç
  const { input, result } = useCalculatorStore();
  const [copied, setCopied] = useState(false);

  // Sonucu panoya kopyalayan fonksiyon
  const handleCopy = async () => {
    try {
      // Sonucu panoya kopyala
      await navigator.clipboard.writeText(result.toString());
      // Kopyalandı bilgisini göster
      setCopied(true);
      // 1.5 saniye sonra tekrar "Kopyala"ya dön
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Kopyalama hatası:", error);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4 shadow-inner">
      {/* Kullanıcının girdiği matematiksel ifade */}
      <div className="text-right text-sm text-gray-500 dark:text-gray-400 truncate">{input || "0"}</div>
      <div className="flex justify-between items-center mt-2">
        {/* Hesaplanan sonuç */}
        <div className="text-2xl font-bold text-black dark:text-white break-words">{result || "0"}</div>
        {/* Sonuç varsa kopyala butonu göster */}
        {result && (
          <button onClick={handleCopy} className="ml-2 text-sm text-blue-500">
            <Copy size={16} className="inline mr-1" />
            {copied ? "Kopyalandı" : "Kopyala"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Display;
