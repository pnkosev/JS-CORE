function makeReservation(selector) {
    let submitBtn = $('#submit');
    let editBtn = $('#edit');
    let continueBtn = $('#continue');
    let infoList = [];
    let fullName = $('#fullName');
    let email = $('#email');
    let phoneNumber = $('#phoneNumber');
    let address = $('#address');
    let postalCode = $('#postalCode');
    let ul = $('#infoPreview');

    submitBtn.on('click', submit);
    editBtn.on('click', edit);
    continueBtn.on('click', continueFunc);

    function submit() {

        if (fullName.val() !== "" && email.val() !== "") {
            infoList.push("Name: " + fullName.val());
            fullName.val("");
            infoList.push("E-mail: " + email.val());
            email.val("");
            if (phoneNumber.val() !== "") {
                infoList.push("Phone: " + phoneNumber.val());
                phoneNumber.val("");
            }
            if (address.val() !== "") {
                infoList.push("Address: " + address.val());
                address.val("");
            }
            if (postalCode.val() !== "") {
                infoList.push("Postal Code: " + postalCode.val());
                postalCode.val("");
            }

            for (let info of infoList) {
                let li = $('<li>').text(info);
                li.appendTo(ul);
            }
            submitBtn.prop('disabled', true);
            editBtn.prop('disabled', false);
            continueBtn.prop('disabled', false);
        }
    }

    function edit() {
        let inputList = [];
        inputList.push(fullName);
        inputList.push(email);
        inputList.push(phoneNumber);
        inputList.push(address);
        inputList.push(postalCode);

        for (let i = 0; i < infoList.length; i++) {
            let tokens = infoList[i].split(': ');
            inputList[i].val(tokens[1]);
        }
        ul.children().remove();

        submitBtn.prop('disabled', false);
        editBtn.prop('disabled', true);
        continueBtn.prop('disabled', true);
    }

    function continueFunc() {
        submitBtn.prop('disabled', true);
        editBtn.prop('disabled', true);
        continueBtn.prop('disabled', true);

        $(selector).append($('<h2>Payment details</h2>'));
        $(selector).append($('<select id="paymentOptions" class="custom-select">')
            .append($('<option selected disabled hidden>Choose</option>'))
            .append($('<option value="creditCard">Credit Card</option>'))
            .append($('<option value="bankTransfer">Bank Transfer</option>')));
        $(selector).append($('<div id="extraDetails"></div>'));

        let ccDetails = $('#extraDetails');

        $('#paymentOptions').on('change', function () {
            if (selectedText = $(this).find(':selected').text() === "Credit Card") {
                ccDetails.append($('<div class="inputLabel">Card Number<input></div><br>'));
                ccDetails.append($('<div class="inputLabel">Expiration Date<input></div></br>'));
                ccDetails.append($('<div class="inputLabel">Security Numbers<input></div></br>'));
                ccDetails.append($('<button id="checkOut">Check Out</button>'));
            } else if (selectedText = $(this).find(':selected').text() === "Bank Transfer") {
                ccDetails.append($('<p>You have 48 hours to transfer the amount to:</br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>'));
                ccDetails.append($('<button id="checkOut">Check Out</button>'));
            }
            let checkOutBtn = $('#checkOut');
            checkOutBtn.on('click', function () {
                $('#wrapper').html('<h4>Thank you for your reservation!</h4>');
            });
        });
    }



    // $('#paymentOptions').on('change', function () {
    //     alert($(this).find(':selected').text());
    //     if ($(this).find(':selected').text() === "Credit Card") {
    //         alert("yo");
    //     }
    // });
}