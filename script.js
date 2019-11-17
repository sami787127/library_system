let login = false;

function openNav() {
document.getElementById("sideNav").style.width = "24%";
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


