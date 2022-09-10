
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let scroll1=Number(scroll);
    if (scroll1>=180){
     document.getElementById("scroll-logo").style.opacity = "1";
     document.getElementById("scroll-logo-2").style.opacity = "1";
    }
    else {
     document.getElementById("scroll-logo").style.opacity = "0";
     document.getElementById("scroll-logo-2").style.opacity = "0";
    }
    
});
let obje = document.getElementById("drop-container-id");
function show_me_hide(){
    if (obje.style.display === ""){
        obje.style.display = "inline-block";
        document.getElementById("arrow").style.transform = "rotate(90deg)";
    }
    else if (obje.style.display === "inline-block"){
        obje.style.display = "";
        document.getElementById("arrow").style.transform = "rotate(-90deg)";
    }
}
let contentMenu = document.getElementById("phone-navbar-table-id");
function show_me_hide_me(){
    if (contentMenu.style.display == ""){
        contentMenu.style.display = "block";
        document.getElementById("arrow3-id").style.transform = "rotate(90deg)";
    }
    else if (contentMenu.style.display == "block"){
        contentMenu.style.display = "";
        document.getElementById("arrow3-id").style.transform = "rotate(-90deg)";
    }
}


let stylesheet=document.getElementById("stylesheet-dark");
function swap_sheet(){
    if (stylesheet.getAttribute("href")=="style/style.css"){
        stylesheet.setAttribute("href", "style/style-2.css");
        to_light();
    }
    else if (stylesheet.getAttribute("href")=="style/style-2.css"){
        stylesheet.setAttribute("href", "style/style.css");
        to_dark();
    }
}

let stylesheet2=document.getElementById("stylesheet-dark");
function swap_sheet_2(){
    if (stylesheet.getAttribute("href")=="style/style.css"){
        stylesheet.setAttribute("href", "style/style-2.css");
        to_light_2();
    }
    else if (stylesheet.getAttribute("href")=="style/style-2.css"){
        stylesheet.setAttribute("href", "style/style.css");
        to_dark_2();
    }
}


function logo_link_swap_large(){
    console.log("clicked\n");
    window.open("index.html", "");
    if (document.getElementById("stylesheet-dark").getAttribute("href")=="style/style.css")
    {
        document.getElementById("stylesheet-dark").setAttribute("href","style/style.css");
        to_dark();
    }
    else if (document.getElementById("stylesheet-dark").getAttribute("href")=="style/style-2.css")
    {
        document.getElementById("stylesheet-dark").setAttribute("href","style/style-2.css");
        to_light();
    }
}
function logo_link_swap_small(){
    if (document.getElementById("stylesheet-dark").getAttribute("href")=="style/style.css")
    {
        to_dark_2();
    }
    else if (document.getElementById("stylesheet-dark").getAttribute("href")=="style/style-2.css")
    {
        to_light_2();
    }
}



function to_light(){
    document.getElementById("mainlogo1").setAttribute("src", "./logos/haryana9.png");
    document.getElementById("mainlogo").setAttribute("src", "./logos/haryana4-light.png");
    document.getElementById("small-screen-logo").setAttribute("src", "./logos/haryana-light.png");
    document.getElementById("scroll-logo").style.color = "#efd033";
    document.getElementById("light-dark-button").textContent = "Dark Mode";
    document.getElementById("favicon").setAttribute("href", "favicons/favicon_blue_blue.ico");
}
function to_light_2(){
    document.getElementById("mainlogo1").setAttribute("src", "./logos/haryana9.png");
    document.getElementById("mainlogo").setAttribute("src", "./logos/haryana4-light.png");
    document.getElementById("small-screen-logo").setAttribute("src", "./logos/haryana-light.png");
    document.getElementById("scroll-logo").style.color = "#efd033";
    document.getElementById("light-dark-button-2").textContent = "Dark Mode";
}
function to_dark(){
    document.getElementById("mainlogo1").setAttribute("src", "./logos/haryana7.png");
    document.getElementById("mainlogo").setAttribute("src", "./logos/haryana4.png");
    document.getElementById("small-screen-logo").setAttribute("src", "./logos/haryana.png");
    document.getElementById("scroll-logo").style.color = "#e03c3c";
    document.getElementById("light-dark-button").textContent = "Light Mode";
    document.getElementById("favicon").setAttribute("href", "favicons/favicon.ico");
}
function to_dark_2(){
    document.getElementById("mainlogo1").setAttribute("src", "./logos/haryana7.png");
    document.getElementById("mainlogo").setAttribute("src", "./logos/haryana4.png");
    document.getElementById("small-screen-logo").setAttribute("src", "./logos/haryana.png");
    document.getElementById("scroll-logo").style.color = "#e03c3c";
    document.getElementById("light-dark-button-2").textContent = "Light Mode";
}


$(window).on('unload', function(){
    $(window).scrollTop(0);
 });

if(error.message == 'Something went wrong'){
}
