// async function async1() {
//   console.log('async1');
// }

// function start() {
//   console.log('start');
// }

Promise.resolve().then(() => {
  console.log('promise then');
})

function f() {
  return new Promise((resolve) => {
    resolve(10);
  })
}

async function f3() {
  let p = await f();
  console.log(p);
}

async1();
start();