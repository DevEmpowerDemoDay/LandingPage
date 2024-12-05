const btn = document.getElementById("scroll_button")
const mockup = document.querySelector(".mockup_cellphone")


btn.addEventListener("click", () => {
    const target = document.querySelector(".video_page_container")

    target.scrollIntoView({behavior: "smooth"})
})


const back_to = document.getElementById("back_to")

back_to.addEventListener("click", () => {
    mockup.src = "assets/03.png"
})