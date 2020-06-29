// IMPORTS
import React from 'react';

// MAIN
function Cell(props: any) {
  const { thisCell, toggleCellStatus, mousePressed } = props;
  return (
    <div
      className='cell'
      style={{
        backgroundColor: thisCell === 0 ? undefined : '#2196f3',
        width: '100%',
        height: '3.5vh',
        // border: '.5px solid black'
        boxShadow:
          thisCell === 0
            ? '0 0 2px black'
            : '0 0 10px #2196f3,0 0 40px #2196f3, 0 0 80px #2196f3',
      }}
      onClick={() => toggleCellStatus()}
      onMouseOver={() => {
        if (mousePressed) {
          toggleCellStatus();
        }
      }}
    />
  );
}

// EXPORTS
export default Cell;
