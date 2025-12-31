document.addEventListener('DOMContentLoaded', () => {
    fetch('./data/servicios.json')
        .then(res => res.json())
        .then(data => {
            const contenedor = document.getElementById('contenedor-servicios');

            data.forEach(s => {
                const card = document.createElement('div');
                card.className = 'card';

                card.innerHTML = `
                    <img src="${s.imagen}">
                    <div class="info">
                        <h3>${s.nombre}</h3>
                        <p>${s.descripcion}</p>
                        <a href="https://wa.me/51999999999" class="btn">
                            Reservar por WhatsApp
                        </a>
                    </div>
                `;

                contenedor.appendChild(card);
            });
        });
});

function toggleMenu() {
    document.getElementById('menu-list').classList.toggle('show');
}
