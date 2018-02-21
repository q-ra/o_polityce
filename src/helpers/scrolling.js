import scrollToElement from "scroll-to-element";
import throttle from "lodash/throttle";

/**
 * Funkcja do przewijania do elementu
 * @param {string} selector - do ktorego przewijamy
 * @param {object} options - musi miec duration z długością animacji
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
      }, options['duration'] + 100);
    })
  )
}

/**
 * Wrapper funkcji wywolywanej przy scrollowaniu (uzywaniu rolki)
 * @param {function} newFunction - funkcja ktora bedziemy wywolywac przy scrollowaniu
 * @param {number} throttlingTime - czas throttlowania
 */
function throttledOnScroll(newFunction, throttlingTime = 3000) {
  window.addEventListener('wheel', throttle(function (e) {
    // if (!window.ownScroll) {
      newFunction(e)
    // }
  }, throttlingTime, { trailing: false })
  ), true
}

/**
 * Funkcja sprawdza czy obecna strona jest renderowana
 * @param {Element} element
 * @param {String} classOfBreakpoints
 * Pierwszy elelement(jedyny) ktory jest na ekranie to powinien byc
 */
function isPageVisible(pageElement, classOfBreakpoints) {
  let breakpointElements = document.querySelectorAll(classOfBreakpoints)
  for (let breakPoint of breakpointElements) {
    if (breakPoint.getBoundingClientRect().top + 1) {
      (breakpoint == pageElement) ? true : false
    }
  }

}

function scrollLogic(e) {
  e.preventDefault()
  e.stopPropagation()
  console.log("SKROLL")
  let scrollingDown = e.deltaY > 0 ? 1 : -1;
  let breakpointElements = document.querySelectorAll('.op-page-breakpoint')
  let currentIndex = null;
  let indx = 0
  for (indx = 0; indx < breakpointElements.length; indx += 1) {
    if (breakpointElements[indx].getBoundingClientRect().top + 1 > 0) {
      currentIndex = indx
      break
    }
  }
  let dataForScroll = breakpointElements[indx + scrollingDown].getAttribute("data-breakpoint")
  scrollThere(`.op-page-breakpoint[data-breakpoint="${dataForScroll}"]`)


}

export {
  scrollThere,
  scrollLogic,
  throttledOnScroll
}


