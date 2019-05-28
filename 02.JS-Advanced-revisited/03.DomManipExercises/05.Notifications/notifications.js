function notify(message) {
    let toastr = document.getElementById('notification');

    toastr.textContent = message;
    toastr.style.display = 'block';
    
    setTimeout(() => {
        toastr.style.display = 'none';
    }, 2000);
}