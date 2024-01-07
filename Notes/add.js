const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// when we close the browser it check the data in local storage then it display the data as a note.
// function showNotes(){
//     notesContainer.innerHTML = localStorage.setItem('notes');
// }

// now we have to create a local storage because when we open browser it will be stored and show as it is.
// showNotes();
function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

// when i click a botton then it show to write a note here..

createBtn.addEventListener('click', ()=> {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'images/download.png';
    notesContainer.appendChild(inputBox).appendChild(img);
})

// here is a notes delete functionality,
notesContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === 'p'){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
})