function extensibleObj() {
    let obj = {
        extend: function (template) {
            for (let proto of Object.keys(template)) {
                if (typeof (template[proto]) === "function") {
                    Object.getPrototypeOf(obj)[proto] = template[proto];
                } else {
                    obj[proto] = template[proto];
                }
            }
        }
    }
    return obj;
}