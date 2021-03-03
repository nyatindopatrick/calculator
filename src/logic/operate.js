import Big from 'big.js';

// eslint-disable-next-line consistent-return
const operate = (numberOne, numberTwo, operation) => {
  // eslint-disable-next-line default-case
  switch (operation) {
    case '+':
      return Big(numberOne).plus(numberTwo);
    case 'X':
      return Big(numberOne).times(numberTwo);
    case '-':
      return Big(numberOne).minus(numberTwo);
    case '÷':
      return Big(numberOne).div(numberTwo);
  }
};

export default operate;
