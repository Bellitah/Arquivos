const sidebarItem = document.querySelectorAll('.sidebar .item');
const tableRows = document.querySelectorAll('.main table tbody tr');

const menuBtn = document.getElementById('menu-btn');
const leftSection = document.querySelector('.left-section');
let isMenuOpen = false;

sidebarItem.forEach(sidebarItem =>{
    sidebarItem.addEventListener('click', () =>{
        sidebarItem.forEach(item =>{
            item.classList.remove('active');
        });
        sidebarItem.classList.add('active');
    });
});

tableRows.forEach(tableTr =>{
    tableTr.addEventListener('click', () =>{
        tableRows.forEach(item =>{
            item.classList.remove('selected');
        });
        tableTr.classList.add('selected');
    });
});

menuBtn.addEventListener('click', () => {
    if(!isMenuOpen) {
        leftSection.style.left = '0';
    } else {
        leftSection.style.left = '-160px';
    }
    isMenuOpen = !isMenuOpen;
});


/* 54:20