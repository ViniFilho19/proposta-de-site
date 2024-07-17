const navbar = document.querySelector('.header-inner-content');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {                    
    navbar.classList.toggle("show-menu");
    console.log(navbar.classList.contains("show-menu"));
});

function redirecionar_materia() {
    window.location.href = 'index3.html';
}
const materia = document.querySelector("#materia")

materia.addEventListener("click", ()=>{
    redirecionar_materia()
})

function redirecionar_bate_papo() {
    window.location.href = 'batepapoaluno.html';
}

const userIcon = document.querySelector('.nav-icon-container img[src="images/icons8-usuário-homem-com-círculo-100.png"]'); 

userIcon.addEventListener('click', function() { 
    const firstname = localStorage.getItem('firstname'); 

    const existingModal = document.querySelector('.modal');
    
   
    if (existingModal) {
        existingModal.remove();
    }

    createUserModal(firstname);
});

function createUserModal(firstname) {
    
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    
    const greeting = document.createElement('p');
    greeting.textContent = `Olá, ${firstname}!`;

    
    const studentViewButton = document.createElement('button');
    studentViewButton.textContent = 'Visão Estudante';
    studentViewButton.classList.add('student-view-button'); 

    
    const teacherViewButton = document.createElement('button');
    teacherViewButton.textContent = 'Visão Prof/Educ';
    teacherViewButton.classList.add('teacher-view-button'); 
    teacherViewButton.addEventListener('click', ()=> { 
        window.location.href = 'index_enter2.html';
    });
    

   
    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Sair';
    logoutButton.classList.add('logout-button'); 
    logoutButton.addEventListener('click', function() { 
        window.location.href = 'index.html';
    });
   
    
    modalContent.appendChild(greeting);
    modalContent.appendChild(studentViewButton);
    modalContent.appendChild(teacherViewButton);
    modalContent.appendChild(logoutButton);

   
    modal.appendChild(modalContent);

    
    document.body.appendChild(modal);
    

    modal.addEventListener('click', function(event) {
        if (event.target === modal) { 
            modal.remove(); 
            modalContent.remove(); 
        }
    });
}
