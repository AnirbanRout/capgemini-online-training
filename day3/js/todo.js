const btn = document.getElementsByClassName('btn')[0]

btn.addEventListener('click', () => {

    const task_name = document.getElementById('task_name').value

    if (task_name.trim() !== '') {

        const container = document.getElementById('tasks_list')
        const task_items = document.createElement('li')
        task_items.classList.add('task-item')

        const task_text = document.createElement('span')
        task_text.innerText = task_name
        task_text.classList.add('task-text')

        const edit_btn = document.createElement('button')
        edit_btn.innerText = 'Edit'
        edit_btn.classList.add('task-btn', 'edit-btn')

        const delete_btn = document.createElement('button')
        delete_btn.innerText = 'Delete'
        delete_btn.classList.add('task-btn', 'delete-btn')

        task_items.appendChild(task_text)
        task_items.appendChild(edit_btn)
        task_items.appendChild(delete_btn)

        container.appendChild(task_items)

        edit_btn.addEventListener('click', () => {

            const new_task_name = prompt('Enter new task name')

            if (new_task_name !== null && new_task_name.trim() !== '') {
                task_text.innerText = new_task_name
            }
        })

        delete_btn.addEventListener('click', () => {
            container.removeChild(task_items)
        })

        document.getElementById('task_name').value = ''
    }

    else {
        alert('Please enter a task name')
    }

})