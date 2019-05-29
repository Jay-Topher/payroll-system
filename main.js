let login = {
    username: "jones",
    password: '12345678'
}


function logSubmit() {
    let userName = document.getElementById("username");
    let password = document.getElementById("password");
    if(userName == login.username && password == login.password) {
        alert("Login Successful")
    } else alert("Login failed");

}

$("#adminForm").submit(function(e){
    e.preventDefault();
    logSubmit();
});

function access(form) {
    let userName = form.username.value;
    let password = form.password.value;
    let response = new XMLHttpRequest();
    response.open('post', 'http://localhost:3000/password',true);
}

function openMenu(){
    document.getElementById('side-menu').style.width = '500';
    document.getElementById('main').style.marginLeft = '250px';
}

function closeMenu(){
    document.getElementById('side-menu').style.width = '0px';
    document.getElementById('main').style.marginLeft = 'auto';
}