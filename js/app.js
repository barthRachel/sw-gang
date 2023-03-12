const regimentClick = document.getElementById('regimentClick');
const sousMenu = document.getElementsByClassName('sousMenu')[0];
if (regimentClick) {
    regimentClick.addEventListener('click', () => {
        if(regimentClick.innerText === "Régiments +") {
            regimentClick.innerText = "Régiments -";
            sousMenu.style.display = "flex";
        } else {
            regimentClick.innerText = "Régiments +";
            sousMenu.style.display = "none";
        }
    })
}