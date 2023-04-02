let todoInput; // field where the user enters the content of the task
let errorInfo; // info about no tasks / need to enter task
let AddBtn; // adds new items to the list
let ulList; // task list, ul tags
let newTask; // newly added task (li)

let popup;
let popupInfo;
let taskToEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

// all elements
const prepareDOMElements = () => {
	todoInput = document.querySelector(".todo-input");
	errorInfo = document.querySelector(".error-info");
	AddBtn = document.querySelector(".btn-add");
	ulList = document.querySelector(".todolist ul");
	popup = document.querySelector(".popup");
	popupInfo = document.querySelector(".popup-info");
	popupInput = document.querySelector(".popup-input");
	popupAddBtn = document.querySelector(".accept");
	popupCloseBtn = document.querySelector(".cancel");
};

// all event listeners
const prepareDOMEvents = () => {
	emptyList();
	AddBtn.addEventListener("click", addNewTask);
	ulList.addEventListener("click", checkCLick);
	popupCloseBtn.addEventListener("click", closePopup);
	popupAddBtn.addEventListener("click", changeTaskText);
	todoInput.addEventListener("keyup", enterClick);
	popupInput.addEventListener("keyup", enterClick);
};

const addNewTask = () => {
	if (todoInput.value !== "") {
		newTask = document.createElement("li");
		let newTaskText = document.createElement("p");
		newTaskText.textContent = todoInput.value;
		newTask.append(newTaskText);
		createToolsArea();
		ulList.append(newTask);
		todoInput.value = "";
		errorInfo.textContent = "";
	} else {
		errorInfo.textContent = "You must enter the content of the task";
	}
};
const createToolsArea = () => {
	const toolBox = document.createElement("div");
	toolBox.classList.add("tools");
	toolBox.innerHTML = `<button class="complete"><i class="fas fa-check"></i></button>
    <button class="edit">EDIT</button>
    <button class="delete"><i class="fas fa-times"></i></button>
	`;
	newTask.append(toolBox);
};

const checkCLick = (e) => {
	if (e.target.matches(".complete")) {
		e.target.closest("li").classList.toggle("completed");
		e.target.classList.toggle("completed");
	} else if (e.target.matches(".edit")) {
		editTask(e);
	} else if (e.target.matches(".delete")) {
		deleteTask(e);
		emptyList();
	}
};

const editTask = (e) => {
	taskToEdit = e.target.closest("li");
	popupInput.value = taskToEdit.firstChild.textContent;
	popup.style.display = "flex";
};

const closePopup = () => {
	popup.style.display = "none";
	popupInfo.textContent = "";
};

const changeTaskText = () => {
	if (popupInput.value !== "") {
		taskToEdit.firstChild.textContent = popupInput.value;
		closePopup();
	} else {
		popupInfo.textContent = "You must enter some task content";
	}
};

const deleteTask = (e) => {
	e.target.closest("li").remove();
};

const emptyList = () => {
	const allTasks = ulList.querySelectorAll("li");

	if (allTasks.length == 0) {
		errorInfo.textContent = "There are no tasks in the list.";
	}
};

const enterClick = (e) => {
	if (e.key === "Enter") {
		if (e.target.classList == 'todo-input') {
			addNewTask();
			
		} else if (e.target.classList == 'popup-input') {
			changeTaskText()
			
		}
	}
};

document.addEventListener("DOMContentLoaded", main);

// There are no tasks in the list.
