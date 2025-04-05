document.addEventListener("DOMContentLoaded", function () {
    
  // ✅ Navbar Toggle
  let navbar = document.querySelector('.navbar');
  document.querySelector('#menu-bar').onclick = () => {
      navbar.classList.toggle('active');
  };
// Button Functionality for "Add to Cart"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const cakeName = e.target.dataset.name;
        const cakePrice = e.target.dataset.price;

        // Example action: Console log or update cart
        console.log(`Added ${cakeName} costing ₹${cakePrice} to the cart.`);
        alert(`Added ${cakeName} to your cart!`);
    });
});

  // ✅ Swiper for Best Sellers
  var bestSellersSwiper = new Swiper(".product-row", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      pagination: {
          el: ".product-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".product-button-next",
          prevEl: ".product-button-prev",
      },
      breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
      }
  });
  const productSwiper = new Swiper('.product-row', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.product-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.product-button-next',
        prevEl: '.product-button-prev',
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});


  // ✅ Swiper for Reviews
  var reviewSwiper = new Swiper(".review-row", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      pagination: {
          el: ".review-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".review-button-next",
          prevEl: ".review-button-prev",
      },
      breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
      }
  });

});
