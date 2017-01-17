function toggleMenu() {
    var links = document.getElementById('navlinks');
    if(links.classList.contains('showmenu')) {
        links.classList.remove('showmenu');
        links.classList.add('hidemenu');
    }
    else {
        links.classList.remove('hidemenu');
        links.classList.add('showmenu');
    }
}
