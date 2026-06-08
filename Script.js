const treeArea = document.getElementById('tree-area');
const apple = document.getElementById('apple');
const modal = document.getElementById('info-modal');
const factText = document.getElementById('fact-text');
const closeBtn = document.querySelector('.close-btn');

const fatosAgro = [
    "A tecnologia via satélite permite plantar com precisão milimétrica!",
    "Drones monitoram a saúde das plantas sem precisar pisar no solo.",
    "Sensores subterrâneos avisam a hora exata que a planta sente sede.",
    "Bio-fertilizantes usam a força da natureza para nutrir a colheita.",
    "A agricultura digital ajuda a produzir mais alimentos em menos espaço."
];

// Evento ao clicar na árvore
treeArea.addEventListener('click', () => {
    // 1. Faz a árvore balançar
    treeArea.classList.add('shake');
    
    // 2. Espera um pouquinho e faz a maçã cair
    setTimeout(() => {
        apple.classList.add('fall');
    }, 300);

    // 3. Após a maçã cair (1.5 segundos), mostra o modal com um fato aleatório
    setTimeout(() => {
        const fatoAleatorio = fatosAgro[Math.floor(Math.random() * fatosAgro.length)];
        factText.innerText = fatoAleatorio;
        modal.classList.remove('hidden');
    }, 1500);
});

// Remove a animação de balanço quando ela termina para poder clicar de novo
treeArea.addEventListener('animationend', (e) => {
    if (e.animationName === 'shakeTree') {
        treeArea.classList.remove('shake');
    }
});

// Botão de fechar modal
closeBtn.onclick = () => resetApp();

// Função para resetar a brincadeira
function resetApp() {
    modal.classList.add('hidden');
    apple.classList.remove('fall');
}
