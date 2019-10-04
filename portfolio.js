

const enlarged = document.querySelectorAll('article');

const modal = document.getElementById('modal');

const modalcontainer = document.getElementById('modalcontainer');




enlarged.forEach(article => {
    console.log(article)
    article.addEventListener('click', (e) => {
        modal.style.display = 'block';
        
        console.log(e.srcElement.className)
        modal.classList.add(e.srcElement.className)

    })

})



modal.addEventListener('click', (e) => {
    modal.style.display = 'none';
    modal.classList = 'modal';
})
