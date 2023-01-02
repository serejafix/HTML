const elems = document.querySelectorAll("#circle");

document.querySelectorAll('#circle').forEach(item => {
    item.addEventListener('click',(e) => {
        elems.forEach(element => element.style.backgroundColor = 'grey');
        e.target.style.backgroundColor = e.target.className;
    })
  })
  