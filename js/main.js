// Hambarger 
const bar = document.querySelector('.fa-bars');
const menue = document.querySelector('.main .container .nav-left ul');

console.log(menue);

bar.onclick = () => {
    menue.classList.toggle('active')
}