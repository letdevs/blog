//Responsive Menu
function responSlide (){
    const responsiveBtn = document.querySelector('.menu-btn');
    const responsiveClass = document.querySelector('.menu-ul');
    responsiveBtn.addEventListener('click', function (){
        responsiveClass.classList.toggle('menu-ul-responsive');
        this.classList.toggle ('toggle');
    
})}
responSlide();