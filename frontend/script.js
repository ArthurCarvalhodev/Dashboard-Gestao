// 📌 DADOS FICTÍCIOS GERAIS
const setores = ["TI", "RH", "Produção", "Diretoria", "Financeiro", "Logística", "Comercial", "Marketing", "Manutenção", "Segurança"];
// Dados para o gráfico de barras (Top 10 Departamentos)
const acessosPorSetor = [120, 85, 200, 65, 98, 70, 50, 45, 30, 25];

// Dados para o gráfico de linha (Top 10 Portas Mais Usadas)
const portas = ["Prt. Principal 1", "Prt. Principal 2", "Catraca 3", "Estacionamento", "Sala Servidores", "Docas", "Entrada Serviço", "Porta 10º Andar", "Catraca 1", "Prt. Principal 3"];
const frequenciaPortas = [800, 750, 600, 450, 400, 350, 300, 250, 200, 150];

// Dados para o gráfico de barra (Alertas e Segurança)
const tipoAlerta = ["Bloqueio", "Anti-Passback", "Acesso Negado", "Porta Aberta"];
const qtdAlertas = [15, 8, 30, 5];

// Dados para o gráfico de Rosca (Tipos de Acesso)
const tiposDeAcesso = ["Cartão/Biometria", "Visitante", "Crachá Provisório", "Sem Credencial"];
const dadosTiposDeAcesso = [70, 20, 5, 5];

// Dados para o gráfico de barras empilhadas (Fluxo Horário)
const labelsHoras = Array.from({length: 24}, (_, i) => 
    i < 10 ? `0${i}h` : `${i}h`
);
const entradasData = [0, 0, 0, 0, 0, 0, 0, 50, 150, 300, 350, 100, 50, 40, 30, 20, 10, 5, 0, 0, 0, 0, 0, 0];
const saidasData =   [0, 0, 0, 0, 0, 0, 0, 10, 30, 80, 200, 30, 20, 15, 10, 8, 5, 3, 0, 0, 0, 0, 0, 0];


// Função para atualizar os KPIs (chamada ao carregar e no clique do botão)
function atualizarKPIs() {
    // KPIS GERAIS
    document.getElementById("kpi-total").innerText = 568; // Pessoas no Prédio
    document.getElementById("kpi-ativos").innerText = 432; // Funcionários Hoje
    
    // IDs duplicadas corrigidas no HTML:
    document.getElementById("kpi-acessos-total").innerText = 952; // Total de Acessos (Nova ID)
    document.getElementById("kpi-alerta").innerText = 125; // Visitantes Hoje
    
    // KPIS de Fluxo (apenas simulação)
    document.querySelector(".fluxo-kpis__card--entradas .fluxo-kpis__value").innerText = 680;
    document.querySelector(".fluxo-kpis__card--saidas .fluxo-kpis__value").innerText = 272;
    document.querySelector(".fluxo-kpis__card--total .fluxo-kpis__value").innerText = 952;
    
    // KPIS de Dispositivos (apenas simulação)
    document.querySelector(".dispositivos-kpis__card--total .fluxo-kpis__value").innerText = 60;
    document.querySelector(".dispositivos-kpis__card--online .fluxo-kpis__value").innerText = 58;
    document.querySelector(".dispositivos-kpis__card--offline .fluxo-kpis__value").innerText = 2;
    document.querySelector(".dispositivos-kpis__card--online .dispositivos-kpis__percentage").innerText = "96.7%";
    document.querySelector(".dispositivos-kpis__card--offline .dispositivos-kpis__percentage").innerText = "3.3%";
}


document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // Botão de Atualizar (Simplesmente recarrega a página)
    // ----------------------------------------------------------------------
    const botaoAtualizar = document.querySelector(".container__botao__atualizar");
    if (botaoAtualizar) {
        botaoAtualizar.addEventListener("click", () => {
             // Em um ambiente de produção real, você chamaria as funções de API para buscar novos dados.
             // Aqui, simulamos com um reload simples.
             location.reload(); 
        });
    }

    // Chama a atualização de KPIs no carregamento
    atualizarKPIs();

    // ----------------------------------------------------------------------
    // Gráfico 1: Top 10 Departamentos (graficoSetor - Barra)
    // ----------------------------------------------------------------------
    const ctxSetor = document.getElementById("graficoSetor");
    if (ctxSetor) {
        new Chart(ctxSetor, {
            type: "bar",
            data: {
                labels: setores,
                datasets: [{
                    label: "Acessos",
                    data: acessosPorSetor,
                    backgroundColor: '#3b82f6', // Cor Azul
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // ----------------------------------------------------------------------
    // Gráfico 2: Top 10 Portas Mais Usadas (graficoPortas - Linha)
    // ----------------------------------------------------------------------
    const ctxPortas = document.getElementById("graficoPortas");
    if (ctxPortas) {
        new Chart(ctxPortas, {
            type: "line",
            data: {
                labels: portas,
                datasets: [{
                    label: "Frequência de Uso",
                    data: frequenciaPortas,
                    borderColor: '#10b981', 
                    backgroundColor: 'rgba(16, 185, 129, 0.2)', 
                    pointBackgroundColor: '#10b981',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3 // Suaviza a linha
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true },
                    x: { grid: { display: false } }
                }
            }
        });
    }


    // ----------------------------------------------------------------------
    // Gráfico 3: Tipos de Acesso (graficoTiposAcesso - Rosca/Doughnut)
    // ----------------------------------------------------------------------
    const ctxTiposAcesso = document.getElementById("graficoTiposAcesso"); 
    if (ctxTiposAcesso) {
        new Chart(ctxTiposAcesso, {
            type: 'doughnut',
            data: {
                labels: tiposDeAcesso,
                datasets: [{
                    label: 'Tipos de Acesso (%)',
                    data: dadosTiposDeAcesso,
                    backgroundColor: [
                        '#10b981', // Cartão - Verde
                        '#f59e0b', // Visitante - Amarelo/Laranja
                        '#3b82f6', // Provisório - Azul
                        '#ef4444'  // Sem Credencial - Vermelho
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom', 
                    },
                    title: {
                        display: false
                    }
                }
            }
        });
    }

    // ----------------------------------------------------------------------
    // Gráfico 4: Alertas e Segurança (graficoSeguranca - Barra)
    // ----------------------------------------------------------------------
    const ctxSeguranca = document.getElementById("graficoSeguranca"); 
    if (ctxSeguranca) {
        new Chart(ctxSeguranca, {
            type: "bar",
            data: {
                labels: tipoAlerta,
                datasets: [{
                    label: "Quantidade de alertas",
                    data: qtdAlertas,
                    backgroundColor: ['#ef4444', '#f59e0b', '#3b82f6', '#10b981'], // Cores diferentes
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // ----------------------------------------------------------------------
    // Gráfico 5: Fluxo Horário (fluxoHorarioChart - Barras Empilhadas)
    // ----------------------------------------------------------------------
    const ctxFluxo = document.getElementById("fluxoHorarioChart");
    if (ctxFluxo) {
        new Chart(ctxFluxo, {
            type: 'bar', 
            data: {
                labels: labelsHoras,
                datasets: [
                    {
                        label: 'Entradas',
                        data: entradasData,
                        backgroundColor: '#10b981', // Verde
                        stack: 'stack0', 
                    },
                    {
                        label: 'Saídas',
                        data: saidasData,
                        backgroundColor: '#ef4444', // Vermelho
                        stack: 'stack0', 
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom', 
                        labels: {
                            usePointStyle: true,
                            boxWidth: 8,
                        }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    }
                },
                scales: {
                    x: {
                        stacked: true, // Empilha no eixo X
                        grid: { display: false }
                    },
                    y: {
                        stacked: true, // Empilha no eixo Y
                        beginAtZero: true
                    }
                }
            }
        });
    }

});