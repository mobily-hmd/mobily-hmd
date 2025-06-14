document.addEventListener('DOMContentLoaded', () => {
  // Update the year in the footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Show alert when product is added to cart
  const buttons = document.querySelectorAll('.add-to-cart');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert("🛒 Product added to cart!");
    });
  });
});
