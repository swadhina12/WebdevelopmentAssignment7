function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    if (task !== "") {
      var li = document.createElement("li");
      li.innerHTML = '<span>' + task + '</span>' +
        '<div class="actions">' +
        '<button onclick="markCompleted(this)"><i class="fa fa-check"></i></button>' +
        '<button onclick="editTask(this)"><i class="fa fa-edit"></i></button>' +
        '<button onclick="deleteTask(this)"><i class="fa fa-trash"></i></button>' +
        '<button onclick="updateStatus(this)"><i class="fa fa-sync-alt"></i></button>' +
        '</div>';
      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }
  }
  
  function markCompleted(taskElement) {
    var li = taskElement.parentElement.parentElement;
    li.classList.toggle("completed");
  }
  
  function editTask(taskElement) {
    var li = taskElement.parentElement.parentElement;
    var span = li.querySelector("span");
    var newTask = prompt("Edit task:", span.innerText);
    if (newTask !== null) {
      span.innerText = newTask;
    }
  }
  
  function deleteTask(taskElement) {
    var li = taskElement.parentElement.parentElement;
    li.remove();
  }
  
  function updateStatus(taskElement) {
    var li = taskElement.parentElement.parentElement;
    li.classList.toggle("status-updated");
  }
  