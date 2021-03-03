import React from 'react';
import Button from './Button';

const groupOne = ['AC', '+/-', '%', '÷'];
const groupTwo = ['7', '8', '9', 'X'];
const groupThree = ['4', '5', '6', '-'];
const groupFour = ['1', '2', '3', '+'];
const groupFive = ['0', '.', '='];

export default function ButtonPanel() {
  return (
    <div className="button-panel">
      <div>
        {groupOne.map(item => (
          <Button button={item} key={item} />
        ))}
      </div>
      <div>
        {groupTwo.map(item => (
          <Button button={item} key={item} />
        ))}
      </div>
      <div>
        {groupThree.map(item => (
          <Button button={item} key={item} />
        ))}
      </div>
      <div>
        {groupFour.map(item => (
          <Button button={item} key={item} />
        ))}
      </div>
      <div>
        {groupFive.map(item => (
          <Button button={item} key={item} />
        ))}
      </div>
    </div>
  );
}
