export function countNeighbors(
  grid: Array<number[]>,
  colIdx: number,
  rowIdx: number,
  size: number,
) {
  // Variables
  // 1 - Neighbor Coordinates
  const neighbors = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
  ];
  // 2 - Result to Return
  let result = 0;

  // Main Loop
  neighbors.forEach(([x, y]) => {
    // Individual Neighbor Coords
    const newColIdx = colIdx + x;
    const newRowIdx = rowIdx + y;

    // Count neighbors
    if (
      newColIdx >= 0 &&
      newColIdx < size &&
      newRowIdx >= 0 &&
      newRowIdx < size
    ) {
      result += grid[newColIdx][newRowIdx];
    }
  });

  // RETURN
  return result;
}
