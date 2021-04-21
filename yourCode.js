
function show() {
    var div = document.getElementById("myform");
    if (div.style.display !== "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
}

function checkForm() {
    let yourname = document.getElementById('yourname').value

    let email = document.getElementById('email').value
    if (yourname.length == '' || email.length == '') {
        alert('Khong dc bo trong')
    }
}