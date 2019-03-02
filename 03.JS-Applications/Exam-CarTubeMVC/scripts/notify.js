let notify = (() => {
    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $('#loadingBox').fadeOut(),
    });

    $(() => {
        $('.notification').click(function () {
            $(this).hide();
        })
    });

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.find('span').text(message);
        infoBox.fadeIn();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.find('span').text(message);
        errorBox.fadeIn();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    return {
        showInfo,
        showError,
        handleError
    }
})();