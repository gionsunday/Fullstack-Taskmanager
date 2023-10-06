window.addEventListener('load', async () => {
  const form = document.querySelector("#new-task-form");
  const input =document.querySelector("#new-task-input");
  const lists = document.querySelector("#tasks")
  try{

     const data = await axios.get('/api/v01/tasks')
    

     const tasks = data.data.tasks;

     if(tasks.length == 0){
       document.getElementById("notask").textContent = `No Tasks Yet. Add`
         return;
     }
     document.getElementById('no').textContent = ` ${tasks.length}`
   tasks.forEach((task, index) =>{
    const{name, _id, status} = task
    const task_el = document.createElement("div");
    task_el.classList.add("task");
 
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
 

    const actionsel = document.createElement("div");
    actionsel.classList.add("actions");
  const edit_el = document.createElement("button");
     edit_el.classList.add("edit");
     edit_el.innerText = "Edit";


      const check = document.createElement("input")
      check.classList.add("check");
      check.type = "checkbox";
      if(status == "Task Done!"){
        check.checked = true
        
           edit_el.innerText = "Task Done!"
        task_el.classList.add("checcked");
      }
     
 
   task_content_el.appendChild(check);
    task_el.appendChild(task_content_el);
     const task_input = document.createElement("input");
     task_input.classList.add('text');
     task_input.id = "inputa"
     task_input.type = "text";
     task_input.value = name;
     task_input.setAttribute("readonly", "readonly")
     task_content_el.appendChild(task_input);
 
 
 
    
 
      const delete_el = document.createElement("button");
      delete_el.classList.add("delete");
      delete_el.innerText = "Delete";
 
      actionsel.appendChild(edit_el);
      actionsel.appendChild(delete_el);
 
      task_el.appendChild(actionsel)
 
     lists.appendChild(task_el)
 
   
 
       check.addEventListener('click', async () =>{
        var s = check.checked;
      
         if (s) {
           task_el.classList.add("checcked");
           edit_el.innerText = "Task Done!"
           const __data = await axios.patch(`/api/v01/tasks/${_id}`,{
            status:"Task Done!"
           })
          
         }
         else if(!s){
          task_el.classList.remove("checcked")
          edit_el.innerText = "Edit"
          const __data = await axios.patch(`/api/v01/tasks/${_id}`,{
            status:"Not Done!"
           })
         
         }
        
       })
 
     edit_el.addEventListener("click", async () => {
         if (edit_el.innerText.toLowerCase() == "edit"){
             task_input.removeAttribute("readonly","readonly");
             task_input.focus()
             edit_el.innerText = "Save"
         }
         else{
             task_input.setAttribute("readonly", "readonly");
             edit_el.innerText = "Edit"
             const __data = await axios.patch(`/api/v01/tasks/${_id}`,{
              name:task_input.value
             })
         }
 
       
     })
 
     delete_el.addEventListener('click', async () =>{
       lists.removeChild(task_el);
       const _data = await axios.delete(`/api/v01/tasks/${_id}`) 
       
     document.getElementById('no').textContent = ` ${tasks.length -1} `
       
 
   })
   
 
   })
      
  }catch(error){
 console.log(error)
  }
 
})



