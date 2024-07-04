function menuHamburguer() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#hamburguer').onclick = () => { 
            document.querySelector('nav').classList.toggle('active');
        }
    });
}