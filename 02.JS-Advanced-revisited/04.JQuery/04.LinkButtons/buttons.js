function attachEvents() {
    $('.button').on('click', selectItem);

    function selectItem() {
        $(this).toggleClass('selected');
    }
}
