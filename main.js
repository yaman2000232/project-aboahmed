let product = [
    {
        id: 1,
        name: 'Nike Mercurial Football Shoes',
        price: 150,
        image: 'image/nike-zoom-2.jpg',
        color: 'Red/Black',
        description: 'Lightweight and flexible shoes suitable for fast players.',
        stock: 5,
        category: 'Shoes',
        quantity: 1
    },
    {
        id: 2,
        name: 'National Team Football Jersey',
        price: 45,
        image: 'image/syria-3.jpg',
        color: 'Blue/White',
        description: 'Official national team jersey, lightweight and comfortable.',
        stock: 15,
        category: 'Clothing',
        quantity: 1
    },
    {
        id: 3,
        name: 'Adidas Predator Goalkeeper Gloves',
        price: 60,
        image: 'image/gk-2.jpg',
        color: 'Yellow/Black',
        description: 'High-grip gloves for secure ball handling.',
        stock: 8,
        category: 'Accessories',
        quantity: 1
    },
    {
        id: 4,
        name: 'Adidas Finale Football',
        price: 35,
        image: 'image/ucl-bool-3.jpg',
        color: 'White/Black',
        description: 'Official quality match and training football.',
        stock: 20,
        category: 'Balls',
        quantity: 1
    },
    {
        id: 5,
        name: 'Nike Dri-FIT Training Pants',
        price: 30,
        image: 'image/pants-2.jpg',
        color: 'Black',
        description: 'Lightweight pants suitable for football practice and daily training.',
        stock: 12,
        category: 'Clothing',
        quantity: 1
    },
    {
        id: 6,
        name: 'Adidas Tiro Training Jacket',
        price: 55,
        image: 'image/jack.jpg',
        color: 'Blue/White',
        description: 'Flexible training jacket suitable for all weather conditions.',
        stock: 10,
        category: 'Clothing',
        quantity: 1
    },
    {
        id: 7,
        name: 'Football Training Cones (10 pcs)',
        price: 20,
        image: 'image/training-2.jpg',
        color: 'Yellow/Red',
        description: 'Set of cones to improve skills and reaction speed.',
        stock: 30,
        category: 'Accessories',
        quantity: 1
    },
    {
        id: 8,
        name: 'Small Skill Training Ball',
        price: 15,
        image: 'image/small-2.jpg',
        color: 'Green',
        description: 'Light ball for ball control and passing drills.',
        stock: 0,
        category: 'Balls',
        quantity: 1
    }
];

let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
product.forEach(myProduct);


function myProduct(pdr) {
    const productList = document.getElementById('Product');
    const col = document.createElement('div');
    col.className = 'col ms-3';
    const card = document.createElement('div');
    card.className = 'card h-100 shadow-lg';
    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = pdr.image;
    img.alt = pdr.name;
    const quantityWrapper = document.createElement('div');
    quantityWrapper.className = 'd-flex justify-content-center align-items-center gap-2 my-3';
    const minusBtn = document.createElement('button');
    minusBtn.className = 'btn btn-outline-secondary btn-sm';
    minusBtn.textContent = '−';
    const quantityDisplay = document.createElement('span');
    quantityDisplay.className = 'px-3 fw-bold';
    quantityDisplay.textContent = '1';
    const plusBtn = document.createElement('button');
    plusBtn.className = 'btn btn-outline-secondary btn-sm';
    plusBtn.textContent = '+';
    quantityWrapper.append(minusBtn, quantityDisplay, plusBtn);


    function quantityFun() {
        plusBtn.addEventListener('click', function () {
            let current = parseInt(quantityDisplay.textContent);
            quantityDisplay.textContent = current + 1;
        });
        minusBtn.addEventListener('click', function () {
            let current = parseInt(quantityDisplay.textContent);
            if (current > 1) {
                quantityDisplay.textContent = current - 1;
            }
        });
    }

    quantityFun();

    const body = document.createElement('div');
    body.className = 'card-body d-flex flex-column';
    const content = document.createElement('div');
    content.className = 'flex-grow-1';
    const title = document.createElement('h6');
    title.className = 'card-title mb-2 name-title';
    title.textContent = pdr.name;
    const price = document.createElement('p');
    price.className = 'card-text fw-bold mb-1';
    price.textContent = `Price: $${pdr.price}`;
    const color = document.createElement('p');
    color.className = 'card-text text-muted mb-2';
    color.textContent = `Color: ${pdr.color}`;
    const desc = document.createElement('p');
    desc.className = 'card-text mb-3';
    desc.textContent = pdr.description;
    const btn = document.createElement('button');
    btn.className = 'btn btn-success w-100 mt-auto';
    btn.textContent = 'Add to Cart';

    card.style.cursor = 'pointer';
    img.addEventListener('click', function () {
        displayProductDetails(pdr);
    });

    btn.addEventListener('click', function () {
        let quantity = parseInt(quantityDisplay.textContent);
        let existing = cartArray.find(item => item.id === pdr.id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            let productObject = {
                id: pdr.id,
                name: pdr.name,
                price: pdr.price,
                image: pdr.image,
                quantity: quantity
            };
            cartArray.push(productObject);
        }
        message();
        updateCartUI();
    });

    content.append(title, price, color, desc);
    body.append(content, btn);

















    var iconWrapper = document.createElement('div');
    iconWrapper.className = 'position-absolute top-0 end-0 p-2 d-flex gap-2';

    var wishlistBtn = document.createElement('button');
    wishlistBtn.className = 'btn btn-sm p-0 wishlist-btn';
    wishlistBtn.style.backgroundColor = '#000';
    wishlistBtn.style.borderRadius = '';
    wishlistBtn.style.width = '35px';
    wishlistBtn.style.height = '32px';
    wishlistBtn.style.display = 'flex';
    wishlistBtn.style.alignItems = 'center';
    wishlistBtn.style.justifyContent = 'center';
    wishlistBtn.innerHTML = `
  <svg class="wishlist-icon" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
         2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09 
         C13.09 3.81 14.76 3 16.5 3 
         19.58 3 22 5.42 22 8.5 
         c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="white"
    />
  </svg>
`;



    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm p-0 edit-btn';
    editBtn.style.backgroundColor = '#000';
    editBtn.style.borderRadius = '50%';
    editBtn.style.width = '32px';
    editBtn.style.height = '32px';
    editBtn.style.display = 'flex';
    editBtn.style.alignItems = 'center';
    editBtn.style.justifyContent = 'center';
    editBtn.innerHTML = `
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 
             7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 
             1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"/>
  </svg>
`;
    iconWrapper.append(wishlistBtn, editBtn);
    card.style.position = 'relative';
    card.appendChild(iconWrapper);

    wishlistBtn.addEventListener('click', function () {
        var existing = wishArray.find(item => item.id === pdr.id);

        if (!existing) {
            let productObject = {
                id: pdr.id,
                name: pdr.name,
                price: pdr.price,
                image: pdr.image,
            };
            wishArray.push(productObject);
            localStorage.setItem("wishlist", JSON.stringify(wishArray));
            addToWish();


            wishlistBtn.querySelector('path').setAttribute('fill', 'red');
            wishIcon.querySelector('path').setAttribute('fill', 'red');
        } else {
            wishArray = wishArray.filter(item => item.id !== pdr.id);
            localStorage.setItem("wishlist", JSON.stringify(wishArray));
            addToWish();

            wishlistBtn.querySelector('path').setAttribute('fill', 'white');
            wishIcon.querySelector('path').setAttribute('fill', 'white');
        }
    });




    card.append(img, quantityWrapper, body);
    col.append(card);
    productList.append(col);
}

function displayProductDetails(pdr) {
    const productDetailsContainer = document.getElementById('product-details-container');
    productDetailsContainer.style.display = 'block';

    setTimeout(() => {
        productDetailsContainer.classList.add('show');
    }, 50);

    document.getElementById("overlay").style.display = "block";

    productDetailsContainer.innerHTML = `
        <div class="row g-0 shadow-lg rounded">
            <div class="col-md-5 d-flex justify-content-center align-items-center p-3">
                <img src="${pdr.image}" class="img-fluid rounded" alt="${pdr.name}" style="max-height: 400px; object-fit: contain;">
            </div>
            <div class="col-md-7">
                <div class="card-body">
                    <h2 class="card-title fw-bold">${pdr.name}</h2>
                    <p class="card-text fs-5">
                        <strong>Price:</strong> $${pdr.price}
                    </p>
                    <p class="card-text">
                        <strong>Color:</strong> ${pdr.color}
                    </p>
                    <p class="card-text">
                        <strong>Category:</strong> ${pdr.category}
                    </p>
                    <p class="card-text">
                        <strong>Description:</strong> ${pdr.description}
                    </p>
                    <p class="card-text">
                        <strong>Available Stock:</strong> ${pdr.stock}
                    </p>
                    <button class="btn btn-success mt-3 w-100 mb-1 btn-add-details">Add to Cart</button>
                     <button class="btn btn-danger w-100 btn-remove-details">Close</button>
                </div>
            </div>
        </div>
    `;

    let addDetails = document.querySelector(".btn-add-details");
    addDetails.addEventListener('click', function () {
        if (pdr.stock === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Out of Stock',
                text: 'Sorry, this product is currently unavailable!',
                confirmButtonText: 'OK',
                confirmButtonColor: '#d33',
                background: '#fff',
                customClass: {
                    popup: 'custom-swal-popup',
                    title: 'custom-swal-title',
                    content: 'custom-swal-content'
                }
            });
            return;
        }

        let quantity = 1;
        let existing = cartArray.find(item => item.id === pdr.id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            let productObject = {
                id: pdr.id,
                name: pdr.name,
                price: pdr.price,
                image: pdr.image,
                quantity: quantity
            };

            cartArray.push(productObject);


        }
        message();
        updateCartUI();
    });




    let removeDetails = document.querySelector('.btn-remove-details');
    removeDetails.addEventListener('click', function () {
        productDetailsContainer.classList.remove('show');
        setTimeout(() => {
            productDetailsContainer.style.display = 'none';
            overlay.style.display = 'none';
        }, 400);
    });

    updateCartUI();
}
var overlay = document.getElementById('overlay');
overlay.addEventListener('click', function () {
    var productDetailsContainer = document.getElementById('product-details-container');

    productDetailsContainer.classList.remove('show');

    setTimeout(() => {
        productDetailsContainer.style.display = 'none';
        overlay.style.display = 'none';
    }, 400);
});


// product.forEach(myProduct);


var searchInput = document.getElementById('search-Input');
var searchCard = document.querySelectorAll('.card');

searchInput.addEventListener('input', function (event) {
    var searchValue = event.target.value.toLowerCase();
    searchCard.forEach(function (card) {
        var cardTitle = card.querySelector('.name-title');
        var cardPrice = card.querySelector('.text-muted.mb-2');
        var cardColor = card.querySelector('.fw-bold.mb-1');
        var cardProduct = cardTitle.textContent.toLowerCase() + cardPrice.textContent.toLowerCase() + cardColor.textContent.toLowerCase();

        if (cardProduct.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


let cartIcon = document.getElementById('cartIcon');
let cart = document.getElementById('cart');
let cartItemsContainer = document.getElementById('cart-items');
let cartCount = document.getElementById('cart-count');
let cartTotal = document.getElementById('cart-total');
let clearCartBtn = document.getElementById('clearCart');
let closeCartBtn = document.getElementById('closeCart');

cartIcon.addEventListener('click', () => cart.classList.toggle('hidden'));
closeCartBtn.addEventListener('click', () => cart.classList.add('hidden'));
clearCartBtn.addEventListener('click', () => {
    cartArray = [];
    updateCartUI();
});

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    var total = 0;
    cartArray.forEach(function (item, index) {
        var li = document.createElement('li');
        li.className = 'cart-item';
        var image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;
        image.style.width = '120px';
        image.style.verticalAlign = 'middle';
        var nameSpan = document.createElement('span');
        nameSpan.textContent = item.name;
        var quantitySpan = document.createElement('span');
        quantitySpan.textContent = `  ${item.quantity}`;
        var pBtn = document.createElement('button');
        pBtn.textContent = '+'
        pBtn.addEventListener('click', function () {
            item.quantity++;
            updateCartUI();
        })
        li.appendChild(pBtn);
        var mBtn = document.createElement('button')
        mBtn.textContent = '-'
        mBtn.addEventListener('click', function () {
            if (item.quantity > 1) {
                item.quantity--;
                updateCartUI();
            } else {
                cartArray.splice(index, 1);
                updateCartUI();
            }
        })
        li.appendChild(mBtn)
        var totalPriceSpan = document.createElement('span');
        totalPriceSpan.textContent = ` ($${item.price * item.quantity})`;
        var removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = '<i class="fas fa-trash-can"></i>';
        removeBtn.addEventListener('click', function () {
            var index = cartArray.findIndex(cartItem => cartItem.id === item.id);
            if (index > -1) {
                cartArray.splice(index, 1);
                updateCartUI();
            }
        });
        li.append(image, nameSpan, quantitySpan, totalPriceSpan, removeBtn);
        cartItemsContainer.appendChild(li);
        total += item.price * item.quantity;
    });

    if (!document.getElementById('buyBtn')) {
        var buyNow = document.createElement('button');
        buyNow.id = 'buyBtn';
        buyNow.textContent = 'Buy Now!';
        buyNow.style.marginTop = '10px';
        buyNow.style.padding = '10px';
        buyNow.style.backgroundColor = '#28a745';
        buyNow.style.color = 'white';
        buyNow.style.border = 'none';
        buyNow.style.cursor = 'pointer';

        buyNow.addEventListener('click', function () {
            if (cartArray.length === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Out of products',
                    text: 'Sorry, there are no available products for this item!',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#d33',
                    background: '#fff',
                    customClass: {
                        popup: 'custom-swal-popup',
                        title: 'custom-swal-title',
                        content: 'custom-swal-content'
                    }
                });
                return;
            }


            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Purchase completed!',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#fff',
                customClass: {
                    popup: 'custom-toast-popup',
                    title: 'custom-toast-title'
                }
            });

            cartArray = [];
            updateCartUI();
        });

        cart.appendChild(buyNow);
    }





    cartCount.textContent = cartArray.length;
    cartTotal.textContent = `$${total}`;
}






function message() {
    var msg = document.createElement('div');
    msg.className = 'message-class';
    msg.textContent = '✅ Product added to cart!';
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 2000);
}



var wishIcon = document.getElementById('wishlistIcon');
var wish = document.getElementById('wishlist-id');
var wishInput = document.getElementById('wishlist-input');
var wishItem = document.getElementById('wishlist-items');
var wishClear = document.getElementById('clearWishlist');
var wishClose = document.getElementById('closeWishlist');

let wishArray = JSON.parse(localStorage.getItem("wishlist")) || [];



wishIcon.addEventListener('click', function () {
    wish.classList.toggle('hidden');
})
wishClose.addEventListener('click', function () {
    wish.classList.add('hidden')
})
wishClear.addEventListener('click', function () {
    wishArray = [];
    addToWish();
})



function addToWish() {
    wishItem.innerHTML = ''
    wishArray.forEach(function (item) {

        let divWish = document.createElement('div');
        divWish.className = 'wishlist-product mb-2 text-secondary ';
        divWish.innerHTML += `
            <img src="${item.image}" width="50" height="50" />
            <span>${item.name} - $${item.price} ❤</span>
        `;
        wishItem.appendChild(divWish);
    });

}
// validation and add
var addBtn = document.getElementById('openFormBtn');
var addForm = document.getElementById('productForm');

addBtn.addEventListener('click', function () {
    document.getElementById('add-section').style.backgroundColor = '#d3d3d3';
    document.getElementById('add-section').style.padding = '50px'
    document.getElementById('add-section').style.marginBottom = '20px'


    addForm.classList.toggle('hidden')
})
addForm.addEventListener('submit', function (event) {
    event.preventDefault();

    document.querySelectorAll('.error-text').forEach(el => el.textContent = '');
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));


    document.getElementById('nameError').textContent = '';
    document.getElementById('priceError').textContent = '';
    document.getElementById('imageError').textContent = '';
    document.getElementById('colorError').textContent = '';
    document.getElementById('descriptionError').textContent = '';
    document.getElementById('stockError').textContent = '';
    document.getElementById('categoryError').textContent = '';

    if (document.getElementById('name').value.trim() === '') {
        document.getElementById('nameError').textContent = '*Product name is required.';
        document.getElementById('name').classList.add('input-error')
    }
    // if (name.length > 10) {
    //     nameError.textContent = '*Name must be 10 characters max.';
    //     document.getElementById('name').classList.add('input-error');
    // }

    if (document.getElementById('price').value.trim() === '') {
        document.getElementById('priceError').textContent = '*Price is required';
        document.getElementById('price').classList.add('input-error')


    }
    else {
        (Number(document.getElementById('price').value) <= 0)
        document.getElementById('priceError').textContent = '*Price must be a positive number.';
        document.getElementById('price').classList.add('input-error');
    }


    if (document.getElementById('image').value.trim() === '') {
        document.getElementById('imageError').textContent = '*Image URL is required.'
        document.getElementById('image').classList.add('input-error')

    }
    if (document.getElementById('color').value.trim() === '') {
        document.getElementById('colorError').textContent = '*Color is required.';
        document.getElementById('color').classList.add('input-error')

    }

    if (document.getElementById('description').value.trim() === '') {
        document.getElementById('descriptionError').textContent = '*Description is required.';
        document.getElementById('description').classList.add('input-error')

    }

    if (document.getElementById('stock').value.trim() === '') {
        document.getElementById('stockError').textContent = '*Stock quantity is required.';
        document.getElementById('stock').classList.add('input-error')

    }

    if (document.getElementById('category').value.trim() === '') {
        document.getElementById('categoryError').textContent = '*Category is required.';
        document.getElementById('category').classList.add('input-error')
        console.log('s');

    }

    var name = document.getElementById('name').value.trim();
    var price = document.getElementById('price').value.trim();
    var image = document.getElementById('image').value.trim();

    var color = document.getElementById('color').value.trim();
    var description = document.getElementById('description').value.trim();
    var stock = document.getElementById('stock').value.trim();
    var category = document.getElementById('category').value.trim();
    if (name && price && image && color && description && stock && category) {
        var newProduct = {
            id: product.length + 1,
            name: name,
            price: Number(price),
            image: image,
            color: color,
            description: description,
            stock: Number(stock),
            category: category,
            quantity: 1
        };
        product.push(newProduct);
        myProduct(newProduct);


        addForm.reset();
        addForm.classList.add('hidden');
    }




})
var startWrite = document.querySelectorAll('.form-input');

startWrite.forEach(input => {
    input.addEventListener('input', () => {
        var errorId = input.id + 'Error';

        var errorElement = document.getElementById(errorId);

        if (errorElement) {
            errorElement.textContent = '';
            console.log('hi' + errorId)
        }

        input.classList.remove('input-error');
    });

});

window.addEventListener('DOMContentLoaded', () => {
    var formations = {
        default: {
            GK: { label: 'GK', left: '10%', top: '50%' },
            LB: { label: 'LB', left: '23%', top: '20%' },
            LCB: { label: 'LCB', left: '20%', top: '35%' },
            RCB: { label: 'RCB', left: '20%', top: '65%' },
            RB: { label: 'RB', left: '23%', top: '80%' },
            CDM1: { label: 'CDM', left: '40%', top: '40%' },
            CDM2: { label: 'CDM', left: '40%', top: '60%' },
            LAM: { label: 'LAM', left: '55%', top: '30%' },
            CAM: { label: 'CAM', left: '60%', top: '50%' },
            RAM: { label: 'RAM', left: '55%', top: '70%' },
            ST: { label: 'ST', left: '85%', top: '50%' }
        },
        '352': {
            GK: { label: 'GK', left: '10%', top: '50%' },
            LB: { label: 'CB', left: '20%', top: '30%' },
            LCB: { label: 'CB', left: '20%', top: '50%' },
            RCB: { label: 'CB', left: '20%', top: '70%' },
            RB: { label: '', left: '0%', top: '0%' },
            CDM1: { label: 'CM', left: '40%', top: '30%' },
            CDM2: { label: 'CM', left: '40%', top: '70%' },
            LAM: { label: 'LM', left: '55%', top: '25%' },
            CAM: { label: 'CAM', left: '60%', top: '50%' },
            RAM: { label: 'RM', left: '55%', top: '75%' },
            ST: { label: 'ST', left: '85%', top: '40%' }
        },
        '433': {
            GK: { label: 'GK', left: '10%', top: '50%' },
            LB: { label: 'LB', left: '23%', top: '20%' },
            LCB: { label: 'LCB', left: '20%', top: '35%' },
            RCB: { label: 'RCB', left: '20%', top: '65%' },
            RB: { label: 'RB', left: '23%', top: '80%' },
            CDM1: { label: 'CDM', left: '40%', top: '35%' },
            CDM2: { label: 'CDM', left: '40%', top: '65%' },
            CAM: { label: 'CAM', left: '45%', top: '50%' },
            LAM: { label: 'LAM', left: '60%', top: '30%' },
            RAM: { label: 'RAM', left: '60%', top: '70%' },
            ST: { label: 'ST', left: '85%', top: '50%' }
        },
        '532': {
            GK: { label: 'GK', left: '10%', top: '50%' },
            LB: { label: 'LB', left: '23%', top: '20%' },
            LCB: { label: 'LCB', left: '20%', top: '35%' },
            RCB: { label: 'RCB', left: '20%', top: '65%' },
            RB: { label: 'RB', left: '23%', top: '80%' },
            CDM1: { label: 'CDM', left: '20%', top: '35%' },
            CDM2: { label: 'CDM', left: '40%', top: '65%' },
            CAM: { label: 'CAM', left: '45%', top: '50%' },
            LAM: { label: 'LAM', left: '60%', top: '30%' },
            RAM: { label: 'RAM', left: '60%', top: '70%' },
            ST: { label: 'ST', left: '85%', top: '50%' }
        }
    };

    const productInfo = {
        GK: {
            images: ['./image/goalke.jpg', './image/gk-position.webp', './image/gk-2.jpg'],
            description: 'Professional goalkeeper gloves with high grip and stability.',
            price: '$120'
        },
        LB: {
            images: ['./image/lb1.jpg', './image/lb2.jpg', './image/lb3.jpg'],
            description: 'Durable defensive boots, ideal for left-back positioning.',
            price: '$180'
        },
        LCB: {
            images: ['./image/water.jpg', './image/water-2.jpg', './image/water-3.jpg'],
            description: 'Center-back boots with solid control and high durability.',
            price: '$175'
        },
        RCB: {
            images: ['./image/ucl-bool.jpg', './image/ucl-bool-2.jpg', './image/ucl-bool-3.jpg'],
            description: 'Right center-back boots, comfortable and stable.',
            price: '$175'
        },
        RB: {
            images: ['./image/training.jpg', './image/training-2.jpg', './image/ssss.jpg'],
            description: 'Lightweight boots for fast right-back movement.',
            price: '$185'
        },
        CDM1: {
            images: ['./image/cdm1.jpg', './image/cdm2.jpg', './image/cdm3.jpg'],
            description: 'Defensive midfield boots with precise passing and control.',
            price: '$200'
        },
        CDM2: {
            images: ['./image/cdm11.jpg', './image/cdm22.jpg', './image/cdm33.jpg'],
            description: 'Same product for second CDM, balanced performance.',
            price: '$200'
        },
        LAM: {
            images: ['./image/back-1.jpg', './image/back-2.jpg', './image/back-3.jpg'],
            description: 'Left attacking midfielder jersey, stylish and aggressive.',
            price: '$150'
        },
        CAM: {
            images: ['./image/cam1.jpg', './image/cam2.jpg', './image/cam3.jpg'],
            description: 'Playmaker jersey, lightweight and perfect for assists.',
            price: '$160'
        },
        RAM: {
            images: ['./image/ram1.jpg', './image/ram2.jpg', './image/about-4.jpg'],
            description: 'Right attacking midfielder jersey, dynamic design.',
            price: '$150'
        },
        ST: {
            images: ['./image/st1.jpg', './image/st2.jpg', './image/st3.jpg'],
            description: 'Striker boots, lightweight and built for powerful shots.',
            price: '$250'
        }
    };

    const productBox = document.getElementById('productBox');
    let intervalId;

    function changeFormation(type) {
        var formation = formations[type];
        Object.entries(formation).forEach(([id, config]) => {
            var player = document.getElementById(id);
            player.innerHTML = config.label;
            player.style.left = config.left;
            player.style.top = config.top;
            player.style.display = config.label ? 'block' : 'none';
        });
    }

    document.getElementById('btnDefault').addEventListener('click', () => changeFormation('default'));
    document.getElementById('btn352').addEventListener('click', () => changeFormation('352'));
    document.getElementById('btn433').addEventListener('click', () => changeFormation('433'));
    document.getElementById('btn532').addEventListener('click', () => changeFormation('532'));

    document.querySelectorAll('.position-btn').forEach(btn => {
        btn.addEventListener('mouseover', () => {
            var id = btn.id;
            var info = productInfo[id];

            if (info) {
                let index = 0;
                productBox.style.display = 'block';
                productBox.innerHTML = `
          <img src="${info.images[index]}" style="width:100%; border-radius:6px; margin-bottom:8px;">
          <strong>${id}</strong><br>
          <p>${info.description}</p>
          <span style="color:green; font-weight:bold;">${info.price}</span>
        `;

                intervalId = setInterval(() => {
                    index = (index + 1) % info.images.length;
                    productBox.querySelector('img').src = info.images[index];
                }, 2000);

            } else {
                productBox.innerHTML = `<p> No products</p>`;
                productBox.style.display = 'block';
            }
        });

        btn.addEventListener('mouseleave', () => {
            productBox.style.display = 'none';
            clearInterval(intervalId);
        });
    });

    changeFormation('default');
});


var swiperA = document.getElementById('swiperA')
var swiperAbtn = document.getElementById('buySwiperA')

swiperAbtn.addEventListener('click', function () {
    var product = {
        name: "Football Shoes",
        price: 120,
        image: "./image/nike-zoom.jpg",
        description: "High quality football shoes for optimal performance."
    }

    displayProductDetails(product)
})
var swiperB = document.getElementById('swiperB');
var swiperBbtn = document.getElementById('swiperBbtn');
swiperBbtn.addEventListener('click', function () {
    var productB = {
        name: "Football Shoes",
        price: 120,
        image: "./image/syria-2.jpg",
        description: "High quality football shoes for optimal performance."
    }

    displayProductDetails(productB)
})

