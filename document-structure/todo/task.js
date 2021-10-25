let form = document.getElementById('tasks__form')
console.log(form)

form.addEventListener('submit', action) 

function action(event) {
  const text = document.querySelector('.tasks__input').value.trim()
  if(text !== '') {
    console.log('привет')
  }
}
