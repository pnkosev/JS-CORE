window.onload = function() {
    document.querySelector('input[type="button"]').addEventListener('click', addItem);
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    let select = document.getElementById('menu');
    function addItem() {
        let option = document.createElement('option');
        option.textContent = text.value;
        option.value = value.value;
        select.append(option);
        text.value = '';
        value.value = '';
    }
}