class Cart{

 static #products = [];

 static get products(){
    return Cart.#products;
}

 static addItem(id,count){
    Cart.#products.push({id,count});
    localStorage.setItem('cart',JSON.stringify(Cart.#products));
 }

 static removeItem(id){  
    const objWithIdIndex = Cart.#products.findIndex((obj) => obj.id === id);
    if (objWithIdIndex > -1) {
        Cart.#products.splice(objWithIdIndex, 1);
      }
      localStorage.setItem('cart',JSON.stringify(Cart.#products));
 }
  static clearCart(){
    localStorage.removeItem('cart');
 }
}

var apricotCount = document.getElementById('countapricot').value;
var avacadoCount = document.getElementById('countavacado').value;
var orangeCount = document.getElementById('countorange').value;

document.querySelector('#btnapricot').addEventListener('click', () => addFruitInCart('Абрикос',12,apricotCount));
document.querySelector('#btnavacado').addEventListener('click', () => addFruitInCart('Авакадо',30,avacadoCount));
document.querySelector('#btnorange').addEventListener('click', () => addFruitInCart('Апельсин',15,orangeCount));


function addFruitInCart(fruitname,price,count){
   const  div = document.querySelector('.cart');
   let html = `<div id="cartitems">
   <input id="btndeleteincart" type="button" value="Х" onclick="return this.parentNode.remove();"><br>
   <span>${fruitname}</span>
    <div id="bluediv">${count} pieces for ${price}</div>
    </div>`
   div.insertAdjacentHTML("beforeend",html)

}


// addFruits();

// Cart.addItem(1,20);
// Cart.addItem(2,20);

// Cart.removeItem(1);
// //Cart.clearCart();