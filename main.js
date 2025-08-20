import products from "./utils/products.js";
function handleAddToCartClick () {
    const addtoCartMsg = document.querySelector(".add-to-cart-msg");
    console.log(addtoCartMsg);
    addtoCartMsg.style.opacity = 1;
}

console.log(products);

const productsDiv = document.getElementsByClassName("products")[0];

function createDiv() {
    return document.createElement("div");
}

function createOptions () {
    let options = [];
    for (let i = 1; i <= 10; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        options.push(option);
    }
    return options;
}

// const addtoCartMsg = document.querySelector(".add-to-cart-msg");
// console.log(addtoCartMsg);


function createProduct (product, i) {

    const {image, name} = product; 

    // Product Div
    const productDiv = createDiv();
    productDiv.setAttribute("class", "product");
    productDiv.classList.add(`product-${i+1}`);

    // Product-Image-Div
    const productImageDiv = createDiv();
    const productImage = document.createElement("img");
    productImage.src = image;
    productImageDiv.className = "product-image";
    productImageDiv.appendChild(productImage);


    // Product-Description - Div
    const productDescriptionDiv = createDiv();
    productDescriptionDiv.className = "product-description";

    // product-details - Div
    const productDetailsDiv =  createDiv();
    productDetailsDiv.className = "product-details";

    const productPara = document.createElement("p");
    productPara.textContent = name;
    productDetailsDiv.appendChild(productPara);


    // Rating - Div
    const ratingDiv = createDiv();
    ratingDiv.className = "rating";

    const ratingImg = document.createElement("img");
    const ratingPara = document.createElement("p");

    ratingDiv.append(ratingImg, ratingPara);

    // Price - Div
    const priceDiv = createDiv();
    priceDiv.className = "price";
    const pricePara = document.createElement("p");
    priceDiv.appendChild(pricePara);

    // Quantity-Menu - Div
    const quantityMenuDiv = createDiv();
    quantityMenuDiv.className = "quantity-menu";

    const quantitySelector = document.createElement("select");
    quantitySelector.className = "quantity-selector";

    const options = createOptions();
    quantitySelector.append(...options);

    quantityMenuDiv.appendChild(quantitySelector);

    // Add-To-Cart-Msg-Div
    const addToCartMsgDiv = createDiv();
    addToCartMsgDiv.className = "add-to-cart-msg";

    const addToCartMsgImg = document.createElement("img");
    const addToCartMsgPara = document.createElement("p");

    addToCartMsgDiv.append(addToCartMsgImg, addToCartMsgPara);

    // Add-to-Cart - Div
    const addToCartDiv = createDiv();
    addToCartDiv.className = "add-to-cart";

    const addToCartButton = document.createElement("button");
    addToCartButton.innerText = "Add To Cart"
    addToCartButton.className = "add-to-cart-btn";
    addToCartButton.addEventListener('click', handleAddToCartClick);

    addToCartDiv.appendChild(addToCartButton);

    productDescriptionDiv.append(
        productDetailsDiv,
        ratingDiv,
        priceDiv,
        quantityMenuDiv,
        addToCartMsgDiv,
        addToCartDiv
    );

    productDiv.append(
        productImageDiv, 
        productDescriptionDiv
    );

    console.log("Created PRoduct");
    // Add the product to the Products Div
    return productDiv;    
}

products.forEach((product, index) => productsDiv.appendChild(createProduct(product, index)));


