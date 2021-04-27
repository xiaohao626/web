console.log('1');

async function async1() {
  console.log('2');
  await delay(1500);
  console.log('3');
}

async1();

Promise.resolve().then(() => {
  console.log('4');
})

setTimeout(() => {
  console.log('5')
}, 1000)

console.log('6');

function delay(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  })
}


// 1 2 6 4 5 3