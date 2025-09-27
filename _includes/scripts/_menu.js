<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle')
    const navMenu = document.querySelector('.nav-menu')

    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active')
        menuToggle.classList.toggle('active')
        document.body.classList.toggle('menu-open')
      });

      // Close menu when clicking on links
      const navLinks = document.querySelectorAll('.nav-link')
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          navMenu.classList.remove('active')
          menuToggle.classList.remove('active')
          document.body.classList.remove('menu-open')
        })
      })
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
      anchor.addEventListener('click', function(event) {
        event.preventDefault()
        const targetId = this.getAttribute('href').substring(2)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          })
        }
      })
    }
  })
</script>