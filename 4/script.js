const productContainer = document.getElementById('product-container');

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
  productCard.appendChild(addToCartButton);

  return productCard;
}
