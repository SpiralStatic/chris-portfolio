function toogleMenu() {
    var button = document.getElementById('menubtn');
    if(button.classList.contains('showmenu')) {
        button.classList.remove('showmenu');
    }
    else {
        button.classList.add('showmenu');
    }
}
