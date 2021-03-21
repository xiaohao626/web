/**
 * 数组全排列
 */

var arr=[1,2,3];  //现实数组的全排列
 
function permute(input) {
    var permArr = [],
        usedChars = [];
    function main(input) {
      var i, ch;
      for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
          permArr.push(usedChars.slice());
        }
        main(input);
        input.splice(i, 0, ch);
        usedChars.pop();
      }
      return permArr
    }
    return main(input);
};

console.log(permute(arr))