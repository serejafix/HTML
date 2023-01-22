class Cart{

 static #products = [];

 static get products(){
    return this.#products;
}

 static addItem(id,count){
    this.#products.push({id,count});
    localStorage.setItem('cart',JSON.stringify(this.#products));
 }

 static removeItem(id){  
    const objWithIdIndex = this.#products.findIndex((obj) => obj.id === id);
    if (objWithIdIndex > -1) {
      this.#products.splice(objWithIdIndex, 1);
      }
      localStorage.setItem('cart',JSON.stringify(this.#products));
 }
  static clearCart(){
    localStorage.removeItem('cart');
    var container = document.querySelector('.cart');
    container.innerHTML = "";
    let html = `<div id="cartmenu">
    <strong><span>Товары</span></strong><br>
    <button id="btnclear">Очистить корзину</button>
   </div>`;
   container.insertAdjacentHTML("beforeend",html);
   document.querySelector('#btnclear').addEventListener('click', () => Cart.clearCart());
 }
}
   var apricotCount = document.getElementById('countapricot');
   var avacadoCount = document.getElementById('countavacado');
   var orangeCount = document.getElementById('countorange');

   document.querySelector('#btnapricot').addEventListener('click', () => addFruitInCart('Абрикос',12,apricotCount.value));
   document.querySelector('#btnavacado').addEventListener('click', () => addFruitInCart('Авакадо',30,avacadoCount.value));
   document.querySelector('#btnorange').addEventListener('click', () => addFruitInCart('Апельсин',15,orangeCount.value));
   document.querySelector('#btnclear').addEventListener('click', () => Cart.clearCart());
   

function AddToCart(fruitName,count,price){
   const  div = document.querySelector('.cart');
   var element = document.getElementById(fruitName);
   if(element){
      element.querySelector('#bluediv').innerHTML =`${count} pieces for ${price}`;
   }
   else{
      let html = `<div id="${fruitName}">
      <input id="btndeleteincart" type="button" value="Х" onclick="return this.parentNode.remove();"><br>
      <span>${fruitName}</span>
       <div id="bluediv">${count} pieces for ${price}</div>
       </div>`
      div.insertAdjacentHTML("beforeend",html);
   }
}

function addFruitInCart(fruitname,price,count){

   switch (fruitname) {
      case "Абрикос":
         {
            const objWithIdIndex = Cart.products.findIndex((obj) => obj.id === 1);
            if(objWithIdIndex === -1){
               Cart.addItem(1,count);
               AddToCart(fruitname,count,Math.floor(count) * Math.floor(price));
            }
            else
            {
               Cart.products[objWithIdIndex].count = Math.floor(Cart.products[objWithIdIndex].count) + Math.floor(count);
               price = Cart.products[objWithIdIndex].count * Math.floor(price);
               AddToCart(fruitname,Cart.products[objWithIdIndex].count,price);
            }
         }
         break;
         case "Авакадо":
            const objWithIdIndex1 = Cart.products.findIndex((obj) => obj.id === 2);
            if(objWithIdIndex1 === -1){
               Cart.addItem(2,count);
               AddToCart(fruitname,count,Math.floor(count) * Math.floor(price));
            }
            else
            {
               Cart.products[objWithIdIndex1].count = Math.floor(Cart.products[objWithIdIndex1].count) + Math.floor(count);
               price = Cart.products[objWithIdIndex1].count * Math.floor(price);
               AddToCart(fruitname,Cart.products[objWithIdIndex1].count,price);
            }
            break;
            case "Апельсин":
               const objWithIdIndex2 = Cart.products.findIndex((obj) => obj.id === 3);
               if(objWithIdIndex2 === -1){
                  Cart.addItem(3,count);
                  AddToCart(fruitname,count,Math.floor(count) * Math.floor(price));
               }
               else
               {
                  Cart.products[objWithIdIndex2].count = Math.floor(Cart.products[objWithIdIndex2].count) + Math.floor(count);
                  price = Cart.products[objWithIdIndex2].count * Math.floor(price);
                  AddToCart(fruitname,Cart.products[objWithIdIndex2].count,price);
               }
               break;
               default:
                  break;
   }
}

function UpdateAfterRefresh(){
   
   var storedNames = JSON.parse(localStorage.getItem('cart'));
   storedNames.forEach(element => {
      
      switch (element.id) {
      case 1:
         AddToCart("Абрикос", element.count, Math.floor(element.count) * 12);
         break;
         case 2:
            AddToCart("Авакадо", element.count, Math.floor(element.count) * 30);
            break;
            case 3:
               AddToCart("Авакадо", element.count, Math.floor(element.count) * 30);
         break;
      default:
         break;
   }
   });
}

UpdateAfterRefresh();