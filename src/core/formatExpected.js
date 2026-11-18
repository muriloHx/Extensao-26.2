export function formatExpected(operator, value, unit = "") {
  const formattedValue = typeof value === "boolean"
    ? (value ? "sim" : "não")
    : value;
  const valueWithUnit = unit ? `${formattedValue} ${unit}` : formattedValue;

  switch (operator) {
    case ">=": return `No mínimo ${valueWithUnit} (inclusive)`;
    case "<=": return `No máximo ${valueWithUnit} (inclusive)`;
    case ">": return `Acima de ${valueWithUnit} (sem incluir o limite)`;
    case "<": return `Abaixo de ${valueWithUnit} (sem incluir o limite)`;
    case "==":
    case "eq": return `Igual a ${valueWithUnit}`;
    case "!=": return `Diferente de ${valueWithUnit}`;
    default: return valueWithUnit;
  }
}
