export function empty2Dgrid(size: number, cb = () => 0) {
  const rows = [];
  for (let i = 0; i < size; i++) {
    rows.push(Array.from(Array(size), cb));
  }
  // RETURN
  return rows;
}
