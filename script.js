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

// Sticky Header on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Simple Search Filter (future ready)
const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    document.querySelectorAll(".product-card").forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = title.includes(query) ? "block" : "none";
    });
  });
}
