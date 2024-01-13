const form = document.getElementById('myForm');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const uname = document.getElementById('uname').value;
    const email = document.getElementById('email').value;
    const pnumber = document.getElementById('pnumber').value;
    const password1 = document.getElementById('password1').value;
    const password11 = document.getElementById('password11').value;


    if(fname && lname && uname && email && pnumber && password1 && password11 === ""){
        displayMessage('please fill', 'error')
    }


    function displayMessage(message, type){
        const messageContent = document.createElement('div');
        messageContent.textContent = message;
        messageContent.classList.add(type);
        const form = document.getElementById('myForm');
        form.appendChild(messageContent)
    }
})