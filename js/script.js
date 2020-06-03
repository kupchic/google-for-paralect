
const profile = document.getElementsByClassName('account-profile')[0];
const profileIcon = document.getElementsByClassName('profile-logo')[0];
const socMenu = document.getElementsByClassName('soc-list-wrp')[0];
const menuIcon = document.getElementsByClassName('menu-grid')[0];
const menuButton = document.getElementsByClassName('menu-button')[0];
const sideMenuWrapper = document.querySelector('.mobile-menu-wrp');
const sideMenu = document.querySelector('.mobile-menu');

window.addEventListener('click', () => {
    let target = event.target;
    // console.log(target.className);
    if (target.className.includes('profile-inside') || target.className === 'profile-logo') {
        profile.style.display = 'flex';
        profileIcon.classList.add("checked");
    } else if (target.className.includes('profile-logo checked') || target.className !== 'profile-logo') {
        profile.style.display = 'none';
        profileIcon.classList.remove("checked");
    }

    if (target.className.includes('soc-list-inside') || target.className === 'menu-grid') {
        socMenu.style.display = 'block';
        menuIcon.classList.add("checked");
    } else if (target.className.includes('menu-grid checked') || target.className !== 'menu-grid') {
        socMenu.style.display = 'none';
        menuIcon.classList.remove("checked");
    }

    if (target.className === 'menu-button') {

        sideMenuWrapper.style.display = 'block';
        sideMenuWrapper.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        setTimeout(function () {
            sideMenu.style.transform = 'translateX(250px)';
        },10);
    } else if (target.className === 'mobile-menu-wrp' || target.id === 'google-mobile-logo') {
        sideMenu.style.transform = 'translateX(0px)';
        sideMenuWrapper.style.backgroundColor = "rgba(0, 0, 0, 0)";
        setTimeout(function () {
            sideMenuWrapper.style.display = 'none';
        },500);
    }

});
