// Header scroll effect and mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
  // Header scroll effect
  const header = document.querySelector('header');
  const scrollThreshold = 50;
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = {};
  
  // Collect all sections for active state tracking
  navLinks.forEach(link => {
    const sectionId = link.getAttribute('data-section');
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        sections[sectionId] = section;
      }
    }
  });

  const handleScroll = () => {
    // Header scroll effect
    if (window.scrollY > scrollThreshold) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
    
    // Active section detection
    const scrollPosition = window.scrollY + header.offsetHeight;
    
    // Find which section is currently in view
    for (const sectionId in sections) {
      const section = sections[sectionId];
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // Remove active class from all links
          navLinks.forEach(link => link.classList.remove('active'));
          
          // Add active class to current section link
          const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
          
          break;
        }
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  // Mobile menu functionality
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      // Toggle menu visibility with animation
      if (mobileMenu.classList.contains('hidden')) {
        // Show menu with animation
        mobileMenu.classList.remove('hidden');
        // Use setTimeout to ensure the transition happens after display change
        setTimeout(() => {
          mobileMenu.classList.add('menu-visible');
        }, 10);
      } else {
        // Hide menu with animation
        mobileMenu.classList.remove('menu-visible');
        // Wait for animation to complete before hiding
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 300); // Match this with your transition duration
      }
      
      // Toggle aria-expanded attribute
      menuButton.setAttribute('aria-expanded', 
        menuButton.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
      
      // Toggle menu icon between hamburger and X
      const menuIcon = menuButton.querySelector('svg');
      if (menuIcon) {
        menuIcon.classList.toggle('menu-open');
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menuButton.contains(e.target) && !mobileMenu.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close menu when clicking on a menu item
    const menuItems = mobileMenu.querySelectorAll('a');
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
