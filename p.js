const links = document.querySelectorAll(`.navbar_links`)

links.forEach(link => {
    link.addEventListener(`click`, function(){
        links.forEach(l =>{
            l.classList.remove(`active`)
        })
        link.classList.add(`active`)
    })
});