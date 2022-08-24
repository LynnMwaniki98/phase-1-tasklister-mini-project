document.addEventListener("DOMContentLoaded", () => {
  
  const newTaskForm = document.getElementById("create-task-form");
  
  const taskList = document.getElementById("tasks")

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const newTaskInput = e.target.querySelector("#new-task-description").value
    const taskPTag = document.createElement('p')
    taskPTag.textContent = newTaskInput 
    taskList.appendChild(taskPTag)
    const btn = document.createElement('button')
      btn.addEventListener('click', handleDelete)
        btn.textContent = 'x'

    console.log(taskList)
    console.log(newTaskInput)
  })
  function handleDelete(e){
    e.target.parentNode.remove()
  } 
  
});
function sortTaskList(e){
  e.target.parentNode.sort()

}



/*document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById('create-task-form');
form.addEventListener('submit', (e) =>{
  e.preventDefault()
  taskList(e.target.new-task-description.value)
  form.reset()
});

});

function taskList(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  //let btn1 = document.createElement('select')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
p.textContent = `${todo}`
p.appendChild(btn)
console.log(p)
document.querySelector('#tasks').appendChild(p)

}
function handleDelete(e){
  e.target.parentNode.remove()
}
function sortToDoList(e){
  e.target.parentNode.sort()

}*/