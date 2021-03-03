// eslint-disable-next-line consistent-return
const calculate = ({ total, next, operation }, buttonName) => {
  if (buttonName === '+/-') {
    return { total: total * -1, next: next * -1, operation };
  }
};

export default calculate;
