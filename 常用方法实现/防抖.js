/**
 * 防抖
 */

function debounce(fn, delay = 300) {
  var timer = null;

  return function() {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.call(this);
    }, delay);
  }
}