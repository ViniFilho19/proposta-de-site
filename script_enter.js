function redirecionar() { //função para redirecionar para a página index2.html
    window.location.href = 'index2.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const enter = document.getElementById('enter');
    if (enter) { 
        enter.addEventListener('click', function(event) { 
            event.preventDefault(); 
            const email_enter = document.getElementById('email_enter').value;  
            const password_enter = document.getElementById('password_enter').value;  
            

            const email_cadastro = localStorage.getItem('email'); 
            const password_cadastro = localStorage.getItem('password');  

    if (email_enter === email_cadastro && password_enter === password_cadastro) { 
        redirecionar(); 
    } else {
        alert('Email ou senha incorretos.'); 
    }
            
        });
    }
});

function redirecionar_home(){
    window.location.href = 'index.html'
}

document.getElementById('logo').addEventListener('click', ()=>{ 
    redirecionar_home()

})