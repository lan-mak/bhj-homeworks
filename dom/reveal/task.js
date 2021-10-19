document.addEventListener('scroll', showBlock);

function showBlock() {
  let reveal = document.querySelectorAll('.reveal');

  let action = function(block) {
    const viewportHeight = window.innerHeight;
    const positionElementTop = block.getBoundingClientRect().top;
    const positionElementBottom = block.getBoundingClientRect().bottom;

    if (positionElementTop < viewportHeight ) {
      block.classList.add('reveal_active');
    }
    if (positionElementBottom <= 0 || positionElementBottom > viewportHeight) {
      block.classList.remove('reveal_active');
    }
  }

  reveal.forEach(action);
}
