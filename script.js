function redirecionar() {
    window.location.href = 'index2.html';
}

function redirecionar_prof() { 
    window.location.href = 'indexprof.html';
}

document.getElementById('btn_conti').addEventListener('click', function(event) { 
    event.preventDefault(); 

    const required = document.querySelectorAll('input[required]'); 

    let validacao = true; 

    required.forEach(field => { 
        if (field.value == false) { 
            validacao = false; 
        }
    });

    if (validacao) { //se for verdadeira

        const firstname = document.getElementById('firstname').value;
        const email = document.getElementById('email').value;           
        const password = document.getElementById('password').value;

        const email_cadastro = localStorage.getItem('email');
        const password_cadastro = localStorage.getItem('password');

        if(email === email_cadastro && password === password_cadastro){
            alert("Essa conta já existe")

        } else {
            localStorage.setItem('firstname', firstname);
            localStorage.setItem('email', email);          
            localStorage.setItem('password', password);
            redirecionar(); 
        }
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});

function redirecionar_enter() { 
    window.location.href = 'index_enter.html';
}

document.getElementById('enter').addEventListener('click', ()=> {       
    const enter = document.querySelector("#enter");
    if (enter) {
        enter.addEventListener("click", () => {
            redirecionar_enter();
        });
    }
});

