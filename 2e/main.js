let score = 81;
const result = score >= 50 ? "Godkänt" : "Underkänt";
console.log(result);


const product = {
    name: "Stab Me Now (bok)",
    price: 299,
    inStock: true
}

function createProductCard(product) {
    return `
    <div class="productCard${product.inStock ? '' : '-outOfStock'}">
    <h2>${product.name}</h2>
    <p>Pris: ${product.price} kr</p>
    <p>
    ${product.inStock ? 'I lager' : 'Tillfälligt slut'}
    </p>
    </div>
`;
}

document.body.innerHTML += createProductCard(product);



const divToggle = document.getElementById("showDiv");
const showBtn = document.getElementById("showMore");
let isVisible = false;
showBtn.addEventListener("click", function () {
    isVisible = !isVisible;
    divToggle.style.display = isVisible ? "block" : "none";
    showBtn.textContent = isVisible ? "Visa mindre" : "Visa mer";
});