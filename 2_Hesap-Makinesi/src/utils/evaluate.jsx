import { evaluate } from "mathjs";

export const evaluateExpression = (expression) => {
  try {
    const result = evaluate(expression);
    return result;
  } catch (error) {
    return "Hata";
  }
};
