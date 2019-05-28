function toggle() {
    let extra = document.getElementById('extra');
    let btn = document.querySelector('span.button');
    if (btn.textContent === 'More') {
        extra.style.display = 'block';
        btn.textContent = 'Less';
    } else {
        extra.style.display = 'none';
        btn.textContent = 'More';
    }
}