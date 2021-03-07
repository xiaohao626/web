/**
 * 构造函数继承
 */

function Parent() {
  this.subs = ['Parent'];
}
Parent.prototype.getSubs = function () {
  return this.subs;
}

function Child() {
  Parent.call(this);
}

var child = new Child();
console.log('child:', child, child.getSubs());

// 继承不到父类原型上的属性和方法
var parent = new Parent();
console.log('parent:', parent.getSubs())