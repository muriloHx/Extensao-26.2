// Classificação única dos estados de uma avaliação.
//
// O rótulo do badge e a contagem dos resumos saem daqui de propósito: quando as
// duas listas viviam em arquivos diferentes, uma regra podia aparecer como
// "Pendente" e ser somada em "Não conforme" (era o caso de `invalido` e `erro`
// numa avaliação em branco).

export const STATUS_LABELS = {
  conforme: "Conforme",
  nao_conforme: "Não conforme",
  nao_avaliado: "Pendente",
  invalido: "Pendente",
  erro: "Pendente",
  atencao: "Atenção",
  manual: "Verificar",
};

export function statusLabel(status) {
  return STATUS_LABELS[status] ?? "Pendente";
}

// "Não conforme" é apenas o que foi medido e reprovou. Falta de dado
// obrigatório (`invalido`) e erro de configuração (`erro`) são pendências:
// não existe medição para reprovar. Status desconhecido também cai em pendente,
// que é o mesmo rótulo dado por statusLabel.
export function statusBucket(status) {
  if (status === "nao_conforme") return "nao_conforme";
  if (status === "conforme") return "conforme";
  return "pendente";
}
