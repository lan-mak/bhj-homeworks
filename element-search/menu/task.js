'use strict';

let link = document.querySelectorAll('.menu__link');
let subMenu = Array.from(link);
link.forEach(action);

function action(item, num) {
    item.onclick = function() {
      let menuItem = subMenu[num].nextElementSibling;
      if(menuItem.className === 'menu menu_sub') {
        menuItem.className = 'menu menu_sub menu_active';
        return false;
      } else {
        menuItem.className = 'menu menu_sub';
        return false;
      }
    }
  }
