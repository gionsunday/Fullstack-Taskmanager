window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input =document.querySelector("#new-task-input");
    const lists = document.querySelector("#tasks")

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const task = input.value;
    if(!task){
      alert("Please fill the task field");
      return;
  }
     const data = await axios.post('/api/v01/tasks', {
      name:task,
     })
console.log(data.data)
window.location = "index.html"
    

    //  const task_el = document.createElement("div");
    //  task_el.classList.add("task");

    //  const task_content_el = document.createElement("div");
    //  task_content_el.classList.add("content");

    //    const check = document.createElement("input")
    //    check.classList.add("check");
    //    check.type = "checkbox";
    //    check.value = "check"

    // task_content_el.appendChild(check);
    //  task_el.appendChild(task_content_el);
    //   const task_input = document.createElement("input");
    //   task_input.classList.add('text');
    //   task_input.id = "inputa"
    //   task_input.type = "text";
    //   task_input.value = task;
    //   task_input.setAttribute("readonly", "readonly")
    //   task_content_el.appendChild(task_input);



    //   const actionsel = document.createElement("div");
    //      actionsel.classList.add("actions");
    //    const edit_el = document.createElement("button");
    //       edit_el.classList.add("edit");
    //       edit_el.innerText = "Edit";

    //    const delete_el = document.createElement("button");
    //    delete_el.classList.add("delete");
    //    delete_el.innerText = "Delete";

    //    actionsel.appendChild(edit_el);
    //    actionsel.appendChild(delete_el);

    //    task_el.appendChild(actionsel)

    //   lists.appendChild(task_el)

    //   input.value = "";

    //     check.addEventListener('click', () =>{
    //       if (true) {
    //         var s = "checked";
    //         task_el.classList.add("checcked");
    //         edit_el.innerText = "Task Done!"
    //       }
    //     })

    //   edit_el.addEventListener("click", () => {
    //       if (edit_el.innerText.toLowerCase() == "edit"){
    //           task_input.removeAttribute("readonly","readonly");
    //           task_input.focus()
    //           edit_el.innerText = "Save"
    //       }
    //       else{
    //           task_input.setAttribute("readonly", "readonly");
    //           edit_el.innerText = "Edit"
    //       }

        
    //   })

    //   delete_el.addEventListener('click', () =>{
    //     lists.removeChild(task_el);
    // })

})



})
