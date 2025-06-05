import { create } from "zustand";

// Zustand ile global state yönetimi için bir store oluşturuluyor
const useCalculatorStore = create((set) => ({
  // Kullanıcının girdiği matematiksel ifade
  input: "",
  // Hesaplanan sonuç
  result: "",
  // Önceki işlemlerin geçmişi (expression ve result objeleriyle)
  history: [],
  // Tema durumu: "light" (açık) veya "dark" (koyu)
  theme: "light",

  setInput: (newInput) => set({ input: newInput }),
  appendInput: (value) => set((state) => ({ input: state.input + value })),
  deleteLastChar: () => set((state) => ({ input: state.input.slice(0, -1) })),
  clearInput: () => set({ input: "", result: "" }),
  setResult: (newResult) => set({ result: newResult }),
  addToHistory: (expression, result) =>
    set((state) => ({
      history: [...state.history, { expression, result }],
    })),
  // Temayı açık/koyu olarak değiştirir
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));

export default useCalculatorStore;
