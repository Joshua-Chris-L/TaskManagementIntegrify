//Create a new list and add a close button to it
var allList = document.getElementsByTagName("LI");
var i;
for ( i = 0; i < allList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  allList[i].appendChild(span);
}


// Delete a parent Div when the close button is clicked on
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// toggle on colora and and add a checked symbol when list is clicked
var mylist = document.querySelector('ul');
function toggleFunction(events){
  if (events.target.tagName === 'LI'){
    events.target.classList.toggle('checked');
  }
}
mylist.addEventListener('click', toggleFunction, false);



// implement a new list when clicking the add button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputText").value;
  var textInput = document.createTextNode(inputValue);
  li.appendChild(textInput);
  if (inputValue === '') {
    alert("Please Enter Some Content!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("inputText").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var i;
  for (i = 0; i <= close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// Delete all list
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function remove(){
  var container = document.querySelector('#myUL');
  removeAllChildNodes(container);
}
