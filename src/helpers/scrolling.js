import scrollToElement from "scroll-to-element";
import throttle from "lodash/throttle";

/**
 *
 * @param {*} selector
 * @param {*} options
 */
function scrollThere(selector, options = { duration: 1500 }) {
  return (
    new Promise(function (resolve, reject) {
      window.ownScroll = true;
      let newOptions = options;
      scrollToElement(selector, options);
      setTimeout(() => {
        window.ownScroll = false;
        resolve()
      }, options[duration] + 100);
    })
  )
}

function throttledOnScroll(newFunction, throttlingTime = 1000) {
  window.document.body.onscroll = throttle(function () {
    if (!window.ownScroll) {
      newFunction()
    }
  }, throttlingTime, { trailing: false });
}

exports = {
  scrollThere,
  throttledOnScroll
}
