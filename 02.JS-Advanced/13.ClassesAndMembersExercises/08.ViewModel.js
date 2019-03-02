class TextBox {
    constructor (selector, regex) {
        this.selector = selector;
        this._invalidSymbols = regex;
        this._elements = $(this.selector);
        $(this.selector).on('input', function () {
            $('*[type=text]').val(this.value);
        });
    }

    get value() {
        //return this._elements.val();
        return this.elements.val();
    }
    set value(newValue) {
        //this._elements.val(newValue);
        this.elements.val(newValue);
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this.value.match(this._invalidSymbols);
    }
}