const xhr = new XMLHttpRequest();


xhr.open('GET','http://echo.jsontest.com/key/value/one/two');

xhr.send();
xhr.addEventListener('load',() => {
    console.log(xhr.responseText);
})
xhr.addEventListener('load',() => {
    console.log(xhr.status);
})

