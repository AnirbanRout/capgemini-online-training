const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    const fruit_name = document.getElementById('fruit_name').value
    const list = document.getElementById('fruits_list')
    const option = document.createElement('option')
    option.text = fruit_name
    list.add(option)
})

document.getElementById('btn2').addEventListener('click', () => {
    const list = document.getElementById('fruits_list')
    list.length = 0;
})

