// 📌 Dados fictícios enquanto não conectamos ao Python
const setores = ["TI", "RH", "Produção", "Diretoria", "Financeiro"];
const acessosPorSetor = [120, 85, 200, 65, 98];

const horas = ["06h", "08h", "10h", "12h", "14h", "16h", "18h"];
const fluxoPorHora = [10, 25, 40, 70, 60, 35, 15];


document.querySelector(".botao_atualizar").addEventListener("click", () => {
    location.reload();
});

// ✅ Gráfico: Acessos por Setor
const ctxSetor = document.getElementById("graficoSetor");
new Chart(ctxSetor, {
    type: "bar",
    data: {
        labels: setores,
        datasets: [{
            label: "Acessos",
            data: acessosPorSetor,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// ✅ Gráfico: Fluxo de acessos por hora
const ctxHora = document.getElementById("graficoHora");
new Chart(ctxHora, {
    type: "line",
    data: {
        labels: horas,
        datasets: [{
            label: "Fluxo",
            data: fluxoPorHora,
            borderWidth: 2,
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// 📌 Dados fictícios de alertas por enquanto
const tipoAlerta = ["Negado", "Fora do horário", "Porta forçada", "Falha biometria"];
const qtdAlertas = [24, 7, 3, 10];

// ✅ Gráfico: Alertas de Segurança
const ctxAlertas = document.getElementById("graficoAlertas");
new Chart(ctxAlertas, {
    type: "bar",
    data: {
        labels: tipoAlerta,
        datasets: [{
            label: "Quantidade de alertas",
            data: qtdAlertas,
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});



// ✅ Atualização dos KPIs (dados fictícios também)
document.getElementById("kpi-total").innerText = 568;
document.getElementById("kpi-negado").innerText = 24;
document.getElementById("kpi-ativos").innerText = 132;
document.getElementById("kpi-alerta").innerText = 7;
