
var button = document.querySelector('button');
var list = document.querySelector('ul');
let close = document.getElementsByClassName("delete");
var newTask = document.querySelector('#currentTask');
let todos = document.querySelectorAll('ul li');


// Delete todo
function deleteToDo() {
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      localStorage.removeItem(div.value);
      console.log("removed" + div.value);
      div.remove();
    }
  }
}

// Clicking on the task will make it checked

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//Add todo

button.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'BUTTON') {

    if (newTask.value.length < 1) {
      return;
    }
    else if (newTask.value.length > 38) {
      alert("Too many characters!");
    }
    else {
      list.innerHTML += '<li><span class="delete">&#215</span> ' + newTask.value + '</li>';
      localStorage.setItem("tasks", newTask.value);
      console.log("Value is:" + newTask.value);
      newTask.value = '';
    }
    
  }
  deleteToDo();
}, false);

