function login_input () {
    var username = (document.getElementById("input1").value);
    var password = (document.getElementById("input2").value);

    if(username === 'mielaeusebio' && password === '12345678') {
        window.alert("Welcome, Miela Eusebio from 9T!");
        document.location.href = "notebooks.html"; 
        // Reference: https://stackoverflow.com/questions/40539097/redirect-user-to-another-html-page-if-the-condition-is-true from the user "skav" on November 11 2016
    }

    else {
        window.alert('Your username and/or password is wrong.');
    }

}

function login_instructions(){
    window.alert('Please input your username and password in the corresponding text boxes. Please be aware of typos!');
}

function nb_input(){
for (let i = 0; i < 16; i++) {
  window.alert ("This page isn't loading. Please wait for the countdown to end while we work in the background.  " + "Counter:"+ i);
} //Reference: W3Schools.com. (n.d.). https://www.w3schools.com/js/js_loop_for.asp
}