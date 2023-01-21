class Books{
    static #books = [];

    static addBook(){

        var nameBook = document.getElementById("bookname").value;
        var authorname = document.getElementById("authorname").value;
        var countcopies = document.getElementById("countcopies").value;

        var table = document.querySelector("#BookTable");
        if(!(nameBook === "" || authorname === "" || countcopies === ""))
        {
            this.#books.push({name:nameBook,author:authorname,count:countcopies});
             var tr="";
             Books.#books.forEach(x=>{
                tr+='<tr>';
                tr+='<td class="name_col">'+x.name+'</td>'+
                '<td>'+x.author+'</td>'+
                '<td>'+x.count+'</td>'
                 tr+='</tr>'
             })
             table.innerHTML+=tr;
      }
    }
    static removeBookByName(){
        var nameForDelete = document.getElementById("namefordelete").value;
        const objWithIdIndex = Cart.#books.findIndex((obj) => obj.name === nameForDelete);
        if (objWithIdIndex > -1) {
            Cart.#books.splice(objWithIdIndex, 1);
          }

          document.querySelectorAll('tr').forEach(tr => {
            if(tr.children[0].textContent === nameForDelete){
                tr.remove()
            }
        });
    }
}

document.querySelector('#btnadd').addEventListener('click', () => Books.addBook());
document.querySelector('#btndelete').addEventListener('click', () => Books.removeBookByName());