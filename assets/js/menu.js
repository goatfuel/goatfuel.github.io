document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle')
  var navMenu = document.querySelector('.nav-menu')

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active')
      menuToggle.classList.toggle('active')
      document.body.classList.toggle('menu-open')
    })

    // Close menu when clicking on links
    var navLinks = document.querySelectorAll('.nav-link')
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function() {
        navMenu.classList.remove('active')
        menuToggle.classList.remove('active')
        document.body.classList.remove('menu-open')
      })
    }
  }

  // Smooth scrolling for anchor links
  // Handle both root-relative (/#section) and absolute paths (/section)
  var anchorLinks = document.querySelectorAll('a[href^="/#"], a[href="/"]')
  for (var j = 0; j < anchorLinks.length; j++) {
    anchorLinks[j].addEventListener('click', function(event) {
      var href = this.getAttribute('href')

      // If we're not on the homepage and the link is to a section on the homepage
      if (window.location.pathname !== '/' && href.startsWith('/#')) {
        event.preventDefault()
        window.location.href = href
        return
      }

      // If we're on the homepage and it's an anchor link
      if (window.location.pathname === '/' && href.startsWith('/#')) {
        event.preventDefault()
        var targetId = href.substring(2)
        var targetElement = document.getElementById(targetId)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          })
        }
      }
    })
  }
})
