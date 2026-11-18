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
  invalido: "Falta preencher",
  erro: "Erro no conjunto",
  atencao: "Atenção",
  manual: "Verificar",
};

// Como o resumo abre as pendências. Cada status aparece em no máximo um grupo.
export const PENDING_GROUPS = [
  { id: "preencher", label: "aguardando medição", statuses: ["invalido", "nao_avaliado"] },
  { id: "verificar", label: "para verificar", statuses: ["manual", "atencao"] },
  { id: "erro", label: "com erro no conjunto", statuses: ["erro"] },
];

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

// Contagens de um resultado já executado: os três totais do resumo e a abertura
// das pendências. A soma da abertura sempre fecha com o total de pendentes,
// inclusive para status que não estejam em nenhum grupo.
export function summarizeResult(result = []) {
  const counts = { conforme: 0, nao_conforme: 0, pendente: 0 };
  const byGroup = new Map(PENDING_GROUPS.map((group) => [group.id, 0]));

  for (const item of result) {
    counts[statusBucket(item.status)] += 1;

    const group = PENDING_GROUPS.find((candidate) => candidate.statuses.includes(item.status));
    if (group) byGroup.set(group.id, byGroup.get(group.id) + 1);
  }

  const pendingBreakdown = PENDING_GROUPS
    .map((group) => ({
      id: group.id,
      label: group.label,
      count: byGroup.get(group.id),
    }))
    .filter((group) => group.count > 0);

  const classified = pendingBreakdown.reduce((total, group) => total + group.count, 0);
  if (counts.pendente > classified) {
    pendingBreakdown.push({
      id: "outros",
      label: "sem classificação",
      count: counts.pendente - classified,
    });
  }

  return { ...counts, pendingBreakdown };
}
