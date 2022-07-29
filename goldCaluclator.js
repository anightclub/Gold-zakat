function zakatCalculation() {
    let goldValue = document.getElementById('gold').value;
    if (goldValue > 7.5) {
        document.getElementById('zakat').innerText = goldValue * 120000 / 40;
    }
    else {
        document.getElementById('zakat').innerText = "00";
    }
}