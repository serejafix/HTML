const changeColor = (e) => {
  const elem = e.target;
  //console.log(elem.getAttribute('data-color'));
  if (elem.dataset.bgColor)
    elem.style.background = elem.dataset.bgColor;

  elem.style.color = elem.dataset.color;

}

document.querySelectorAll('h1').forEach(item => {
  item.addEventListener('click', changeColor)
})


const documentClickHandler = (e) => {
  const elem = e.target;
  const action = elem.dataset.action;
  if (!action) return;

  switch (action) {
    case 'collapse':
      const target = elem.dataset.target;
      if (!target) return;
      if (document.querySelector(target))
        document.querySelector(target).hidden = !document.querySelector(target).hidden
      break;
    case 'modal':
      if (!elem.dataset.target) return;
      alert('Modal')
    default:
      break;
  }
}

document.addEventListener('click', documentClickHandler)


const toTopBtn = document.querySelector('.to-top');
const toTopHandler = (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
toTopBtn.addEventListener('click', toTopHandler);


const scrollHandler = () => {
  if (window.scrollY >= document.documentElement.clientHeight) {
    toTopBtn.classList.remove('hidden')
  }
  else {
    toTopBtn.classList.add('hidden')
  }
}
window.addEventListener('scroll', scrollHandler);




const menuClickHandler = (e) => {
  e.preventDefault();
  const elem = e.target;
  const currentElem = document.querySelector(elem.getAttribute('href'))
  const { top } = currentElem.gettBoundingClientRec();
  window.scrollTo({
    top: window.scrollY + top,
    behavior: 'smooth'
  });
}

document.querySelectorAll('nav a').forEach(item => item.addEventListener('click', menuClickHandler));


/* Zoom */
 const imgZoom = document.querySelector('.zoom-wrapper img');
 const zoomOver = () => {
  imgZoom2.style.display = 'none';
   const zoomPreview = document.createElement('div');
   zoomPreview.classList.add('zoom-preview');
   zoomPreview.style.backgroundImage = `url(${imgZoom.dataset.zoom})`
   imgZoom.after(zoomPreview);
   const zoomOut = () => {
     zoomPreview.remove()
     imgZoom2.style.display = 'block';
   }
   imgZoom.addEventListener('mouseout', zoomOut);
   const zoomMove = (e) => { 
     zoomPreview.style.backgroundPositionX = e.offsetX * 100 / imgZoom.offsetWidth + '%'
     zoomPreview.style.backgroundPositionY = e.offsetY * 100 / imgZoom.offsetHeight + '%'
   }
   imgZoom.addEventListener('mousemove', zoomMove);
 }
imgZoom.addEventListener('mouseover', zoomOver);


// Zoom graB

 const imgZoom2 = document.querySelector('.zoom-wrapper2 img');

 const zoomdown2 = () => {
   const zoomPreview2 = document.createElement('div');
   zoomPreview2.classList.add('zoom-preview2');
   zoomPreview2.style.backgroundImage = `url(${imgZoom2.dataset.zoom})`
   imgZoom2.after(zoomPreview2);
   const zoomOut = () => {
     zoomPreview2.remove();
   }
   imgZoom2.addEventListener('mouseup', zoomOut);
   const zoomMove = (e) => {
    e.preventDefault();
     zoomPreview2.style.backgroundPositionX = e.offsetX * 100 / imgZoom2.offsetWidth + '%'
     zoomPreview2.style.backgroundPositionY = e.offsetY * 100 / imgZoom2.offsetHeight + '%'
   }
   imgZoom2.addEventListener('mousemove', zoomMove);
 }
 imgZoom2.addEventListener('mousedown', zoomdown2);


 // CLICK MENU AND SCROLL TASK 2

 document.querySelector('nav').addEventListener('click',(e) =>{
  const id = e.target.getAttribute('href').replace('#','');
  let links = document.querySelectorAll('nav a');
  links.forEach(element => element.style.color = 'grey');
  e.target.style.color = 'green';
  window.scrollTo({
    top: document.getElementById(id).offsetTop,
    behavior: 'smooth'
  });
 });

 function srcrolling(){
   var scroY = window.scrollY;
   var menus = document.querySelectorAll('nav a');
   var section = document.querySelectorAll('section');
   section.forEach(elem => {
    if(elem.offsetTop <= scroY)
    {
        menus.forEach((element) => {
        if(element.getAttribute('href').replace('#','') === elem.getAttribute('id')){     
          element.style.color = 'green';
          }
          else{
            element.style.color = 'grey';
          }
     });
    }
  });
 }
document.addEventListener('scroll',srcrolling);