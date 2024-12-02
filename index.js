const btn = document.getElementById("scroll_button")


btn.addEventListener("click", () => {
    const end_page = document.querySelector(".ending_page")

    end_page.scrollIntoView({behavior: "smooth"})
})
