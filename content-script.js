let numberOfProjects
const parentDiv = document.querySelector('main > .Spacer__Wrapper-sc-1qmp1cv-0')
const countDiv = document.createElement('div')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function loadCount() {
  sleep(1000).then(() => {
    numberOfProjects = document.querySelectorAll('[class^="Card__"]').length - 1
    countDiv.classList.add('count')
    countDiv.innerHTML = `${numberOfProjects} challenges available`
    parentDiv.prepend(countDiv)
  })
}

loadCount()

// if (window.location.href === 'https://www.frontendmentor.io/challenges') {
//   loadCount()
// }

const config = { attributes: true, childList: true, subtree: true }
const targetNode = document.querySelector('ul.Grid__Container-sc-1rvq2bf-0')

const observer = new MutationObserver((mutationList, observer) => {
  mutationList.forEach(mutation => {
    if (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0) {
      // console.log('passou por aqui')
      numberOfProjects =
        document.querySelectorAll('[class^="Card__"]').length - 1
      countDiv.innerHTML = `${numberOfProjects} challenges available`
    }
  })
})

observer.observe(targetNode, config)
