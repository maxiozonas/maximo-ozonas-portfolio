// Custom cursor effect
document.addEventListener('DOMContentLoaded', () => {
  // Create and add cursor effect
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);
  
  const cursorDot = document.createElement('div');
  cursorDot.classList.add('cursor-dot');
  document.body.appendChild(cursorDot);
  
  const moveCursor = (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;
    
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
  };
  
  window.addEventListener('mousemove', moveCursor);
  
  // Track hover states for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-grow');
      cursorDot.classList.add('cursor-hide');
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-grow');
      cursorDot.classList.remove('cursor-hide');
    });
  });
  
  // Implement smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (!targetId) return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});
