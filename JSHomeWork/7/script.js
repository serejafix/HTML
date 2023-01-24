/* const xhr = new XMLHttpRequest();

// xhr.addEventListener('readystatechange', () => {
//   if (xhr.readyState === 4) {
//     const result = xhr.responseText;
//     console.log(result);
//   }
// });

xhr.open('GET', 'user.json');
xhr.responseType = 'json'; // 'text', 'document', 'blob'
xhr.send();


xhr.addEventListener('load', () => { 
  //console.log(JSON.parse(xhr.responseText));
  console.log(xhr.response);
})

xhr.addEventListener('error', () => {
  console.log('Error');
})

xhr.addEventListener('progress', (e) => {
  console.log(`Loaded: ${e.loaded}, Total: ${e.total} `);
})
*/

/* const getResponse = (url, action, responseType = 'json') => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = responseType;
  xhr.send();
  xhr.addEventListener('load', () => {
    action(xhr.response);
  })
}

const showUser = (user) => {
  document.write(`<h1>${user.name}</h1>`);
}

getResponse('user.json', showUser);
getResponse('https://jsonplaceholder.typicode.com/posts', (posts) => {
  posts.map(post => document.write(`<li>${post.title}</li>`));
}); */


/* const newPost = {
  userId: 1,
  title: "Title",
  body: "Content"
}

const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
xhr.responseType = 'json';
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(JSON.stringify(newPost));
xhr.addEventListener('load', () => {
  console.log(xhr.response);
});
 */



// const form = document.forms.form;

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);
//   formData.append('userId', 5);
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
//   xhr.responseType = 'json';

//   xhr.send(formData);
//   xhr.addEventListener('load', () => {
//     console.log(xhr.response);
//   });
// })

/* ---------------------------- */


/* fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))  */

/* fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data=>console.log(data))
  })  */


/* const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  const response2 = await fetch('https://jsonplaceholder.typicode.com/albums');
  const data2 = await response.json();
  console.log(data);
}

getUsers();
console.log(123);  */

const moviesBlock = document.getElementById('movies');



const KEY = '8aa7fd17';
const URL = 'https://www.omdbapi.com//?apikey=' + KEY;


const showMovies = async()=>{ 
  const movieName = document.getElementById('moviename');
  const movieYear = document.getElementById('moveiyear');
  const response = await fetch(URL + `&s=${movieName.value}&y=${movieYear.options[movieYear.selectedIndex].text}`);
  const movies = await response.json();
  console.log(movies);
  movies.Search.map(movie => {
    if(movie.Poster === "N/A"){
      moviesBlock.insertAdjacentHTML(`beforeend`, `
      <div class="col-md-3"><img src="no-poster.jpg"><div>${movie.Title}</div></div>
    `)
    }
    else
    {
      moviesBlock.insertAdjacentHTML(`beforeend`, `
      <div class="col-md-3"><img src="${movie.Poster}"><div>${movie.Title}</div></div>
    `)
    }
  });
}

document.getElementById('btnsearch').addEventListener('click',showMovies);
