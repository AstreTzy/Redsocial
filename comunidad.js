document.addEventListener("DOMContentLoaded", () => {
    
    // 1. CAMBIO DE PESTAÑAS (CÍRCULOS)
    const tabs = document.querySelectorAll(".tab-item");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelector(".tab-item.active").classList.remove("active");
            tab.classList.add("active");
            console.log(`Cambiando al círculo: ${tab.textContent}`);
            // Aquí se filtrarán los posts del backend en el futuro
        });
    });

    // 2. SISTEMA DE LIKES (FEEDBACK VISUAL)
    const likeButtons = document.querySelectorAll(".like-btn");
    likeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const icon = btn.querySelector(".material-icons-round");
            const countSpan = btn.querySelector("span:not(.material-icons-round)");
            let currentLikes = parseInt(countSpan.textContent);

            if (icon.textContent === "favorite_border") {
                icon.textContent = "favorite";
                btn.style.color = "var(--neon-magenta)";
                countSpan.textContent = currentLikes + 1;
            } else {
                icon.textContent = "favorite_border";
                btn.style.color = "var(--text-muted)";
                countSpan.textContent = currentLikes - 1;
            }
        });
    });

    // 3. VENTANA MODAL PARA NUEVO POST
    // Creamos la estructura de la ventana flotante dinámicamente
    const modalHTML = `
        <div id="postModal" class="modal-overlay">
            <div class="modal-content anime-card">
                <div class="modal-header">
                    <h3>CREAR PUBLICACIÓN</h3>
                    <button id="closeModal" class="btn-icon-more"><span class="material-icons-round">close</span></button>
                </div>
                <textarea id="postText" placeholder="¿Qué está pasando en el mundo anime/rol?..." rows="4"></textarea>
                <div class="modal-footer">
                    <button class="action-btn"><span class="material-icons-round">image</span></button>
                    <button id="submitPostBtn" class="anime-btn-primary">PUBLICAR</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);

    const addBtn = document.querySelector(".btn-add");
    const modal = document.getElementById("postModal");
    const closeModal = document.getElementById("closeModal");

    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("open");
    });

    closeModal.addEventListener("click", () => {
        modal.classList.remove("open");
    });
});
