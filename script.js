document.addEventListener('DOMContentLoaded', () => {
  // Update footer year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Add to Cart button alert
  const buttons = document.querySelectorAll('.add-to-cart');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert("🛒 Product added to cart!");
    });
  });

  // Dynamically change hero image after 3 seconds
  const heroImage = document.getElementById('heroImage');
  if (heroImage) {
    setTimeout(() => {
      heroImage.src = 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80';
    }, 3000); // change after 3 seconds
  }
});
