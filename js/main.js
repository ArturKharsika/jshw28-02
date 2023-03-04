let doc = document;

renderMenu('.header');

function renderMenu(parentSelector) {
    let nav = {
        className: 'menu',
        tag: 'nav',
    }

    let menuList = {
        className: 'menu-list',
        tag: 'ul',
    }
    
    let menuItems = [
        {tag: 'li', title: 'Home', className: 'menu-item', classModif: 'menu-item_name'},
        {tag: 'li', title: 'About', className: 'menu-item', classModif: 'menu-item_about'},
        {tag: 'li', title: 'Blog', className: 'menu-item', classModif: 'menu-item_blog'},
        {tag: 'li', title: 'Contacts', className: 'menu-item', classModif: 'menu-item_contacts'},
    ];

    let navMenu = doc.querySelector('.header');
    navMenu.innerHTML = `<${nav.tag} class=${nav.className}></${nav.tag}`;
    let mainMenu = doc.querySelector('.menu');
    mainMenu.innerHTML = `<${menuList.tag} class=${menuList.className}></${menuList.tag}>`;
    let elementsofMenu = doc.querySelector('.menu-list');
    let menuItem = '';
    for (let i=0; i < menuItems.length; i++) {
        menuItem += `<${menuItems[i].tag} class = ${menuItems[i].className} ${menuItems[i].classModif}>${menuItems[i].title}</${menuItems[i].tag}>`;
    }

    elementsofMenu.innerHTML = menuItem;
}
