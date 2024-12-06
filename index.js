const btn = document.querySelector("#scroll_button")

const mockups = document.querySelectorAll(".mockup_cellphone");

mockups.forEach(mockup => {
    mockup.addEventListener("mouseover", (event) => {
        // Remove a classe 'active' de todos os elementos
        mockups.forEach(item => item.classList.remove("active"));
        // Adiciona a classe 'active' ao elemento clicado
        event.target.classList.toggle("active");
    });
});

btn.addEventListener("click", () => {
    const target = document.querySelector(".video_page_container")

    target.scrollIntoView({ behavior: "smooth" })
})
