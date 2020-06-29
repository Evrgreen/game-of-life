// IMPORTS
import React, { useState } from 'react';

// STYLES
import '../styles/controls.css';

// MAIN
function AppStateForm(props: any) {
  const { generation, randomize, clear, playing, toggleSimulation } = props;
  const [show, setShow] = useState(false);

  return (
    <>
      <div className='controls'>
        <h1>Game of Life</h1>
        <h2>Generation: {generation}</h2>
        <button onClick={() => setShow(!show)}>Rules</button>
        <div className='button_group'>
          <button disabled={playing} onClick={(e) => randomize(e)}>
            Randomize Grid
          </button>
          <button disabled={playing} onClick={(e) => clear(e)}>
            Clear Grid
          </button>

          <button
            className={playing ? 'simToggle simOFF' : 'simToggle simON'}
            onClick={toggleSimulation}>
            {playing ? 'Stop' : 'Start'}
          </button>
        </div>
      </div>
      <div className={!show ? 'hide rulebook' : 'rulebook'}>
        <p>Rules:</p>
        <p>
          1. Any live cell with fewer than two live neighbours dies, as if by
          underpopulation.
        </p>
        <p>
          2. Any live cell with two or three live neighbours lives on to the
          next generation.
        </p>
        <p>
          3. Any live cell with more than three live neighbours dies, as if by
          overpopulation.
        </p>
        <p>
          4. Any dead cell with exactly three live neighbours becomes a live
          cell, as if by reproduction.
        </p>
      </div>
    </>
  );
}

// EXPORTS
export default AppStateForm;
