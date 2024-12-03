const btn = document.getElementById("scroll_button")


btn.addEventListener("click", () => {
    const target = document.querySelector(".video_page_container")

    target.scrollIntoView({behavior: "smooth"})
})
