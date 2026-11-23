// Concordância de número nos rótulos com contagem: "1 ambiente", "3 ambientes".
export function plural(count, singular, pluralForm) {
  return `${count} ${count === 1 ? singular : pluralForm}`;
}
