
const addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click',()=>{
    form.style.display ="block";
})

const subbtn = document.getElementById('subbtn');
subbtn.addEventListener('click',showbook);

const form = document.getElementById('form')
const showbtn = document.getElementById('showbook')


const library = [];

function book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBooktoLibrary(event){
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;
    event.preventDefault();
    let newbook = new book(title,author,pages,read);
    library.push(newbook);
}

function showbook(){
const libdiv = document.querySelector('.bookdetails');
const bookdiv = document.createElement('div');
bookdiv.setAttribute("class","title");
bookdiv.textContent = newbook.title;
libdiv.appendChild(bookdiv);
console.log(newbook.title)

}
showbtn.addEventListener('click',showbook);

