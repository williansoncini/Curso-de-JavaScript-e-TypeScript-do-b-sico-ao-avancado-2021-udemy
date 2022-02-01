const main = () => {

    const taskButtonInsert = document.querySelector('.task-button-insert')
    const taskInput = document.querySelector('.task-input')
    const taskList = document.querySelector('.list')

    taskButtonInsert.addEventListener('click', () => {
        addTask()
    })

    taskInput.addEventListener('keypress', (event) => {
        event.keyCode === 13 ? addTask() : ''
    })

    const getTaskInputValue = () => {
        return taskInput.value
    }

    const addTask = () => {
        insertTaskInList()
        addTaskToLocalStorage()
        clearInput()
        setFocusInput()
    }
   
    const insertTaskInList = () => {
        const taskText = getTaskInputValue()
        const li = createElementTask(taskText)
        taskList.appendChild(li)
    }

    const createElementTask = (taskText) => {
        const li = createLi(taskText)
        const deleteButton = createDeleteButton()
        li.appendChild(deleteButton)
        return li
    }

    const createLi = (taskText) => {
        const li = document.createElement('li')
        li.innerText = taskText
        return li
    }

    const createDeleteButton = () => {
        const deleteButton = document.createElement('button')
        deleteButton.addEventListener('click', deleteTask)
        deleteButton.innerText = 'Delete'
        return deleteButton
    }

    const deleteTask = (event) => {
        const button = event.target
        button.parentElement.remove()
        addTaskToLocalStorage()
    }

    const clearInput = () => taskInput.value = ''
    const setFocusInput = () => taskInput.focus()

    const getTasksFromUl = () => {
        let tasks = []
        const liList = taskList.querySelectorAll('li')
        for (let li of liList){
            let text = li.innerText
            text = text.replace('Delete','')
            tasks.push(text)
        }
        return tasks
    }

    const addTaskToLocalStorage = () => {
        const tasksJson = JSON.stringify(getTasksFromUl())
        localStorage.setItem('tasks', tasksJson)
    }

    const getTasksFromLocalStorage = () => {
        const tasksLocalStorage = JSON.parse(localStorage.getItem('tasks'))
        return tasksLocalStorage
    }

    const inputTaskListFromLocalStorage = () => {
        const tasks = getTasksFromLocalStorage()

        if (tasks){
            for (let task of tasks) {
                const li = createElementTask(task)
                taskList.appendChild(li)
            }
        }
    }
    inputTaskListFromLocalStorage()
}

main()