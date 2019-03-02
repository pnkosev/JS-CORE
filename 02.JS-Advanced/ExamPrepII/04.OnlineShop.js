function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let product = $('.custom-select');
    let price = $('#price');
    let quantity = $('#quantity');
    let submitBtn = $('#submit');
    let inventory = $('.display');
    let capacity = $('#capacity');
    let sum = $('#sum');

    product.on('keyup', function () {
        if (product.val() !== "") {
            submitBtn.prop('disabled', false);
        } else {
            submitBtn.prop('disabled', true);
        }
    });

    submitBtn.on('click', function () {
        let li = $('<li>');
        li.text(`Product: ${product.val()} Price: ${price.val()} Quantity: ${quantity.val()}`);
        li.appendTo(inventory);
        
        if (capacity.val() < 150 && (+capacity.val() + +quantity.val()) < 150) {
            capacity.val(+capacity.val() + +quantity.val());

        } else {
            
            capacity.val('full');
            capacity.addClass("fullCapacity");
            product.prop('disabled', true);
            price.prop('disabled', true);
            quantity.prop('disabled', true);
            submitBtn.prop('disabled', true);
        }
        
        sum.val(+sum.val() + +price.val());
        product.val("");
        price.val(1);
        quantity.val(1);
        submitBtn.prop('disabled', true);
    });
}