export const filterUniqueData = <T extends { id: unknown }>(data?: T[]) =>
  [...new Map(data?.reverse().map((d) => [d.id, d])).values()].reverse();
