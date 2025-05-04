const links = document.querySelectorAll(`.navbar_links`)
const sections = document.querySelectorAll(`section`)

links.forEach(link => {
    link.addEventListener(`click`, function(){
        links.forEach(l =>{
            l.classList.remove(`active`)
        })
        link.classList.add(`active`)
    })
});

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                links.forEach(link =>{
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === entry.target.id) {
                        link.classList.add("active");
                      }
                })
            }
        })
    },
    {
        threshold :0.6,
    }
)
sections.forEach(section => {
    observer.observe(section);
})