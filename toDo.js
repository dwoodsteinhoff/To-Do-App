const form = document.querySelector("form");
const toDoInput = document.querySelector('input[type="text"]')
const ul = document.querySelector('ul');


form.addEventListener("submit", function(event) {
  event.preventDefault(); console.log('inside form');
  const newToDo = makeToDo(toDoInput.value);
  ul.appendChild(newToDo);
  toDoInput.value = '';
});

function makeToDo (text){
  const newli = document.createElement('li');
  newli.innerHTML = `<span>${text}</span>`
  console.log(newli);

  const strikeToDo = document.createElement('button');
  strikeToDo.innerText = "Cross Off" 
  strikeToDo.addEventListener('click',function(e){
  if(e.target.tagName === 'BUTTON'){
    e.preventDefault();
    const strikeText = newli.firstElementChild;
    strikeText.classList.add("strike");
    console.log(strikeText.classList);
  }
})
  newli.appendChild(strikeToDo);

  const removeToDo = document.createElement('button');
  removeToDo.innerText = "Remove ToDo"
  removeToDo.addEventListener('click',function(e){
    if(e.target.tagName === 'BUTTON'){
      e.target.parentElement.remove();
    }
  })
  newli.appendChild(removeToDo);

  return newli;
}
