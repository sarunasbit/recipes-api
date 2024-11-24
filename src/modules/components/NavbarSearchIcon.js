const NavbarSearchIcon = () => {
    const searchIcon = document.getElementById('search-icon');
    const searchForm = document.getElementById('search-form');

    searchIcon.addEventListener('click', () => {
    searchIcon.classList.add('d-none');
    searchForm.classList.remove('d-none');
});

}

export default NavbarSearchIcon;