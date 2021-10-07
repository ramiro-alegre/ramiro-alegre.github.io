import { toggleMenu, optionsMenu } from "./header.js";

//--HEADER--// 
// selector
let menu = document.querySelector('.hamburger');
//--FIN HEADER--//

document.addEventListener('DOMContentLoaded', eventListeners);

function eventListeners() {
    //--HEADER--// 
    // event
    menu.addEventListener('click', toggleMenu, false);
    optionsMenu();
    //--FIN HEADER--//
}