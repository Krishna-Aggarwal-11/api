const inputEl = document.querySelector("#input");
const buttonEl = document.querySelector("#delete");
const outputEl = document.querySelector("#list-container");
const form = document.querySelector("form");

// // Add task and save into local storage

// localStorage.setItem("firstname" , "ka")

// //Get item

// const result = localStorage.getItem("firstname");

// //remove

// localStorage.removeItem("firstname")

//Delete 

const removeTask = id =>{
  let tasks; 
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  }
  else{
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks = tasks.filter((task)=>{
    return task.id !== +id 
  })
  localStorage.setItem("tasks" ,JSON.stringify (tasks) )
  getTasks();
}


//Get item

const getTasks = ()=>{
  let tasks; 
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  }
  else{
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  console.log(tasks);

  //Display to Dom
  let output;
  const allTasks = tasks.map((task)=>{
    return `
    <li id="item">
      <span>${task.title}</span>
      <button onclick = "removeTask('${task.id}')" id="delete">X</button>
    </li> 
    `
  });
  output = allTasks.join("");
  console.log(output);
  outputEl.innerHTML = output;
}

getTasks();


const addTask = e =>{
  e.preventDefault();
  // check if input is empty 

  if (inputEl.value === "") {
    alert("please enter a task");
  }

  // get item
  const task = inputEl.value ;
  if (task) {
    let tasks ;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
      console.log(tasks)
      
    }else{
      tasks = JSON.parse(localStorage.getItem("tasks"));
      console.log(tasks)
    }
    tasks.unshift({
      id : Date.now(),
      title : task ,
    });

    //Save to storage
    localStorage.setItem("tasks" ,  JSON.stringify(tasks))
    //empty input
    inputEl.value = "";
  }
  getTasks();
}


//Event Listener

form.addEventListener("submit" , addTask);
