const btnAddTime = document.querySelector('#add-time')
btnAddTime.addEventListener('click', cloneField)

function cloneField(e) {
    const scheduleItem = document.querySelector('.schedule-item').cloneNode(true)
    const fieldset = document.querySelector('#schedule-items')
    
    const inputs = scheduleItem.querySelectorAll('.input-block input')
    inputs.forEach(input => input.value = '')

    fieldset.appendChild(scheduleItem)
}