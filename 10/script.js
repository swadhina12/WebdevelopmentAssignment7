function showEditModal(taskElement) {
    var li = taskElement.parentElement.parentElement;
    var span = li.querySelector("span");
    var editInput = document.getElementById("editInput");
    editInput.value = span.innerText;
    var editModal = document.getElementById("editModal");
    editModal.style.display = "block";
    editModal.dataset.taskId = li.id;
  }
  
  function hideEditModal() {
    var editModal = document.getElementById("editModal");
    editModal.style.display = "none";
    editModal.dataset.taskId = "";
  }
  
  function updateTask(event) {
    event.preventDefault();
    var editInput = document.getElementById("editInput");
    var taskId = document.getElementById("editModal").dataset.taskId;
    var li = document.getElementById(taskId);
    var span = li.querySelector("span");
    span.innerText = editInput.value;
    hideEditModal();
  }
  
  window.onclick = function(event) {
    var editModal = document.getElementById("editModal");
    if (event.target == editModal) {
      hideEditModal();
    }
  };
  