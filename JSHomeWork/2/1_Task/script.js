var btn = document.getElementById('addpercent');

var bar = document.getElementById('progressbar');

console.log(bar);

function addpercent(){
    var width1 = bar.offsetWidth;
    if(bar.style.width !== 150+"px"){
        bar.style.width = (width1+15) + "px";
    }
    
} 
if(btn){
    btn.addEventListener('click',addpercent);
}



