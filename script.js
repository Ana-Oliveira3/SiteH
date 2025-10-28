document.getElementById('login-btn').addEventListener('click', function() {
    const name = document.getElementById('name-input').value.trim();
    if (name.toLowerCase() === 'higor') {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
});

document.getElementById('card').addEventListener('click', function() {
    // Esconde a carta após o clique
    document.getElementById('card').style.display = 'none';
    
    // Jorra corações
    const heartsContainer = document.getElementById('hearts-container');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 3000); // Remove após animação
    }
    
    // Mostra mensagem
    document.getElementById('message').style.display = 'block';
});