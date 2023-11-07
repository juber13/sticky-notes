// const textarea = document.getElementById('textarea-input');




const form =  document.getElementById("my-form");
const addNoteMessage =  document.getElementById("add-note-mess");

// console.log(noteContainer.children.length)
const noteContainer =  document.getElementById("note-container");


const deleteNote = (e) => {
  e.target.parentElement.remove();
  checkIsEmpty()

}

const createNote = (text , color) => {
    const html  = `
                    <p>${text}</p>
                    <button class="delete-btn">Delete</button>
                    `;
  
  const note = document.createElement('div');
  note.style.background = color;
  note.setAttribute('class', 'note');
  note.innerHTML = html;
  note.children[1].addEventListener('click' , deleteNote);
  //   note.children[1]
  return note;
}





form.addEventListener('submit' , (e) => {
   e.preventDefault();
   addNoteMessage.classList.add('active');
   const inputValue = e.target.children[0].value;
   const color = e.target.children[1].value;
   if(!inputValue) return;
  const note =  createNote(inputValue , color);
  noteContainer.appendChild(note);
//   console.log(note);
  e.target.reset();

});

function checkIsEmpty(){
    console.log(noteContainer)

    if(noteContainer.children.length  <= 0){
        console.log("first")
        // addNoteMessage.style.display = "block";
        addNoteMessage.style.display = "block";
    }
}

