// Update current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Handle 'Add to Cart' buttons
const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Produit ajouté au panier ! (fonctionnalité fictive)");
  });
});
