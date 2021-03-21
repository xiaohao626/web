/**
 * compose函数
 * 作用：
 * 组合函数，将函数串联起来执行。将多个函数组合起来，前一个函数的输出是另一个函数的输入参数
 * 参考：
 * https://www.hlwen.com/2020/11/30/265.html
 */

function compose(funcs) {
  var len = funcs.length;
  var index = len;

  while(index--) {
    if (typeof funcs[index] !== 'function') {
      throw new TypeError('Expected a function');
    }
  }

  return function (...args) {
    var index = 0;
    var result = len ? funcs[index].apply(this, args) : args[0];
    while(++index < len) {
      result = funcs[index].call(this, result);
    }
    return result;
  }
}

// 测试
function toUpperCase(str) {
  return str.toUpperCase();
}

function addHello(str) {
  return `hello ${str}`;
}

var c = compose([addHello, toUpperCase]);
var r = c('xiaohao');
console.log('r:', r);