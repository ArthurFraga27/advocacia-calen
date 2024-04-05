const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

function avisar(){
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const caso = document.getElementById('caso').value;
    if(nome === '' || telefone === '' || caso === ''){
        window.alert('Por Gentileza, preencha os Dados corretamente!')
    }else{
        window.alert('Entraremos em contato o quanto antes')
    }
}