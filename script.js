let myLibrary = [];
let addbtn = document.getElementById("addbook");
let form = document.getElementById("form");
let demo = document.getElementById("bookdetails");

let i = 0;


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

function addBookToLibrary() {
    let newbook = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(newbook);
    if (form.style.display != "none"){
        form.style.display = "none";
    }
    const authdiv = document.createElement('div');
    const titdiv = document.createElement('div');
    const delbtn = document.createElement('button');
    const pagediv = document.createElement('div');
    const readbtn = document.createElement('button');

    titdiv.textContent = myLibrary[i].title;    
    demo.appendChild(titdiv);

    authdiv.textContent = myLibrary[i].author;
    demo.appendChild(authdiv);

    pagediv.textContent = myLibrary[i].pages;
    demo.appendChild(pagediv);

    delbtn.textContent = "Remove"
    demo.appendChild(delbtn);

    demo.appendChild(readbtn);
    if(myLibrary[i].read ===true){
        readbtn.textContent = "Read";
        readbtn.style.backgroundColor = "green";
    }
    else{
        readbtn.style.backgroundColor = "red";
}
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
subbtn.addEventListener("click", addBookToLibrary)

addbtn.addEventListener("click", ()=>{
    if (form.style.display == "none"){
        form.style.display = "block";
    }
    else{
        form.style.display = "none";
    }
});