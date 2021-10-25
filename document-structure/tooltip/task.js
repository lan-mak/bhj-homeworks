let link = document.querySelectorAll('.has-tooltip');
let tooltip = document.querySelector('.tooltip');

link.forEach(action);

function action(item) {
  item.addEventListener('click', onClick);

  function onClick(event) {
    event.preventDefault();
    tooltip.classList.remove('tooltip_active');
    let element = event.target;
    if (!tooltip.classList.contains('tooltip_active')) {
      tooltip.classList.add('tooltip_active');
      tooltip.innerHTML = `${element.title}`;
      tooltip.style.top = `${element.getBoundingClientRect().top + element.getBoundingClientRect().height}px`;
      tooltip.style.left = `${element.getBoundingClientRect().left}px`;
    } else {
      tooltip.classList.remove('tooltip_active');
    }
  }
}
