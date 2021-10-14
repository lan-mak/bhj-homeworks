'use strict';

let tabs = document.querySelectorAll('.tab')
let tabsContent = document.querySelectorAll('.tab__content')
tabs.forEach(tab)


function tab(item, index) {

    let targetTab = null
    item.addEventListener('click', onClick)

    function onClick(event) {
        let currentActiveTab = document.querySelector('.tab_active')
        targetTab = event.target

        if (targetTab.className !=='tab_active'){
            currentActiveTab.className = 'tab';
            targetTab.className = 'tab_active';
            switchContent()
        }
    }

    function switchContent () {
        let currentActiveContent = document.querySelector('.tab__content_active');
        currentActiveContent.className = 'tab__content';
        tabsContent[index].className= 'tab__content tab__content_active'
    }
}
