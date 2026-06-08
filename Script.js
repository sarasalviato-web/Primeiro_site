// Dados que alimentam a interatividade do site
const dadosSimulacao = {
    drone: {
        titulo: "Drones de Precisão no Campo",
        impacto: "Analisa a saúde da lavoura por imagens aéreas em tempo real.",
        resultado: "🌱 <strong>Resultado:</strong> Redução de 30% no uso de defensivos agrícolas e identificação precoce de pragas."
    },
    sensor: {
        titulo: "Sensores IoT de Solo",
        impacto: "Medem a umidade, temperatura e nutrientes da terra a cada minuto.",
        resultado: "💧 <strong>Resultado:</strong> Economia de até 40% de água na irrigação, molhando a planta apenas quando necessário."
    },
    refloresta: {
        titulo: "Zonas de Amortecimento Verde",
        impacto: "Integração de árvores nativas com áreas de pastagem e plantio.",
        resultado: "🐝 <strong>Resultado:</strong> Aumento de polinizadores naturais, proteção de rios e absorção de toneladas de CO2 da atmosfera."
    }
};

// Seleção dos elementos do DOM
const botoes = document.querySelectorAll('.btn-sim');
const painelResultado = document.getElementById('sim-result');

// Adiciona evento de clique para cada botão do simulador
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        
        // Remove a classe 'active' de todos os botões
        botoes.forEach(b => b.classList.remove('active'));
        
        // Adiciona a classe 'active' no botão clicado
        botao.classList.add('active');
        
        // Pega a chave da tecnologia do atributo data-tech
        const tech = botao.getAttribute('data-tech');
        
        // Busca as informações no nosso objeto de dados
        const info = dadosSimulacao[tech];
        
        // Atualiza a caixinha de texto na tela de forma elegante
        painelResultado.innerHTML = `
            <div>
                <h4 style="color: #2e7d32; margin-bottom: 5px; font-size: 1.2rem;">${info.titulo}</h4>
                <p style="margin-bottom: 10px; color: #555;">${info.impacto}</p>
                <p>${info.resultado}</p>
            </div>
        `;
    });
});
