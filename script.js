
// availableProducts est l'ensemble des articles disponible à la vente
// Ils doivent être affichés dans la section, sous forme d'articles

// const img = document.querySelector("img")

const availableProducts = [
    {
        name: "Rolexx",
        image: {
            src: "montre1.png",
            alt: "A super Rolexx watch that's awesome and that you should buy"
        },
        price: 2999,
        number: 1
    },
    {
        name: "Patekk Filippe",
        image: {
            src: "montre2.png",
            alt: "A super Patekk Filippe watch that's awesome and that you should buy"
        },
        price: 2499,
        number: 1
    },
    {
        name: "Pas de Cartier",
        image: {
            src: "montre3.png",
            alt: "A super Pas de Cartier watch that's awesome and that you should buy"
        },
        price: 1499,
        number: 1
    },
    {
        name: "Alpha",
        image: {
            src: "montre4.png",
            alt: "A super Alpha watch that's awesome and that you should buy"
        },
        price: 1599,
        number: 1
    },
    {
        name: "Louis Biddon",
        image: {
            src: "montre5.png",
            alt: "A super Louis Biddon watch that's awesome and that you should buy"
        },
        price: 3999,
        number: 1
    },
    {
        name: "Vélux",
        image: {
            src: "montre6.png",
            alt: "A super Vélux watch that's awesome and that you should buy"
        },
        price: 9999,
        number: 1
    }
];

// Une fonction displayAvailableProducts() qui est appelée une fois au chargement de la page, qui remplit la section avec les différents articles dispo dans notre variable availableProducts .
// La méthode .push() des Array permet d’ajouter un élément à la fin du tableau.
const products = document.querySelector("div#products")

function displayAvailableProducts() {
    for (i = 0; i < availableProducts.length; i++) {
        const divWatches = document.createElement("div");
        divWatches.classList.add("watches");

        divWatches.innerHTML = `
        <img src="images/${availableProducts[i].image.src}" alt="${availableProducts[i].image.alt}">
        <span>${availableProducts[i].name}</span>
        <div>
            <p>${availableProducts[i].price} $</p>
            <button onclick="addProductToCart(${i})">Add to Cart</button>
        </div>`;
        products.append(divWatches)
    }
};



// cart est un tableau dynamique qui contient les éléments que l'on veut acheter
// L'ensemble de ces produits seront affiché dans le cart
let cart = [];

// addProductToCart() qui ajoute un article dans le tableau cart. ⚠️ Cette fonction ne touche pas du tout à l’affichage de votre page HTML, elle ne devrait faire que 2 lignes

function indexInCart(watch) {
    for (i = 0; i < cart.length; i++) {
        if (cart[i].name == watch.name) {
            return i
        }
    }
    return -1
}


function addProductToCart(avPIndex) {
    let watch = availableProducts[avPIndex];
    let index = indexInCart(watch);
    if (index != -1) {
        cart[index].number += 1;
    }
    else {
        cart.push(watch);
    }
    console.log(cart);
    displayCart();

}

function removeWatchFromCart(thisWatch) {
    cart[thisWatch].number = 1;
    cart.splice(thisWatch, 1)
    displayCart();
    //this code must stay
    console.log(cart);
}

displayAvailableProducts()


// displayCart() qui affiche le contenu du panier dans le aside (sous forme de liste).
const ulCart = document.querySelector(".grande ul");

function displayCart() {
    ulCart.innerHTML = ""
    for (i = 0; i < cart.length; i++) {
        let watchInCart = document.createElement("li");
        watchInCart.innerHTML = ` <div>
        <span><img src="images/${cart[i].image.src}" alt="${cart[i].image.alt}"> ${cart[i].name}</span>
    </div>
    <p>${cart[i].price} $</p>
    <span>
        <select name="number" id="number_select" onclick="()">
            <option value="">${cart[i].number}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </span>
    <div>
        <button class="btn" onclick="removeWatchFromCart(${i})">
            <img src="images/delete.png" alt="icone">
        </button>
    </div>`;
        ulCart.append(watchInCart);
    }
};