const products = [
    {
      name: "gobi",
      price: 1000,
      type: "chocolate",
      image:
        "https://cdnp.cody.mn/spree/images/1652197/product/54-1.png",
    },
    
    {
      name: "damla",
      price: 2300,
      type: "Damla",
      image:
        "https://m.media-amazon.com/images/I/51Q7Rq3ehDL.jpg",
    },
    {
      name: "skittles",
      price: 550,
      type: "skittles",
      image:
        "https://www.skittles.com/sites/g/files/fnmzdf586/files/migrate-product-files/bam8afcev37jvz2mfpnk.png",
    },
    {
      name: "Alibaba",
      price: 3200,
      type: "alibaba",
      image:
        "https://sc04.alicdn.com/kf/H63eeab21e07445bf926cf6b5ad8414a2Y.jpg",
    },
    {
      name: "Loli pop",
      price: 2200,
      type: "Candy",
      image:
        "https://amandascookin.com/wp-content/uploads/2021/12/homemade-lollipops-RC-SQ-500x375.jpg",
    },
    {
      name: "Twix",
      price: 8200,
      type: "chocolate",
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/f9/Twix-Wrapper-Small.jpg",
    },
    {
      name: "хөөсөн чихэр",
      price: 1500,
      type: "chocolate",
      image:
        "https://cdn3.shoppy.mn/spree/images/1593052/large/4600680007946.png",
    },
    {
      name: "snickers",
      price: 2800,
      type: "chocolate",
      image:
        "https://m.media-amazon.com/images/I/41NT7YN956L.jpg",
    },

  ];
  
  function PrintProducts() {
    const productsContainer = document.getElementById("products");
    let newDiv = "";
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img class='productImage' src="${product.image}"
        <h3 class="title">${product.name}</h3>
        <p>${product.description}</p>
        <p id="price">${product.price}</p>
        <button onclick="AddItem('${product.name}')">add</button>
        <button onclick="MinusItem('${product.name}')">minus</button>
      `;
  
      newDiv += div.outerHTML;
    }
  
    productsContainer.innerHTML = newDiv;
  }
  
  window.onload = PrintProducts;
  
  const userbasket = [];
  
  function AddItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity += 1;
    } else {
      userbasket.push({ name: itemName, quantity: 1 });
    }
  
    Basket();
  }
  
  function MinusItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity -= 1;
  
      if (userbasket[itemIndex].quantity === 0) {
        userbasket.splice(itemIndex, 1);
      }
    }
  
    Basket();
  }
  
  function Purchase() {
    let total = 0;
    for (let i = 0; i < userbasket.length; i++) {
      const { name, quantity } = userbasket[i];
      const product = products.find((p) => p.name === name);
      if (product) {
        total += product.price * quantity;
      }
    }
  
    document.getElementById("total").innerHTML = total;
    Clear();
  }
  
  function Clear() {
    userbasket = [];
  }
  
  function Basket() {
    const basketDiv = document.getElementById("basket");
    const basketHtml = userbasket
      .map(
        ({ name, quantity }) => `
      <h1>${name} - ${quantity}</h1>
    `
      )
      .join("");
    basketDiv.innerHTML = basketHtml;
  }