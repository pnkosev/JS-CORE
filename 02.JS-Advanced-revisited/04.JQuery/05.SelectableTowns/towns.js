function attachEvents() {
    $('#items li').on('click', selectItem);

    function selectItem() {
        if (!$(this).attr('data-selected')) {
            $(this).attr('data-selected', true);
            $(this).css('background-color', '#DDD');
        } else {
            $(this).removeAttr('data-selected');
            $(this).css('background-color', '');
        }
    }

    $('#showTownsButton').on('click', showSelectedItems);

    function showSelectedItems() {
        let towns = $('li[data-selected]');
        $('#selectedTowns').text(towns.map((i, e) => $(e).text()).toArray().join(', '));
    }
}
