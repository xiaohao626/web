/**
 * 大数相加
 */

function bigAdd(a, b) {
  let maxLength = Math.max(a.length, b.length);
  let newA = a.padStart(maxLength, '0');
  let newB = b.padStart(maxLength, '0');

  let tempNum = 0; // 每次循环相加临时存储
  let carryNum = 0; // 进位
  let result = ''; // 相加结果

  for (let i = maxLength - 1; i >= 0; i--) {
    tempNum = parseInt(newA[i]) + parseInt(newB[i]) + carryNum;
    carryNum = Math.floor(tempNum / 10);
    result = tempNum % 10 + result;
  }

  if (carryNum) {
    result = carryNum + result;
  }

  return result;
}

console.log(bigAdd('22222222222222222222222222222222222222', '11111111111111111111111111111111'));