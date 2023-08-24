const nav = document.getElementById('nav_nav');
const home = document.getElementById('home');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        nav.style.backgroundColor = 'black';
        nav.style.height = '5.5rem';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.height = '5rem';
    }
});




function adjustLayout() {
    var ul = document.querySelector('ul');
    var manu = document.querySelector('#manu');
    if (window.innerWidth <= 1150) {
        ul.style.display = 'none';
        manu.style.color = 'white';
        manu.style.margin = '0 2rem';
        manu.style.fontSize = '2rem';
    } else {
        ul.style.display = '';
        ul.style.flexDirection = '';
    }
}

window.addEventListener('load', adjustLayout);
document.addEventListener('DOMContentLoaded', adjustLayout);
window.addEventListener('resize', adjustLayout);





var ul = document.querySelector('ul');
var manu = document.querySelector('#manu');
var header_div = document.querySelector('#header_div');
var logo = document.querySelector('.logo');

manu.addEventListener('click', () => {
    if (ul.style.display === 'none') {
        ul.style.display = 'flex';
        ul.style.flexDirection = 'column';
        ul.style.background = 'black';
        ul.style.width = '100vw';
        ul.style.height = '100vh';
        ul.style.justifyContent = 'center';
        ul.style.alignItems = 'center';
        ul.style.fontSize = '2rem';
        manu.style.position = 'absolute';
        manu.style.right = '0rem';
        manu.style.top = '1.6rem';
        logo.style.position = 'absolute';



        ul.style.margin = '0';
        ul.style.padding = '0';

        var listItems = ul.getElementsByTagName('li');
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].style.margin = '0';
            listItems[i].style.padding = '0';
        }
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].addEventListener('click', () => {
                ul.style.display = 'none';
            });
        }


    }
    else {
        ul.style.display = 'none';
    }
});






function sendEmail() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("no").value;
    var email = document.getElementById("email").value;
    var explanation = document.getElementById("explain").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText); // Show a response from the server
        }
    };

    var data = "name=" + encodeURIComponent(name) + "&phone=" + encodeURIComponent(phone) +
        "&email=" + encodeURIComponent(email) + "&explanation=" + encodeURIComponent(explanation);

    xhr.send(data);

    name.value = "";
    phone.value = "";
    email.value = "";
    explanation.value = "";
}