function redirecionar() { //função para redirecionar para a página index2.html
    window.location.href = 'indexprof2.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const enter = document.getElementById('enter'); 
    if (enter) { 
        enter.addEventListener('click', function(event) { 
            event.preventDefault();
            const email_enter = document.getElementById('email_enter').value;  
            const password_enter = document.getElementById('password_enter').value;  
            

            const email_prof = localStorage.getItem('email_prof'); 
            const password_prof = localStorage.getItem('password_prof');  

    if (email_enter === email_prof && password_enter === password_prof) { 
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