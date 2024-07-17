const navbar = document.querySelector('.header-inner-content');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
    navbar.classList.toggle("show-menu");
    console.log(navbar.classList.contains("show-menu"));
});

function redirecionar_home() {
    window.location.href = 'index2.html';
}
const materia = document.querySelector("#home")

home.addEventListener("click", ()=>{
    redirecionar_home()
})

const userIcon = document.querySelector('.nav-icon-container img[src="images/icons8-usuário-homem-com-círculo-100.png"]');

userIcon.addEventListener('click', function() {
    const firstname = localStorage.getItem('firstname');

    const existingModal = document.querySelector('.modal');
    
    // Se houver um modal existente, remova-o
    if (existingModal) {
        existingModal.remove();
    }

    createUserModal(firstname);
});

function redirecionar_profs() {
    window.location.href = 'index4.html'
}

// Adiciona o evento de clique a cada box
document.querySelectorAll('.box').forEach(function(box) {
    box.addEventListener('click', function() {
        redirecionar_profs()
    });
});

function createUserModal(firstname) {
    // Crie o modal como um elemento de div
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    // Crie um contêiner para a mensagem e o botão
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Crie a mensagem personalizada
    const greeting = document.createElement('p');
    greeting.textContent = `Olá, ${firstname}!`;

    // Crie o botão de sair
    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Sair';
    logoutButton.classList.add('logout-button'); 
    logoutButton.addEventListener('click', function() {
        // Redirecione o usuário para a primeira página
        window.location.href = 'index.html';
    });

    // Adicione a mensagem e o botão ao contêiner do modal
    modalContent.appendChild(greeting);
    modalContent.appendChild(logoutButton);

    // Adicione o contêiner do modal ao modal
    modal.appendChild(modalContent);

    // Adicione o modal ao corpo da página
    document.body.appendChild(modal);

    // Adicione um evento para remover o modal quando o usuário clicar fora dele
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.remove();
        }
    });
}