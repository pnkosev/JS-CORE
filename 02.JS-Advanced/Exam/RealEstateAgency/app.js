function realEstateAgency() {
	let rent = $('input[name="apartmentRent"]');
	let type = $('input[name="apartmentType"]');
	let comm = $('input[name="agencyCommission"]');
	let regBtn = $('button[name="regOffer"]');
	let msg = $('#message');
	let building = $('#building');
	let divs = [];

	regBtn.on('click', register);

	function register() {
		let symbol = ":";
		if (typeof + rent.val() === 'number' && typeof + comm.val() === 'number' && rent.val() > 0 && comm.val() >= 0 && comm.val() <= 100 && type.val()) {
			msg.text('Your offer was created successfully.');
			let div = $('<div class="apartment">')
				.append($('<p>').text(`Rent: ${rent.val()}`))
				.append($('<p>').text(`Type: ${type.val()}`))
				.append($('<p>').text(`Commission: ${comm.val()}`));
			building.append(div);
			let typeVal = type.val();
			let rentVal = rent.val();
			let commVal = comm.val();
			divs.push({
				type: typeVal,
				rent: +rentVal + (+rentVal * +commVal / 100),
			});

		} else {
			msg.text('Your offer registration went wrong, try again.');
		}
		rent.val("");
		type.val("");
		comm.val("");
	}

	let budget = $('input[name="familyBudget"]');
	let familyType = $('input[name="familyApartmentType"]');
	let familyName = $('input[name="familyName"]');
	let findBtn = $('button[name="findOffer"]');

	findBtn.on('click', find);

	function find() {
		if (budget.val() > 0 && familyType.val() && familyName.val()) {
			let counter = 1;
			let found = false;
			for (let searched of divs) {

				if (familyType.val() === searched.type && budget.val() >= searched.rent) {
					let child = $(`#building div:nth-child(${counter})`).css('border', '2px solid red').html(`<p>${familyName.val()}</p><p>live here now</p>`);
					let buttonMoveOut = $(`<button>MoveOut</button>`).on('click', function () {$(this).parent().remove()});
					child.append(buttonMoveOut);
					msg.text("Enjoy your new home! :))");
					found = true;
					familyType.val("");
					familyName.val("");
					budget.val("");
					break;
				}
				counter++;
			}
			if (found === false) {
				msg.text('We were unable to find you a home, so sorry :(');
			}
		}
	}
}