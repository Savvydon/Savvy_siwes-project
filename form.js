const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const btn = document.querySelector('button');

document.addEventListener('DOMContentLoaded', function(){
    form.addEventListener('submit', function(e){
        e.preventDefault();
    
        validateInput();
    })
    
    const setError = function(element, message){
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = message;
    
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
        
    }
    
    const setSuccess = function(element){
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = '';
    
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    }
    
    const validateInput = function(){
        const userValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();
    
        if(userValue === ''){
            setError(username, 'Name is required');
        }
        else{
            setSuccess(username)
        }
    
        if(emailValue === ''){
            setError(email, 'Email is required');
        }
        else{
            setSuccess(email);
        }
        if(passwordValue === ''){
            setError(password, 'Passowrd is required');
        }
    
        else if(password2Value < 8){
            setError(password, 'Password must be more than eight character');
        }
        else{
            setSuccess(password)
        }
    
        if(password2 === ''){
            setError(password2, 'Comfirm password is required');
        }
        else if(password2Value !== passwordValue){
            setError(password2, 'Password dont match');
        }
        else{
            setSuccess(password2);
        }
        if(userValue !== '' && emailValue !== '' && passwordValue !== '' && password2Value !== ''){
            window.location.href = "login.html";
        }
    }


})