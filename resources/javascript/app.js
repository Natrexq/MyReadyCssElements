const App = () => {
    // alert("test");
}

    const HamburgerMenu = () => {
        const hamburgerButton = document.querySelector("#hamb");
        const menu = document.querySelector("#menu");
        hamburgerButton.addEventListener("click", () => {
            menu.classList.toggle("menu-showed");
        })
    }

HamburgerMenu();
// App();