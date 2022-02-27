const menuItems = document.querySelectorAll('nav li')
const navs = document.querySelectorAll('nav')

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(item => item.classList.remove('active'))
    item.classList.add('active')

    navs.forEach(nav => {
      if (!nav.querySelectorAll('.active').length) {
        nav.children[0].children[0].classList.add('active')
      }
    })
  })
})
