document.addEventListener("DOMContentLoaded", () => {
  const taskForm=document.querySelector('form')
  taskForm.addEventListener('submit',(callback)=>{
    callback.preventDefault();
    const newTodo=callback.target.querySelector('#new-task-description').value;
    buildToDo(newTodo);
    taskForm.reset();//to make the input empty again.
  })
});
function buildToDo(newTodo){
  const makeList=document.createElement('li');
  const removebutton=document.createElement('button')

  removebutton.textContent= 'remove'
  makeList.textContent=newTodo;
  makeList.appendChild(removebutton);
  document.querySelector('#tasks').appendChild(makeList)
  removebutton.addEventListener('click',deletee);
}
function deletee(callback){
  callback.target.parentNode.remove();
}
