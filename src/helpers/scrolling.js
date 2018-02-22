import scrollToElement from "scroll-to-element";

/**
 * Funkcja do przewijania do elementu
 * @param {string} selector - do ktorego przewijamy
 * @param {object} options - musi miec duration z długością animacji
 */
function scrollThere(selector, options = { duration: 1000 }) {
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
 * Funkcja obsługująca przewijanie scrollem
 * @param {string} breakpointSelector - powtarzajacy sie selector z nowymi stronami
 * @param {string} dataBreakpoint - unikalna data po ktorej rozpoznajemy selectory
 * @param {number} throttleTime - czas throttla
 */
function throttledOnScroll(
  breakpointSelector = ".op-page-breakpoint",
  dataBreakpoint = "data-breakpoint",
  throttleTime = 1600
) {
  window.addEventListener('wheel',
    function scrollLogic(e) {
      e.preventDefault()
      e.stopPropagation()
      if (!window.blocked) {
        window.blocked = true
        let scrollingDown = e.deltaY > 0 ? 1 : -1;
        let breakpointElements = document.querySelectorAll(breakpointSelector)
        let currentIndex = null;
        let indx = 0
        for (indx = 0; indx < breakpointElements.length; indx += 1) {
          if (breakpointElements[indx].getBoundingClientRect().top + 1 > 0) {
            currentIndex = indx
            break
          }
        }
        let nextElem = breakpointElements[indx + scrollingDown]
        if (nextElem) {
          let dataForScroll = nextElem.getAttribute(dataBreakpoint)
          scrollThere(`${breakpointSelector}[${dataBreakpoint}="${dataForScroll}"]`)
        }

        setTimeout((e) => { window.blocked = false }, throttleTime)
      }

    }

    , true)
}

function stopEverything(e) {
  e.preventDefault()
  e.stopPropagation()
  console.log("Stop")
}


export {
  scrollThere,
  throttledOnScroll,
  stopEverything
}


