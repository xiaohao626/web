/**
 * 参考: https://www.jianshu.com/p/2975c25e4d71
 * @example
 * add(1)(2)(3) => 6
 * add(1, 2)(3) => 6
 * add(1)(2)(3)(4)(5) => 15
 */

function add() {
  var args = Array.prototype.slice.call(arguments);

  var adder = function () {
    args.push(...arguments);
    return adder;
  }

  adder.toString = function () {
    return args.reduce((result, item) => {
      return result + item;
    })
  }
  
  return adder;
}

console.log(add(1)(2)(3).toString());
console.log(add(1, 2)(3).toString());
console.log(add(1)(2)(3)(4)(5).toString());