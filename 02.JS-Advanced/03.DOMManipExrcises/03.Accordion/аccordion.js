function toggle() {
    //let button = document.getElementsByClassName('button')[0];
    let button = document.querySelector('span.button');
    let targetDiv = document.getElementById('extra');
    let currentState = button.textContent;

    if (currentState === "More") {
        more();
    } else {
        less();
    }

    function more() {
        button.textContent = "Less";
        targetDiv.style.display = "block";
    }

    function less() {
        button.textContent = "More";
        targetDiv.style.display = "none";
    }
}