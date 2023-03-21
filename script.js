var list_item = document.getElementsByClassName("list_item");

function changeActive(active)
{
    for(var i = 0; i < list_item.length; i++)
    {
        list_item[i].classList.remove("active");
    }

    active.classList.add("active");
}

var main = document.getElementById("main_container");
var title = document.getElementsByClassName("list_title");
var menu = document.getElementById("menu");
var btnOpen = document.getElementsByClassName("open")[0];
var btnClose = document.getElementsByClassName("close")[0];

function eventos(){
    for (var i = 0; i < list_item.length; i++) {
        list_item[i].addEventListener("click", function () {
          changeActive(this);
        });
    }

    btnOpen.addEventListener("click", function(){
        menu.classList.add("head");
        main.style.width = "30%";

        for(var i = 0; i < title.length; i++)
        {
            title[i].style.display = "flex";
        }

        btnOpen.style.display = "none";
        btnClose.style.display = "inline"
    })

    btnClose.addEventListener("click", function(){
        menu.classList.remove("head");
        main.style.width = "7%";

        for(var i = 0; i < title.length; i++)
        {
            title[i].style.display = "none";
        }

        btnClose.style.display = "none";
        btnOpen.style.display = "inline";
    })
}

window.addEventListener("load", eventos);