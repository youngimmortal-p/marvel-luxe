// PRODUCTS

const products = [

  {
    id:1,
    name:"Can Wipes",
    price:2000,
    image:"images/can wipes.jpg"
  },

  {
    id:2,
    name:"Claw clip",
    price:2000,
    image:"images/Claw clip.jpg"
  },

  {
    id:3,
    name:"Face Mask Sheet",
    price:500,
    image:"images/Face mask sheet.jpg"
  },

  {
    id:4,
    name:"Glove Sponge",
    price:1000,
    image:"images/Glove sponge.jpg"
  },

  {
    id:5,
    name:"Hair Clip",
    price:4000,
    image:"images/Hair clip.jpg"
  },

  {
    id:6,
    name:"Hand Cream",
    price:1500,
    image:"images/Hand cream.jpg"
  },
    {
    id:7,
    name:"Id Card Holder",
    price:4000,
    image:"images/Id card holder.jpg"
  },

  {
    id:8,
    name:"Lip Mask",
    price:500,
    image:"images/Lip mask.jpg"
  },

  {
    id:9,
    name:"Menstural Belt",
    price:15000,
    image:"images/Menstural belt.jpg"
  },

  {
    id:10,
    name:"Mini Basket",
    price:2000,
    image:"images/Mini basket.jpg"
  },

  {
    id:11,
    name:"Mini Fan",
    price:6000,
    image:"images/Mini fan.jpg"
  },

  {
    id:12,
    name:"Mini Purse",
    price:3000,
    image:"images/mini purse.jpg"
  },
    {
    id:13,
    name:"Mouth Wash",
    price:300,
    image:"images/Mouth wash.jpg"
  },

  {
    id:14,
    name:"Mud Mask",
    price:500,
    image:"images/Mud mask.jpg"
  },

  {
    id:15,
    name:"Perfume Atomizer",
    image:"images/Perfume atomizer.jpg",
    price:1500,
  },

  {
    id:16,
    name:"Phone Suction Holder",
    price:1500,
    image:"images/Phone suction holder.jpg"
  },

  {
    id:17,
    name:"Pimple Patch",
    price:2000,
    image:"images/Pimple patch.jpg"
  },

  {
    id:18,
    name:"Scrunchies",
    price:500,
    image:"images/Scrunchies.jpg"
  },
    {
    id:19,
    name:"Selfie Stick",
    price:6000,
    image:"images/Selfie stick.jpg"
  },

  {
    id:20,
    name:"Tongue Scraper",
    price:800,
    image:"images/Tongue scraper.jpg"
  },

  {
    id:21,
    name:"Tooth Brush Case",
    price:2000,
    image:"images/Tooth brush case.jpg"
  },

  {
    id:22,
    name:"Undereye Patch",
    price:500,
    image:"images/Undereye patch.jpg"
  }
];

// CART

let cart = [];

// ELEMENTS

const productsContainer = document.getElementById("products-container");

const cartItems = document.getElementById("cart-items");

const mobileCartItems = document.getElementById("mobile-cart-items");

const cartCount = document.getElementById("cart-count");

const totalPrice = document.getElementById("total");

const mobileTotal = document.getElementById("mobile-total");

const mobileCartOverlay = document.getElementById("mobile-cart-overlay");

const closeCart = document.getElementById("close-cart");

const cartIcon = document.querySelector(".cart-icon");

// SHOW PRODUCTS

function displayProducts(){

  products.forEach(product => {

    productsContainer.innerHTML += `

      <div class="product-card">

        <img src="${product.image}" alt="${product.name}">

        <div class="product-content">

          <h3>${product.name}</h3>

          <p class="price">
            ₦${product.price.toLocaleString()}
          </p>

          <button onclick="addToCart(${product.id})">
            Add to Cart
          </button>

        </div>

      </div>

    `;

  });

}

// ADD TO CART

function addToCart(id){

  const product = products.find(item => item.id === id);

  const existingProduct = cart.find(item => item.id === id);

  if(existingProduct){

    existingProduct.quantity += 1;

  }else{

    cart.push({
      ...product,
      quantity:1
    });

  }

  updateCart();

}

// UPDATE CART

function updateCart(){

  cartItems.innerHTML = "";

  mobileCartItems.innerHTML = "";

  let total = 0;

  let count = 0;

  if(cart.length === 0){

    cartItems.innerHTML = `
      <p class="empty">No items added.</p>
    `;

    mobileCartItems.innerHTML = `
      <p class="empty">No items added.</p>
    `;

  }

  cart.forEach(item => {

    total += item.price * item.quantity;

    count += item.quantity;

    const cartHTML = `

      <div class="cart-item">

        <div>
          <strong>${item.name}</strong>

          <p>
            ₦${item.price.toLocaleString()}
            x ${item.quantity}
          </p>
        </div>

        <button onclick="removeItem(${item.id})">
          X
        </button>

      </div>

    `;

    cartItems.innerHTML += cartHTML;

    mobileCartItems.innerHTML += cartHTML;

  });

  cartCount.innerText = count;

  totalPrice.innerText = total.toLocaleString();

  mobileTotal.innerText = total.toLocaleString();

}

// REMOVE ITEM

function removeItem(id){

  cart = cart.filter(item => item.id !== id);

  updateCart();

}

// WHATSAPP CHECKOUT

function checkoutWhatsApp(){

  if(cart.length === 0){

    alert("Your cart is empty.");

    return;

  }

  let message = `Hello MARVEL LUXE,%0A%0AI want to order:%0A`;

  let total = 0;

  cart.forEach((item,index)=>{

    message += `
%0A${index + 1}. ${item.name}
Quantity: ${item.quantity}
Price: ₦${item.price.toLocaleString()}
`;

    total += item.price * item.quantity;

  });

  message += `%0A%0ATotal: ₦${total.toLocaleString()}`;

  // CHANGE TO YOUR NUMBER
  const phoneNumber = "23470405554227";

  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(url,"_blank");

}

// OPEN MOBILE CART

cartIcon.addEventListener("click", ()=>{

  if(window.innerWidth <= 900){

    mobileCartOverlay.classList.add("active");

  }

});

// CLOSE MOBILE CART

closeCart.addEventListener("click", ()=>{

  mobileCartOverlay.classList.remove("active");

});

// CLOSE WHEN CLICKING OUTSIDE

mobileCartOverlay.addEventListener("click",(e)=>{

  if(e.target === mobileCartOverlay){

    mobileCartOverlay.classList.remove("active");

  }

});

// INIT

displayProducts();