const albumId = document.getElementById('albums');
var block = 1;

fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(response => response.json())
      .then(json => {
            for (const product of json){
                  albumId.insertAdjacentHTML(`beforeend`, `
                  <div class="col-md-3">
                  <a title="${product.thumbnailUrl}"href="#block${block}">${product.title}</a>
                  <div class="block" id="block${block}"><img src="${product.url}"></div>
                  </div>`);
                  block++;
            }
      });