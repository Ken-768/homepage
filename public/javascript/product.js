document.addEventListener('DOMContentLoaded', function(){
    const tabs = document.getElementsByClassName('product-category__tab');
    for(let tab = 0; tab < tabs.length; tab++) {
        tabs[tab].addEventListener('click', tabSwitch);
    }

    function tabSwitch() {
        document.getElementsByClassName('is-active')[0].classList.remove('is-active');
        this.classList.add('is-active');
        document.getElementsByClassName('is-show')[0].classList.remove('is-show');
        const arrayTabs = Array.prototype.slice.call(tabs);
        const index = arrayTabs.indexOf(this);
        document.getElementsByClassName('panel-group__content')[index].classList.add('is-show');
    }
});