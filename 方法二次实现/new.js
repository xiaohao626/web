/**
 * 自己实现一个new
 * 思路：
 * 1. 创建一个空对象
 * 2. 将构造函数中的属性在空对象中复制一份
 * 3. 绑定该对象的__proto__为构造函数的prototype
 * 4. 返回该对象(1中的空对象)
 */

function personalNew() {
  const obj = {};
  const con = Array.prototype.shift.call(arguments);

  obj.__proto__ = con.prototype;
  con.apply(obj, arguments);

  return obj;
}

function Parent(name, age) {
  this.name = name;
  this.age = age
}

const p = personalNew(Parent, 'parent', 22);
console.log('p:', p);

const pp = new Parent('parent2', 23);
console.log('pp:', pp);