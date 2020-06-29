// IMPORTS
import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';

// FUNCTIONS
import { empty2Dgrid } from './utils/empty2Dgrid';
import { randomGrid } from './utils/randomGrid';
import { countNeighbors } from './utils/countNeighbors';

// COMPONENTS
import AppStateForm from './components/Controls';
import Cell from './components/Cell';

// STYLES
import './styles/app.css';
import './styles/index.css';

//Type INTERFACES
interface Cell {
  key: string;
  grid: [];
  i: number;
  k: number;
  toggleCellStatus: boolean;
  mousePressed: boolean;
}

// __MAIN__
function App() {
  // STATE
  const [size] = useState(25);
  const [grid, setGrid] = useState(empty2Dgrid(size));
  const [simSpeed] = useState(500);
  const [mousePressed, setMousePressed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const playRef = useRef(playing); // runningRef == "Ref CONTAINER"
  const [generation, setGeneration] = useState(0);
  playRef.current = playing;

  // METHODS
  const clear = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setPlaying(!playing);
    setGrid(empty2Dgrid(size));
  };

  const randomize = (e: React.SyntheticEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (!playing) {
      setGrid(randomGrid(size));
    }
  };

  const toggleCellStatus = (i: number, k: number) => {
    const newGrid = produce(grid, (gridCopy: Array<number[]>) => {
      gridCopy[i][k] = grid[i][k] === 0 ? 1 : 0;
    });
    setGrid(newGrid);
  };

  const toggleSimulation = () => {
    setPlaying(!playing);
    playRef.current = !playing;
    runSimulation();
  };

  const runSimulation = useCallback(() => {
    if (!playRef.current) {
      return;
    }
    runIteration();
    setTimeout(runSimulation, simSpeed);
  }, [size]);

  const runIteration = () => {
    setGeneration((currentGen) => (currentGen += 1));
    setGrid((grid) => {
      return produce(grid, (backGrid: Array<number[]>) => {
        for (let i = 0; i < size; i++) {
          for (let k = 0; k < size; k++) {
            let neighbors = countNeighbors(grid, i, k, size);
            if (neighbors > 0) {
            }

            if (neighbors < 2 || neighbors > 3) {
              backGrid[i][k] = 0;
            } else if (grid[i][k] === 0 && neighbors === 3) {
              backGrid[i][k] = 1;
            }
          }
        }
      });
    });
  };

  return (
    <div className='App'>
      <div className='Game'>
        <div
          onMouseDown={() => setMousePressed(!mousePressed)}
          onMouseUp={() => setMousePressed(!mousePressed)}
          className='gridContainer'
          style={{
            display: `grid`,
            gridTemplateColumns: `repeat(${size}, auto)`,
          }}>
          {grid.map((rows, i: number) => {
            return rows.map((cols, k: number) => {
              return (
                <Cell
                  key={`${i}-${k}`}
                  thisCell={grid[i][k]}
                  toggleCellStatus={() => toggleCellStatus(i, k)}
                  mousePressed={mousePressed}
                />
              );
            });
          })}
        </div>
        <AppStateForm
          generation={generation}
          randomize={randomize}
          clear={clear}
          playing={playing}
          toggleSimulation={toggleSimulation}
        />
      </div>
    </div>
  );
}

// EXPORTS
export default App;
