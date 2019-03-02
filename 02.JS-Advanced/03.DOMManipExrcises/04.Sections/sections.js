function create(sentences) {
    let targetDiv = document.getElementById('content');

    for (let sentence of sentences) {
        let newP = document.createElement('p');
        newP.textContent = sentence;
        newP.style.display = "none";

        let newDiv = document.createElement('div');
        newDiv.appendChild(newP);
        newDiv.addEventListener('click', displayChildren);

        targetDiv.appendChild(newDiv);

        // function displayChildren() {
        //     let currentChild = this.firstChild;
        //     currentChild.style.display = "block";
        // }

        function displayChildren(event) {
            event.target.children[0].style.display = 'block';
        }
    }
}