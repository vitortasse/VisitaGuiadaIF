const dados = [
    { ini: "13:30", fim: "14:00", atividade: "Recepção", local: "Auditório / Bloco A", cor: "#95a5a6", video: "https://www.youtube.com/@ifsudestemgcampusjuizdefora" },
    { ini: "14:00", fim: "14:15", atividade: "Baja", local: "Bloco G", cor: "#e74c3c", video: "https://youtu.be/8_PKwso45KM?si=bfL2ieoJNTfrk0xE" },
    { ini: "14:15", fim: "14:30", atividade: "Edificações", local: "Bloco H", cor: "#e67e22", video: "http://www.youtube.com/watch?v=f9_ZZfRyIeA" },
    { ini: "14:30", fim: "14:45", atividade: "Metalurgia", local: "Bloco F", cor: "#1abc9c", video: "http://www.youtube.com/watch?v=W2RlB_SClN8" },
    { ini: "14:45", fim: "15:15", atividade: "Elétrica / Eletrônica", local: "Bloco I", cor: "#f1c40f", video: "http://www.youtube.com/watch?v=RiK-m5K6bqY" },
    { ini: "15:20", fim: "15:35", atividade: "Desenvolvimento de Sistemas", local: "Bloco B", cor: "#8e44ad", video: "http://www.youtube.com/watch?v=AoMoUVmf-io" },
    { ini: "15:35", fim: "16:00", atividade: "Lanche", local: "Bloco B", cor: "#95a5a6", video: null },
    { ini: "16:00", fim: "16:15", atividade: "Designer de Móveis", local: "Bloco N", cor: "#2c3e50", video: "http://www.youtube.com/watch?v=oZUOFXGSnn8" },
    { ini: "16:15", fim: "16:30", atividade: "Eventos", local: "Bloco N", cor: "#27ae60", video: "http://www.youtube.com/watch?v=UktAp_FB1Pg" }
];

function atualizarPagina() {
    const agora = new Date();
    const horaMin = agora.getHours() * 60 + agora.getMinutes();
    const container = document.getElementById('cronograma');

    container.innerHTML = dados.map(item => {
        const [h1, m1] = item.ini.split(':').map(Number);
        const [h2, m2] = item.fim.split(':').map(Number);
        const totalIni = h1 * 60 + m1;
        const totalFim = h2 * 60 + m2;
        const ativo = horaMin >= totalIni && horaMin < totalFim;

        let linkVideo = '';
        if (item.video) {
            linkVideo = `
                <a href="${item.video}" target="_blank" rel="noopener" class="btn-explore">
                    <svg width="18" height="18" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    EXPLORE AQUI!
                </a>
            `;
        }

        return `
            <div class="item ${ativo ? 'active' : ''}">
                <div class="card" style="border-left-color: ${item.cor}">
                    <div class="horario-row">
                        <span class="horario-pill">${item.ini} - ${item.fim}</span>
                        <span class="badge-agora">AGORA</span>
                    </div>
                    <h2 class="titulo">${item.atividade}</h2>
                    <div class="local-info">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        ${item.local}
                    </div>
                    ${linkVideo}
                </div>
            </div>
        `;
    }).join('');
}

atualizarPagina();
setInterval(atualizarPagina, 30000);