const questions = document.querySelectorAll('.question');


questions.forEach((element) => {
    element.addEventListener('click',()=>{
        element.nextElementSibling.classList.toggle('hide');
    })
});
