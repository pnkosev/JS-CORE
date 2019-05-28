function attachGradientEvents() {
    let button = document.getElementById('gradient');
    button.addEventListener('mousemove', grade);
    button.addEventListener('mouseout', cxl);

    let result = document.getElementById('result');

    function grade(event) {
        let spot = event.offsetX / (this.clientWidth - 1);
        spot = Math.trunc(spot * 100);
        result.textContent = `${spot}%`;
    }

    function cxl() {
        result.textContent = '';
    }
}