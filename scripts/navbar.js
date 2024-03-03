const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

const scrollNav = (event) => {
    if (document.body.dataset.nav === "true") {
      const navLinks = document.querySelectorAll(".nav-link");
      let avgX = 0;
  
      // Calculate the average position of all nav-link elements
      navLinks.forEach((navLink) => {
        const rect = navLink.getBoundingClientRect();
        const mouseX = event.clientX;
        const x = (mouseX - rect.left) / rect.width;
  
        avgX += x;
      });
  
      avgX /= navLinks.length;
  
      const xOffset = 20;
      const yOffset = 10;
  
      // Anchor the nav-links vertically by setting transformY to a fixed value
      const transformX = -xOffset + (1 - avgX) * (xOffset * 2);
      const transformY = 0; // Fixed value to anchor vertically
  
      document.getElementById("nav-links").style.transform = `translate(${transformX}px, ${transformY}px)`;
    }
  };
  