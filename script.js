const form = document.getElementById('form');
const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.spansRequired');
const emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;


//Funções para validação:


//event
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const isEmailValid = emailValidate();
    const isPasswordValid = passWordValidate(); 

    if (isEmailValid && isPasswordValid) {
        window.location.href = 'message.html';
    }
});



//função para estilo erro
function setError(index){
    inputs[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

//função para remover estilo erro
function removeError(index){
    inputs[index].style.border = '';
    spans[index].style.display = 'none';
}

//função para validar o email
function emailValidate(){
    if(emailRegex.test(inputs[0].value)){
        removeError(0);
        return true;
    }

    else{
        setError(0)
        return false
    }
}

//função para validar a senha
function passWordValidate(){
    if(inputs[1].value.length <= 6){
        spans[1].innerHTML = 'Digite uma senha com mais de 6 caracteres'
        setError(1)
        return false
    }

    else{
        removeError(1)
        return true
    }
}