// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('h1').style.color = 'red'
// })

// document.querySelector('h1').style.color = 'red'


// /*---------*/
// const list = document.querySelector('.list');
// const listChildren = list.children;

// const addClickHandler = () => {
//   const newLi = document.createElement('li');
//   newLi.classList.add('active');
//   newLi.textContent = 'New text';
//   newLi.id = 'current';

//   // add element
//   list.append(newLi);
//   // list.prepend(newLi);
//   // list.before(newLi);
//   // list.after(newLi);
//   // listChildren[1].after(newLi);
// }

// const cloneClickHandler = () => {
//   const clone = list.cloneNode(true);
//   document.body.append(clone);
// }

// const removeClickHandler = () => {
//   list.remove()
// }

// document.querySelector('.add-list-item').addEventListener('click', addClickHandler);
// document.querySelector('.clone-list').addEventListener('click', cloneClickHandler);
// document.querySelector('.remove-list').addEventListener('click', removeClickHandler);

// /* 
// не работает для динамических элементов

// const liElements = document.querySelectorAll('.list li');

// liElements.forEach(item =>  
//   item.addEventListener('click', (e) => { 
//     const elem = e.target;
//     elem.classList.toggle('active')
//   })
// ) 
// */


// list.addEventListener('click', (e) => {
//   const elem = e.target;
//   /* if (elem.tagName === 'STRONG') { 
//     elem.parentNode.classList.toggle('active');
//   }
//   else
//     elem.classList.toggle('active'); */

//   // elem.parentNode.parentNode.classList.toggle('active');
//   // elem.closest('li').classList.toggle('active');

//   // if (elem.classList.contains('close')) { 
//   //   elem.closest('li').remove()
//   // }
//   if (elem.closest('li').nextElementSibling)
//     elem.closest('li').nextElementSibling.classList.toggle('active');

//   if (elem.closest('li').previousElementSibling)
//     elem.closest('li').previousElementSibling.classList.toggle('active');
//   //e.stopPropagation() // останавливает всплытие события
// });

// const f = () => {
//   console.log('45354');
//   document.body.removeEventListener('click', f);
// }
// document.body.addEventListener('click', f);


/* -------- carousel --------- */

const nextBtn = document.querySelector('.carousel .next')
const prevBtn = document.querySelector('.carousel .prev')
const imageContainer = document.querySelector('.carousel .wrapper')
const carousel = document.querySelector('.carousel')

const nextSlide = (e) => {
  e.preventDefault(); // отменяем стандартное действие элемента
  imageContainer.append(imageContainer.firstElementChild)
}
const prevSlide = (e) => {
  e.preventDefault();
  imageContainer.prepend(imageContainer.lastElementChild)
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

const scrollCarouselHandler = (e) => {
  e.deltaY > 0 ? nextSlide(e) : prevSlide(e)
}

carousel.addEventListener('wheel', scrollCarouselHandler);



const openModal = (e) => { 
  e.preventDefault();
  const elem = e.target;
  const path = elem.closest('a').href;
  
 document.body.insertAdjacentHTML('beforeend', `
 <div class="modal">
   <div class="modal-body">
     <img src="${path}" alt="">
     <button id="btn">&#10006;</button>
   </div>
 </div>`);
 close();
}

[...imageContainer.children].forEach(link => link.addEventListener('click', openModal));


 function close(){
   if(document.getElementById('btn'))
   { 
     const a = document.getElementById('btn');
     a.addEventListener('click',closefunc);
      if(document.getElementsByClassName('modal')[0]){
      const elem1 = document.getElementsByClassName('modal')[0];
      const elem2 = document.getElementsByClassName('modal-body')[0];
       elem2.addEventListener('mouseleave', (e)=>{     
        elem1.addEventListener('click',closefunc);
       });
       elem2.addEventListener('mouseover', (e)=>{     
        elem1.removeEventListener('click',closefunc,false);
       });
      }
   }
 }
 function closefunc(){
          if(document.getElementsByClassName('modal'))
          {
            const a = document.getElementsByClassName('modal');
            if(a)
          {
            a[0].remove();
          }
          }
 }