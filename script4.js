const navbar = document.querySelector('.header-inner-content');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
    navbar.classList.toggle("show-menu");
    console.log(navbar.classList.contains("show-menu"));
});

function redirecionar_home() {
    window.location.href = 'index2.html';
}
const home = document.querySelector("#home")

home.addEventListener("click", ()=>{
    redirecionar_home()
})

function redirecionar_materia() {
    window.location.href = 'index3.html';
}
const materia = document.querySelector("#materia")

materia.addEventListener("click", ()=>{
    redirecionar_materia()
})

const userIcon = document.querySelector('.nav-icon-container img[src="images/icons8-usuário-homem-com-círculo-100.png"]');

userIcon.addEventListener('click', function() {
    const firstname = localStorage.getItem('firstname');

    const existingModal = document.querySelector('.modal');
    
   
    if (existingModal) {
        existingModal.remove();
    }

    createUserModal(firstname);
});

function redirecionar_bate_papo() {
    window.location.href = 'batepapoaluno.html'// PRA REDIRECIONAR PARA A PÁGINA DO BATE-PAPO, DEIXE O HTML NESSE MESMO NOME, OU MUDA FDS
}


document.querySelectorAll('.box_p').forEach(function(box) { 
    box.addEventListener('click', function() {
        const nome = box.querySelector('p').textContent;
        const imagem = box.querySelector('img').src;

        localStorage.setItem('nome', nome);
        localStorage.setItem('imagem', imagem);
        redirecionar_bate_papo()
    });
});

function createUserModal(firstname) {
   
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    
    const greeting = document.createElement('p');
    greeting.textContent = `Olá, ${firstname}!`;

    
    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Sair';
    logoutButton.classList.add('logout-button'); 
    logoutButton.addEventListener('click', function() {
        
        window.location.href = 'index.html';
    });

    
    modalContent.appendChild(greeting);
    modalContent.appendChild(logoutButton);

 
    modal.appendChild(modalContent);

    
    document.body.appendChild(modal);

    
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.remove();
        }
    });
}