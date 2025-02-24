let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Select all FAQ items
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const questionBtn = item.querySelector('.faq-question');
  
  questionBtn.addEventListener('click', () => {
    // If you want ONLY one item open at a time, uncomment the next lines:
    // faqItems.forEach(el => {
    //   if(el !== item) el.classList.remove('active');
    // });

    // Toggle the 'active' class on the clicked item
    item.classList.toggle('active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let hireBtn = document.querySelector("#hire-btn");
  let hireDropdown = document.querySelector("#hire-dropdown");

  hireBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    hireDropdown.style.display = hireDropdown.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    if (!hireBtn.contains(event.target) && !hireDropdown.contains(event.target)) {
      hireDropdown.style.display = "none";
    }
  });
});
