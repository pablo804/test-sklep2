let cart = [];

function addToCart(name, price){
 cart.push({name, price});
 updateCart();
 alert('Dodano do koszyka: ' + name);
}

function updateCart(){
 const cartItems = document.getElementById('cartItems');
 cartItems.innerHTML = '';
 let sum = 0;
 cart.forEach(item => {
  cartItems.innerHTML += `<div class='cart-item'>${item.name} – ${item.price} zł</div>`;
  sum += item.price;
 });
 const shipping = parseFloat(document.getElementById('shipping').value);
 document.getElementById('total').textContent = (sum + shipping).toFixed(2);
}

document.getElementById('openCart').onclick = () => {
 document.getElementById('cartPanel').style.display = 'flex';
 updateCart();
};

document.getElementById('closeCart').onclick = () => {
 document.getElementById('cartPanel').style.display = 'none';
};

document.getElementById('shipping').onchange = updateCart;








  