/**
 * 数组去重 
 */

var arr = [1, 3, '44', {}, {}, null, null, NaN, NaN, undefined, undefined];

// 方式一
// Array.prototype.uniq = function () {
//     return [...new Set(this)];
// }

// var _arr = arr.uniq();
// console.log('_arr:', _arr);

// 方式二
Array.prototype.uniq = function() {
    var arr = this;
    var _arr = [];
    var hasNaNFlag = false;

    for (var i=0,len=arr.length;i<len;i++) {
      if (_arr.indexOf(arr[i]) === -1) {
        if (arr[i] !== arr[i]) {
          if (!hasNaNFlag) _arr.push(NaN);
          hasNaNFlag = true;
        } else {
          _arr.push(arr[i]);
        }
        
      } 
    }

    return _arr;
}

var _arr = arr.uniq();
console.log('_arr:', _arr);