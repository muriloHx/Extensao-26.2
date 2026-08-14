export function compare(actual, operator, expected) {
  switch (operator) {
    case ">=": return actual >= expected;
    case "<=": return actual <= expected;
    case ">": return actual > expected;
    case "<": return actual < expected;
    case "==": return actual === expected;
    case "!=": return actual !== expected;
    default:
      throw new Error(`Operador não suportado: ${operator}`);
  }
}
