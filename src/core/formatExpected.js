export function formatExpected(operator, value, unit = "") {
  const formattedValue = typeof value === "boolean"
    ? (value ? "Sim" : "Não")
    : value;
  const valueWithUnit = `${formattedValue}${unit ?? ""}`;

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
