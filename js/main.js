let todoInput // field where the user enters the content of the task
let errorInfo // info about no tasks / need to enter task
let AddBtn // adds new items to the list
let ulList // task list, ul tags
let newTask // newly added task (li)

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	// all elements
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	AddBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
	
}

const prepareDOMEvents = () => {
	// all event listeners
	AddBtn.addEventListener('click', addNewTask)
}





const addNewTask = () => {
	if (todoInput.value !== '') {
		newTask = document.createElement('li')
		newTask.textContent = todoInput.value
		ulList.append(newTask)
		todoInput.value = ''
		errorInfo.textContent = ""
	} else {
		errorInfo.textContent = "You must enter the content of the task"
	}
}








document.addEventListener('DOMContentLoaded', main)