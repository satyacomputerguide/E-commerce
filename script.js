// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);

// Product Data
/*const products = [
    { name: "Product 1", price: "$99", image: "product1.jpg" },
    // Add more products
];

// Generate Product Grid
const productGrid = document.querySelector('.product-grid');
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Add to Cart</button>
    `;
    productGrid.appendChild(productCard);
});*/

// JavaScript में प्रोडक्ट्स डेटा अपडेट करें
const products = [
    { 
        name: "Women Jacket", 
        price: "₹2,499",
        originalPrice: "₹4,999",
        image: "product_1.png",
        rating: 4.5,
        deal: "50% OFF"
    },
    { 
        name: "Women Top", 
        price: "₹1,799",
        originalPrice: "₹3,499",
        image: "product_2.png",
        rating: 4.2,
        deal: "Flash Sale"
    },
    { 
        name: "Women Top", 
        price: "₹1,299",
        originalPrice: "₹2,599",
        image: "product_3.png",
        rating: 4.8,
        deal: "Bestseller"
    },
    { 
        name: "Women Wear", 
        price: "₹999",
        originalPrice: "₹1,999",
        image: "product_4.png",
        rating: 4.6,
        deal: "50% OFF"
    },
    { 
        name: "Women Top", 
        price: "₹1,599",
        originalPrice: "₹2,999",
        image: "product_5.png",
        rating: 4.4,
        deal: "New Launch"
    },
    { 
        name: "Women Top", 
        price: "₹2,199",
        originalPrice: "₹4,399",
        image: "product_6.png",
        rating: 4.7,
        deal: "Trending"
    },
    { 
        name: "Women's T'shirt", 
        price: "₹1,999",
        originalPrice: "₹3,999",
        image: "product_7.png",
        rating: 4.3,
        deal: "Combo Offer"
    },
    { 
        name: "Women T'shirt", 
        price: "₹1,899",
        originalPrice: "₹3,799",
        image: "product_8.png",
        rating: 4.5,
        deal: "Kitchen Essential"
    },
    { 
        name: "Women Top", 
        price: "₹3,499",
        originalPrice: "₹6,999",
        image: "product_9.png",
        rating: 4.6,
        deal: "Mega Deal"
    }
];


const productGrid = document.querySelector('.product-grid');
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        ${product.deal ? `<div class="deal-badge">${product.deal}</div>` : ''}
        <img src="${product.image}" alt="${product.name}">
        <div class="rating">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 !== 0 ? '½' : ''} (${product.rating})</div>
        <h3>${product.name}</h3>
        <div class="price-container">
            ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ''}
            <span class="discounted-price">${product.price}</span>
        </div>
        <button>Add to Cart <i class="fas fa-shopping-cart"></i></button>
    `;
    productGrid.appendChild(productCard);
});

// Auth Handling
const authForm = document.getElementById('authForm');
const toggleAuth = document.getElementById('toggleAuth');

if(authForm) {
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle authentication
        window.location.href = 'index.html';
    });
}

// Responsive Navbar
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
// Smooth scroll to about section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
