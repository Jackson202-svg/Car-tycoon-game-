let gameState = {
    balance: 10000,
    cars: [],
    botsActive: 0
};

// Update UI
function updateUI() {
    document.getElementById('balance').innerText = gameState.balance;
    document.getElementById('car-count').innerText = gameState.cars.length;
}

// Load Loading Screen Logic
window.addEventListener('load', () => {
    // Inject the loading.html into the overlay
    fetch('loading.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('loading-overlay').innerHTML = data;
            setTimeout(() => {
                document.getElementById('loading-overlay').style.display = 'none';
            }, 2000); // 2-second fake load
        });
    
    updateUI();
});

// Logic for buying/selling would go here...
