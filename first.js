const addButton = document.querySelector(".button");
const inputTag = document.querySelector(".input-tag");
const taskContainer = document.querySelector(".task-list");
addButton.addEventListener("click", function () {
  const mainDiv = document.createElement("div");
  const paragraphTag = document.createElement("p");
  const icon = document.createElement("i");
  const delButton = document.createElement("button");
  icon.classList.add("fa", "fa-times"); 
  paragraphTag.classList.add("inner-para-text");
  paragraphTag.innerHTML = inputTag.value;

    // delbutton position
  delButton.classList.add("times");
  delButton.appendChild(icon);
  delButton.addEventListener('click', function() {
    mainDiv.remove()
  })

  mainDiv.classList.add("task-managering-container");
  mainDiv.appendChild(paragraphTag);
  mainDiv.appendChild(delButton);
  
  taskContainer.appendChild(mainDiv);
  inputTag.value = " ";

});
