/**
 * 组合继承
 * 优点：结合了原型链继承和构造函数的优点
 * 缺点：每次创建子类实例时都执行了两次构造函数
 */

function Parent() {
  this.subs = ['Parent'];
}
Parent.prototype.getSubs = function() {
  return this.subs;
}

function Child() {
  Parent.call(this);
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child = new Child();
console.log('child:', child);
console.log('child.__proto__:', child.__proto__);