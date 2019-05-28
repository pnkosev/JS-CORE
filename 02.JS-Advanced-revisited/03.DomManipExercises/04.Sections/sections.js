function create(sentences) {
    let content = document.getElementById('content');

    for (const word of sentences) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.style.display = 'none';
        p.textContent = word;
        div.append(p);
        div.addEventListener('click', reveal);
        content.append(div);
    }

    function reveal(e) {
        e.target.children[0].style.display = 'block';
    }
}