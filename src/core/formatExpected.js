// A unidade pode ser um símbolo ("m", "%") ou um substantivo com singular e
// plural ({ singular: "degrau", plural: "degraus" }), para o critério não sair
// como "1 degraus".
export function formatUnit(unit, value) {
  if (!unit) return "";
  if (typeof unit === "string") return unit;
  return value === 1 ? unit.singular : unit.plural;
}

export function formatExpected(operator, value, unit = "") {
  const formattedValue = typeof value === "boolean"
    ? (value ? "sim" : "não")
    : value;
  const unitLabel = formatUnit(unit, value);
  const valueWithUnit = unitLabel ? `${formattedValue} ${unitLabel}` : formattedValue;

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
