let myLibrary = [];
let addbtn = document.getElementById("addbook");
let form = document.getElementById("form");
let demo = document.getElementById("bookdetails");
let invalid = document.getElementById('invalid');
let inputs = document.querySelector('#title,#author,#read,#pages')
let close = document.getElementById('close');
close.addEventListener('click',()=>{
    form.style.display ='none';
})
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let read = document.getElementById("read");
let subbtn = document.getElementById("subbtn");


form.addEventListener('submit',addBookToLibrary);



function createbook(item){
    const bookdiv = document.createElement('div');
    const authdiv = document.createElement('div');
    const titdiv = document.createElement('div');
    const delbtn = document.createElement('button');
    const pagediv = document.createElement('div');
    const readbtn = document.createElement('button');

    bookdiv.classList.add('book');
    bookdiv.setAttribute('id', myLibrary.indexOf(item));

    titdiv.textContent = `Title : ${item.title}`;    
    bookdiv.appendChild(titdiv);

    authdiv.textContent =`Author : ${item.author}`;
    bookdiv.appendChild(authdiv);

    pagediv.textContent =`Pages : ${item.pages}`;
    bookdiv.appendChild(pagediv);


    readbtn.classList.add('readBtn')    
    if(item.read===false) {
        readbtn.textContent = 'Not Read';
        readbtn.style.backgroundColor = '#ff0404d8';
    }else {
        readbtn.textContent = 'Read';
        readbtn.style.backgroundColor = '#63da63'
    }
    bookdiv.appendChild(readbtn);

    readbtn.addEventListener('click', () => { 
        item.read = !item.read; 
        kremlin();
    }); 

    delbtn.classList.add('delBtn');
    delbtn.textContent = "Remove"
    bookdiv.appendChild(delbtn);
    
    bookdetails.appendChild(bookdiv);
    delbtn.addEventListener('click',()=>{
        myLibrary.splice(myLibrary.indexOf(item),1)
        kremlin();
    });
}

function kremlin() {
    const display = document.getElementById('bookdetails');//1
    const books = document.querySelectorAll('.book'); //2
    books.forEach(book => display.removeChild(book)); //these three lines to prevent repeititive display
    for (let i=0; i<myLibrary.length; i++){
        createbook(myLibrary[i]);
    }
}



function addBookToLibrary() {
    form.style.display ="none";
    event.preventDefault();
    let newbook = new Book(title.value, author.value, pages.value, read.checked);
    if(inputs.value!='')
    {       myLibrary.push(newbook);
           }
   else{
           alert("Invalid/empty fields");
           form.reset();
           }
    kremlin();
}

addbtn.addEventListener("click",()=>{
    form.style.display="block";
    form.reset();
});
