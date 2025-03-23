document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Wireless Headphones", price: 2500, category: "Electronics", image: "./src/assets/images/headphone.jpg" },
        { id: 2, name: "Smart Watch", price: 3500, category: "Electronics", image: "./src/assets/images/watch.jpg" },
        { id: 3, name: "Sports Shoes", price: 2800, category: "Fashion", image: "./src/assets/images/Shoes.jpg" },
        { id: 4, name: "Casual T-Shirt", price: 1200, category: "Fashion", image: "./src/assets/images/Shirt.jpg" },
        { id: 5, name: "Coffee Mug", price: 600, category: "Home", image: "./src/assets/images/Mug.jpg" },
        { id: 6, name: "Desk Lamp", price: 1500, category: "Home", image: "./src/assets/images/Lamp.jpg" }
      ];
      
  
    const productList = document.getElementById("product-list");
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const categoryFilter = document.getElementById("category-filter");
  
    let cart = [];
  
    const renderProducts = (data) => {
      productList.innerHTML = "";
      data.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition";
  
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover">
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800">${product.name}</h3>
            <p class="text-sm text-gray-600">Category: ${product.category}</p>
            <p class="text-sm text-green-700 font-bold mb-2">PKR ${product.price}</p>
            <button data-id="${product.id}" class="add-to-cart bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded transition">Add to Cart</button>
          </div>
        `;
        productList.appendChild(card);
      });
  
      document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = parseInt(btn.getAttribute("data-id"));
          addToCart(id);
        });
      });
    };
  
    const addToCart = (id) => {
      const product = products.find(p => p.id === id);
      cart.push(product);
      updateCart();
    };
  
    const updateCart = () => {
      cartList.innerHTML = "";
      let total = 0;
  
      cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - PKR ${item.price}`;
        cartList.appendChild(li);
        total += item.price;
      });
  
      cartTotal.textContent = `PKR ${total}`;
    };
  
    const filterProducts = () => {
      const selected = categoryFilter.value;
      const filtered = selected === "All" ? products : products.filter(p => p.category === selected);
      renderProducts(filtered);
    };
  
    renderProducts(products);
    categoryFilter.addEventListener("change", filterProducts);
  });
  