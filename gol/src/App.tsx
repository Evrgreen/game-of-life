import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const numRows = 50;
  const numCols = 50;

  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });

  console.log(grid);
  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
        }}>
        {grid.map((rows, rowIndex) =>
          rows.map((cols, colIndex) => (
            <div
              key={`${colIndex}-${colIndex}`}
              onClick={() => {
                console.log(`Click ${rowIndex} ${colIndex}`);
              }}
              style={{
                height: 20,
                width: 20,
                backgroundColor: grid[rowIndex][colIndex] ? 'pink' : undefined,
                border: '1px solid black',
              }}>
              {grid[rowIndex][colIndex]}
            </div>
          )),
        )}
      </div>
    </>
  );
}

export default App;
