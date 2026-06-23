const add_btn = document.getElementById('add-student')

add_btn.addEventListener('click', () => {

    const input_names = document.getElementById('student-name').value

    if (input_names.trim() === '') {
        alert('Please enter at least one student name.')
        return
    }

    let count = 1;

    const student_names = input_names.split(',').map((name) => {
        return count++ + '. ' + name;
    })

    const student_list = document.getElementById('student-list')

    student_names.forEach((student) => {
        const list_item = document.createElement('li')
        list_item.textContent = student.trim()
        student_list.appendChild(list_item)
    })

    document.getElementById('student-name').value = ''

})

const filter_students = document.getElementById('passed-student')

filter_students.addEventListener('click', () => {
    const items = document.querySelectorAll('#student-list li');
    const passed_students = Array.from(items).filter((item) => {
        return item.textContent.length > 6
    })

    const student_list = document.getElementById('student-list')
    student_list.innerHTML = ''

    passed_students.forEach((student) => {
        const list_item = document.createElement('li')
        list_item.textContent = student.textContent.trim()
        student_list.appendChild(list_item)
    })
})

const remove_btn = document.getElementById('remove-student')

remove_btn.addEventListener('click', () => {
    const student_list = document.getElementById('student-list')
    if (student_list.lastElementChild) {
        student_list.removeChild(student_list.lastElementChild)
    }
    else {
        alert('No students to remove!')
    }
})