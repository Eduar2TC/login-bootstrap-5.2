
function register(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value; 

    let msg = document.querySelector('.msg');

    if(  
        name == '' || 
        email == '' || 
        password == '' ||
        confirmPassword == '' ){
        
        msg.classList.add('alert', 'alert-danger');
        msg.innerHTML =  'Please fill out all fields';
        
    }else{

        if( name.length < 3 ){
            msg.classList.add('alert', 'alert-danger');
            msg.innerHTML = 'Name must be at least 3 characters';

        }else{
            let atPos = email.indexOf('@');
            let dotPosition = email.lastIndexOf('.');
            if( atPos < 1 || dotPosition < atPos + 2 || dotPosition + 2 >= email.length ){
                msg.classList.add('alert', 'alert-danger');
                msg.innerHTML = 'Please use valid email';
            }else{
                if( password != confirmPassword ){
                    //success
                    msg.classList.add('alert', 'alert-danger');
                    msg.innerHTML = 'Password do not match';
                }else{
                    //success
                    msg.classList.add('alert', 'alert-success');
                    msg.innerHTML = name + ' is registered with ' + email;
                }
            }

        }
    }
}

document.querySelector('.form').addEventListener('submit', register, false );