import "./Matrix.css";
import React, { useState } from 'react';
import { click } from "@testing-library/user-event/dist/click";
 
const Matrix = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [clickOrder, setClickOrder] = useState([]);
 
  const changeColorsToOrange  = (index) => {
    const newBoxes = [...boxes];
    const newClickOrder = [...clickOrder, index];
 
    if (newClickOrder.length === 9) {
      newClickOrder.forEach((orderIndex, i) => {
        setTimeout(() => {
          newBoxes[orderIndex] = 'orange';
          setBoxes([...newBoxes]);
        }, i * 100);
      });
    } else {
      if (boxes[index] === 'green' || boxes[index] === 'orange') return;
      newBoxes[index] = 'green';
      setBoxes(newBoxes);
    }
    setClickOrder(newClickOrder);
  };

  const reset = () => {
    setBoxes(Array(9).fill(null));
    setClickOrder([]);
  };

  return (
    <div className="main">
      <div className="grid">
        {boxes.map((color, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: color }}
            onClick={() => changeColorsToOrange(index)}
          >
            <div className="order">
              {clickOrder.includes(index) ? clickOrder.indexOf(index) + 1 : ''}
            </div>
          </div>
        ))}
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
 
export default Matrix;