export const outNum = (number, element, time = 500, step = 100) => {
  let el = document.querySelector('#' + element);
  let num = 0;
  let t = Math.round(time / (number / step));
  let interval = setInterval(() => {
    num = num + step;
    if (num >= number) {
      num = number;
      clearInterval(interval);
    }
    el.innerHTML = num;
    return num;
  }, t);
};
