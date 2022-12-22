const title = document.getElementById('title').value
const author = document.getElementById('author').value;
const pages = document.getElementById('pages').value;
const read = document.getElementById('read').value;


const addbtn = document.getElementById('addbtn');
const subbtn = document.getElementById('subbtn');
const form = document.getElementById('form')
const showbtn = document.getElementById('showbook')

function handleForm(event) { 
    event.preventDefault(); 
    } 
form.addEventListener('submit',handleForm);

const library = [];

function book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
addbtn.addEventListener('click',()=>{
    form.style.display ="block";
})

let newbook = new book(title,author,pages,read);

subbtn.addEventListener('click',()=>{
    library.push(newbook);
})
console.log(newbook.title)

function showbook(){
document.getElementsByClassName('title').innerHTML = newbook.title;
console.log(newbook.title);
}
showbtn.addEventListener('click',showbook);

