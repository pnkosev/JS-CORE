function notify(message) {
    let targetDiv = document.getElementById('notification');
    targetDiv.textContent = message;
    targetDiv.style.display = 'block';
    
    setTimeout(function(message) {
        targetDiv.style.display = "none"
    }, 2000);

    // setTimeout(hideTargetDiv, 2000);

    // function hideTargetDiv() {
    //     targetDiv.style.display = 'none';
    // }
}