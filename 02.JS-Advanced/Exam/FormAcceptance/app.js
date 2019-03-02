function acceptance() {

	let company = $('input[name="shippingCompany"]');
	let product = $('input[name="productName"]');
	let quantity = $('input[name="productQuantity"]');
	let scrape = $('input[name="productScrape"]');
	let wareHouse = $('#warehouse');

	if (company.val() && product.val() && quantity.val() && scrape.val()) {
		let available = quantity.val() - scrape.val();
		if (typeof + quantity.val() === "number" && typeof + scrape.val() === "number") {
			if (available > 0) {
				let outOfStockBtn = $('<button type="button">Out of stock</button>').on('click', function () {
					$(this).parent().remove();
				});
				let div = $('<div>');
				div.append($('<p>').text(`[${company.val()}] ${product.val()} - ${available} pieces`));
				div.append(outOfStockBtn);
				$('#warehouse').append(div);

				company.val("");
				product.val("");
				quantity.val("");
				scrape.val("");
			}
		}
	}
}