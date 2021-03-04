import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  let obj;
  if (buttonName === '+/-') {
    obj = { total: total * -1, next: next * -1, operation };
  } else if (buttonName === 'AC') {
    obj = { total: 0, next: 0 };
  } else if (buttonName === '=') {
    obj = { total: operate(total, next, buttonName) };
  }
  return obj;
};

export default calculate;
