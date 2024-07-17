document.addEventListener('DOMContentLoaded', function() {
    const infoContainer = document.getElementById('infoContainer');
    const okButton = document.getElementById('okButton');
    const formHeader = document.querySelector('.form-header');


    
    infoContainer.style.display = 'flex';

    okButton.addEventListener('click', function() {
        infoContainer.style.display = 'none';
        formHeader.classList.add('show-after');

    });
});


function redirecionar() {
    window.location.href = 'indexprof2.html';
}

function redirecionar_prof() { 
    window.location.href = 'indexprof.html';
}

document.getElementById('btn_conti').addEventListener('click', function(event) { 
    event.preventDefault(); 

    const required = document.querySelectorAll('input[required]');

    let validacao = true; //criar um atributo só p validar o acesso

    required.forEach(field => { 
        if (field.value == false) { 
            validacao = false; 
        }
    });

    if (validacao) { //se for verdadeira

        const firstname = document.getElementById('firstname_prof').value;
        const email = document.getElementById('email_prof').value;           
        const password = document.getElementById('password_prof').value;

        
            localStorage.setItem('firstname', firstname);
            localStorage.setItem('email_prof', email);          
            localStorage.setItem('password_prof', password);
            redirecionar();
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});


function redirecionar_enter() { 
    window.location.href = 'index_enter2.html';
}

document.getElementById('enter').addEventListener('click', ()=> {      
    const enter = document.querySelector("#enter");
    if (enter) {
        enter.addEventListener("click", () => {
            redirecionar_enter();
        });
    }
});

function redirecionar_home(){
    window.location.href = 'index.html'
}
