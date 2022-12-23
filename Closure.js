
// Start Closure
function createCounter() {
  let counter = 0;
  function increase() {
    return ++counter;
  }
  return increase;
  // return increase là return về 1 hàm có thể log ra coi
}
const counter1 = createCounter();
// counter1 hiện giờ là hàm increase được tao ra ở phạm vi khác và lưu lại giá trị của counter , counter1 hiện tại là hàm global
console.log(createCounter());
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = createCounter();
// ghi gọi lại hàm createCounter() lại có 1 phạm vi khác đc tạo ra
// counter2 hiện giờ là hàm increase được tao ra ở phạm vi khác và lưu lại giá trị của counter , counter2 hiện tại là hàm global
console.log(createCounter());
console.log(counter2());
console.log(counter2());
console.log(counter2());
// End Closure
