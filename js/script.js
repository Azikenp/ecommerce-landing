const displayMenu = document.getElementById("list");
const closeMenu = document.getElementById("close-menu-btn");
const openMenu = document.getElementById("open-menu-btn");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const number = document.getElementById("number");
const price = document.getElementById('total-price');
const slashedPrice = document.getElementById('slashed-price');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const imageSlider = document.getElementById('image-slider');
const smallImg = document.querySelectorAll('#small-img');

const cartNumber = document.querySelector('.cart-numbering');
const cartDiv = document.querySelector('.cart-div');
const cartBody = document.querySelector('.cart-body');
const cart = document.querySelector('.cart');
const addToCart = document.querySelector('.add-to-cart');
const clearCartItems = document.querySelector('.clear-cart');

const overlay = document.getElementById('overlay')
const smallImg1 = document.querySelectorAll('#small-img1');
const imageSlider1 = document.getElementById('image-slider1');
const hideModal = document.getElementById('hide');
const less = document.getElementById('less');
const great = document.getElementById('great');



// section for menu
openMenu.addEventListener("click", function(){
    displayMenu.classList.add("show")
})

closeMenu.addEventListener("click", function(){
    displayMenu.classList.remove("show")
})

// incrementing or decrementing the order amount
let counter = 0
increaseBtn.addEventListener("click", function(){
    counter++
    number.textContent = counter
    getTotalPrice()
    increaseCartNumber()
    addToMyCart()
})
decreaseBtn.addEventListener("click", function(){
    counter--
    if(counter <= 0){
        counter = 0
    }
    number.textContent = counter
    getTotalPrice()
    increaseCartNumber()
    addToMyCart()
})

// dynamically getting total price as user selects amount
function getTotalPrice(){
    if(counter == 0){
        price.textContent = `$125.00`
        slashedPrice.textContent = `$250.00`
    }
    else{
        let pricing = counter * 125
        let slashedPricing = counter * 250
        price.textContent = "$"+ pricing + ".00"
        slashedPrice.textContent = "$"+ slashedPricing + ".00"
    }
}

let imageCounter = 1
next.addEventListener('click', function(){
    imageCounter++
    imageSlider.src = "./images/image-product-" + imageCounter + ".jpg"
    if (imageCounter >= 5) {
        imageSlider.src = "./images/image-product-1.jpg"
        imageCounter = 1
    }
})
prev.addEventListener('click', function(){
    imageCounter--
    imageSlider.src = "./images/image-product-" + imageCounter + ".jpg"
    if (imageCounter <= 0 ) {
        imageSlider.src = "./images/image-product-4.jpg"
        imageCounter = 4
    }
})

// changing the displyed product to the product clicked by the user
smallImg.forEach(function(image){
    image.addEventListener('click', function(e){
        overlay.classList.add('show')
        let clickedImage = e.currentTarget.querySelector('img').src;
        if(clickedImage == "http://127.0.0.1:5501/images/image-product-1-thumbnail.jpg"){
            imageSlider.src = "http://127.0.0.1:5501/images/image-product-1.jpg"
            imageSlider1.src = "http://127.0.0.1:5501/images/image-product-1.jpg"
        }else if(clickedImage == "http://127.0.0.1:5501/images/image-product-2-thumbnail.jpg"){
            imageSlider.src = "http://127.0.0.1:5501/images/image-product-2.jpg"
            imageSlider1.src = "http://127.0.0.1:5501/images/image-product-2.jpg"
        }else if(clickedImage == "http://127.0.0.1:5501/images/image-product-3-thumbnail.jpg"){
            imageSlider.src = "http://127.0.0.1:5501/images/image-product-3.jpg"
            imageSlider1.src = "http://127.0.0.1:5501/images/image-product-3.jpg"
        } else if(clickedImage == "http://127.0.0.1:5501/images/image-product-4-thumbnail.jpg"){
            imageSlider.src = "http://127.0.0.1:5501/images/image-product-4.jpg"
            imageSlider1.src = "http://127.0.0.1:5501/images/image-product-4.jpg"
            imageSlider1.src = "http://127.0.0.1:5501/images/image-product-4.jpg"
        }
    })
})


//modal functionality
smallImg1.forEach(function(images){
    images.addEventListener('click', function(e){
        overlay.classList.add('show')
        let clickedImages = e.currentTarget.querySelector('img').src;
        console.log(clickedImages);
        if(clickedImages == "http://127.0.0.1:5501/images/image-product-1-thumbnail.jpg"){
            imageSlider1.src = "http://127.0.0.1:5501/images/image-product-1.jpg"
        }else if(clickedImages == "http://127.0.0.1:5501/images/image-product-2-thumbnail.jpg"){
            imageSlider1.src = "http://127.0.0.1:5501/images/image-product-2.jpg"
        }else if(clickedImages == "http://127.0.0.1:5501/images/image-product-3-thumbnail.jpg"){
            imageSlider1.src = "http://127.0.0.1:5501/images/image-product-3.jpg"
        } else if(clickedImages == "http://127.0.0.1:5501/images/image-product-4-thumbnail.jpg"){
            imageSlider1.src = "http://127.0.0.1:5501/images/image-product-4.jpg"
        }
    })
})

let imageCounter1 = 1
great.addEventListener('click', function(){
    imageCounter1++
    imageSlider1.src = "./images/image-product-" + imageCounter1 + ".jpg"
    if (imageCounter1 >= 5) {
        imageSlider1.src = "./images/image-product-1.jpg"
        imageCounter1 = 1
    }
})
less.addEventListener('click', function(){
    imageCounter1--
    imageSlider1.src = "./images/image-product-" + imageCounter1 + ".jpg"
    if (imageCounter1 <= 0 ) {
        imageSlider1.src = "./images/image-product-4.jpg"
        imageCounter1 = 4
    }
})

hideModal.addEventListener('click', function(){
    overlay.classList.remove('show')
})

// incrementing cart number
function increaseCartNumber(){
    if(counter >= 1){
        cartNumber.textContent = counter;
    } else{
        cartNumber.classList.remove('show-numbering')
    }
}

// adding functionality to cart
cart.addEventListener('click', function(){
    cartDiv.classList.toggle('show-cart')
    console.log('hi');
})



function addToMyCart(){
    addToCart.addEventListener('click', function(){
        if(counter == 0){
            cartBody.innerHTML = `<p class="mt-10 ml-20">Your cart is empty.</p>`;
        }
        else{
            cartNumber.classList.add('show-numbering')
            cartBody.innerHTML = `<div class="flex items-center">
            <img class="w-9 rounded mr-3" src="/images/image-product-1-thumbnail.jpg" alt="">
            <div class="mr-3">
                <p class="text-grayishBlue text-base">Fall Limited Edition Sneakers</p>
                <div class="flex flex-row">
                    <p class="text-grayishBlue mr-2 text-base">$125 x ${counter}</p> <span class="font-bold text-base">$${counter * 125}</span>
                </div>
            </div>
            <div class="clear-cart cursor-pointer">
                <i onclick="clearCart()" class="fa-solid fa-trash-can"></i>
            </div>
        </div>
        <div class="bg-orange cursor-pointer mt-5 text-base rounded text-white text-center">
            <button class="h-10">Checkout</button>
        </div>`
        }
    })

}
 
//clear cart
function clearCart(){
    cartBody.innerHTML = `<p class="mt-10 ml-20">Your cart is empty.</p>`;
    counter = 0
    number.textContent = counter;
    price.textContent = "$125.00"
    slashedPrice.textContent = "$250.00"
    cartNumber.textContent = 0
    setTimeout((removeCart) => {
        cartDiv.classList.remove('show-cart')
        cartNumber.classList.remove('show-numbering')
    }, 1000);
    removeCart()
}
