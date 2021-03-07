/**
 * 原型链继承
 */

function Parent() {
    this.subs = ['Parent'];
}

function Child() {}
Child.prototype = new Parent();
Child.prototype.constructor = Child; // important

var child = new Child();
console.log('child:', child, child.subs);