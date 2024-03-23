function count() {
  let a = 0;
  return function () {
    return a++;
  };
}
const counter = count();
counter();
