/**
 * 字符串方法replace
 * 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 * @example
 * 'hello world'.replace('hello', 'hi');
 */

// 参数1为字符串，参数2为字符串
console.log('hello world'.replace('hello', 'hi'));

// 参数1为正则，参数2为字符串
console.log('hello world'.replace(/hello/, 'hi'));
console.log('hello world'.replace(/(hello)\s(world)/, '$2, $1'));

// 参数1为正则，参数2为函数
var reg1 = /([^\d]*)(\d*)([^\w]*)/;
var result1 = 'abc123%$&'.replace(reg1, function (match, p1, p2, p3) {
  return [p1, p2, p3].join('-');
})
console.log('reg1:', result1);