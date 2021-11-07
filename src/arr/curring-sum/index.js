export default function() {
  let arr = [].slice.call(arguments);

  function fn() {
    // 注意concat之后要赋值给一个新的数组
    arr = arr.concat([].slice.call(arguments));
    return fn;
  }

  fn.sumOf = function() {
    return arr.reduce((total, curVal) => total + curVal);
  }

  return fn;
}