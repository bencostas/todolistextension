
var button = document.querySelector('button');
var list = document.querySelector('ul');
let close = document.getElementsByClassName("delete");
var newTask = document.querySelector('#currentTask');

// Delete todo
function deleteToDo() {
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      localStorage.removeItem(localStorage.key(i));
      console.log("removed" + div.value);
      div.remove();
    }
  }
}

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
      localStorage.setItem(newTask.value, newTask.value);
      console.log("Value is:" + newTask.value);
      newTask.value = '';
    }
    
  }
  deleteToDo();
}, false);


//Output saved Todos in local storage
for (var i = 0; i < localStorage.length; i++) {
  console.log(localStorage.getItem(localStorage.key(i)));
  list.innerHTML += '<li class="checked"><span class="delete">&#215</span> ' + localStorage.key(i) + '</li>';
  deleteToDo();
}
