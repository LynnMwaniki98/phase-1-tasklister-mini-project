document.addEventListener("DOMContentLoaded", () => {
  
  //To create the form function, we first grab the form element <for id="create-task-form"
  const newTaskForm = document.getElementById("create-task-form");
  
  //access the list function to be able to add a newTask to it 
  const taskList = document.getElementById("tasks")

  //add EventListener to get accesses to targets, and the new entered task
  //update TaskList with newTask and update the DOM (show task on screen) to do this create a pTag, assign the value and append it
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const newTaskInput = e.target.querySelector("#new-task-description").value
    const taskPTag = document.createElement('p')
    taskPTag.textContent = newTaskInput 
    taskList.appendChild(taskPTag)


    console.log(taskList)
    console.log(newTaskInput)

  })
  
}); 
