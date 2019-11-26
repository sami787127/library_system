let login = false;
let closedp = true;

function closeEverything()
{
    if(closedp){
        document.getElementById("inputDp").style.display="none";
    }
    else{
        closedp = true;
    }
}

function openNav() {
document.getElementById("sideNav").style.width = "24%";
document.getElementById("sideNav").style.boxShadow = "5px 10px 18px rgba(0,0,0,0.16)";
}

function closeNav() {
document.getElementById("sideNav").style.width = "0";
}

function setlogin()
{
    login = true;
    accDisplaySelect();
}
function setlogout()
{
    login = false;
    accDisplaySelect();
}


function displayMatches()
{

    let input, filterUC, list, items, a, txt;
    input = document.getElementById("input");
    list = document.getElementById("books");
    items = list.getElementsByTagName("li");
    if(input.value!="")
    {
        document.getElementById("inputDp").style.display="block";
        inputUC = input.value.toUpperCase();
        for (let i = 0; i < items.length; i++) {
            a = items[i].getElementsByTagName("a")[0];
            txt = a.textContent || a.innerText;
            if (txt.toUpperCase().indexOf(inputUC) > -1) {
                items[i].style.display = "block";
            } else {
                items[i].style.display = "none";
            }
        }
    }
    else{
        document.getElementById("inputDp").style.display="none";
        for(let i = 0; i < items.length; i++)
        {
            items[i].style.display = "none";
        }
    }
    closedp = false;
}


function accDisplaySelect()
{
    if(login){
        document.getElementById("profile").style.display="block";
        document.getElementById("loginPrompt").style.display="none";
        document.getElementById("logout").style.display="block";
        document.getElementById("cdr").style.display="block";
    }
    else{
        document.getElementById("profile").style.display="none";
        document.getElementById("loginPrompt").style.display="block";
        document.getElementById("logout").style.display="none";
        document.getElementById("cdr").style.display="none";
    }
}


