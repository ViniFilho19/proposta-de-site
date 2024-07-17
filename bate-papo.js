document.addEventListener('DOMContentLoaded', function() {
    const imagem = localStorage.getItem('imagem');
      const localImagem = document.getElementById('local-imagem');
        const img_batepapo = document.createElement('img');
        img_batepapo.src = imagem;
        img_batepapo.classList.add('class_prof');
        localImagem.appendChild(img_batepapo);

        const nome = localStorage.getItem('nome');
        const nomeElemento = document.getElementById('nome');
        nomeElemento.textContent = nome;
 });

 function redirecionar_home(){
  window.location.href = 'index2.html'
}

 function redirecionar_home_prof(){
  window.location.href = 'indexprof2.html'
}



  