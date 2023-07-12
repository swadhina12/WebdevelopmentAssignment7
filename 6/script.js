const productContainer = document.getElementById('product-container');
const cartModal = document.getElementById('cart-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCloseBtn = document.getElementsByClassName('close')[0];
const cartItems = [];

// Fetch product data from the API
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    displayProducts(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });

// Display the products in the UI
function displayProducts(products) {
  products.forEach(product => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
  });
}

// Create a product card dynamically
function createProductCard(product) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.title;
  productCard.appendChild(image);

  const title = document.createElement('h3');
  title.textContent = product.title;
  productCard.appendChild(title);

  const category = document.createElement('p');
  category.textContent = product.category;
  productCard.appendChild(category);

  const price = document.createElement('p');
  price.classList.add('price');
  price.textContent = `$${product.price}`;
  productCard.appendChild(price);

  const addToCartButton = document.createElement('button');
  addToCartButton.textContent = 'Add to Cart';
  addToCartButton.addEventListener('click', () => addToCart(product));
  productCard.appendChild(addToCartButton);

  // Add click event listener to redirect to single product page
  productCard.addEventListener('click', () => showSingleProduct(product));

  return productCard;
}

// Add a product to the cart
function addToCart(product) {
  const existingItem = cartItems.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    };
    cartItems.push(cartItem);
  }

  showCartModal();
  displayCartItems();
}

// Show the cart modal
function showCartModal() {
  cartModal.style.display = 'block';
}

// Hide the cart modal
function hideCartModal() {
  cartModal.style.display = 'none';
}

// Display the cart items in the UI
function displayCartItems() {
  cartItemsContainer.innerHTML = '';
  let totalPrice = 0;

  cartItems.forEach(item => {
    const cartItem = createCartItem(item);
    cartItemsContainer.appendChild(cartItem);
    totalPrice += item.price * item.quantity;
  });

  cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Create a cart item dynamically
function createCartItem(item) {
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');

  const image = document.createElement('img');
  image.src = item.image;
  image.alt = item.title;
  cartItem.appendChild(image);

  const title = document.createElement('h3');
  title.textContent = item.title;
  cartItem.appendChild(title);

  const quantity = document.createElement('p');
  quantity.classList.add('quantity');
  quantity.textContent = `Quantity: ${item.quantity}`;
  cartItem.appendChild(quantity);

  const price = document.createElement('p');
  price.classList.add('price');
  price.textContent = `$${item.price.toFixed(2)}`;
  cartItem.appendChild(price);

  return cartItem;
}

// Event listener for closing the cart modal
cartCloseBtn.addEventListener('click', hideCartModal);

// Function to show single product page
function showSingleProduct(product) {
  // Save the product data to localStorage
  localStorage.setItem('product', JSON.stringify(product));

  // Redirect to single product page
  window.location.href = 'single-product.html';
}
