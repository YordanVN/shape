const showbtn = document.getElementById('show');//задаване на бутон showbtn
const hidebtn = document.getElementById('hide');//задаване на бутон hidebtn
const hiddenMenu = document.getElementById('hiddenMenu');//задаване на променлива, която да контролира видимостта на менюто
hiddenMenu.style.display = "none";//задаваме менюто да е невидимо с javascript
hidebtn.style.display = "none";//задаваме бутонът за скриване да е невидим

showbtn.onclick = show;// когато натиснем копчето с id showbtn да се извърши функция show
hidebtn.onclick = hide;// когато натиснем копчето с id hidebtn да се извърши функция hide

function show()// функция да се появи менюто
{
    showbtn.style.display = "none";// бутонът за показване на менюто се скрива
    hiddenMenu.style.display = "grid";// менюто се показва
    hidebtn.style.display = "block";// бутонът за затваряне се показва

}
function hide()// функция да се затвори менюто
{
    showbtn.style.display = "block";//бутонът за показване на менюто се показва
    hiddenMenu.style.display = "none";//бутонът за затваряне се скрива
    hidebtn.style.display = "none";// менюто се скрива
}


