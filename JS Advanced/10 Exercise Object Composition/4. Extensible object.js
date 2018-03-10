function extensible() {
    let obj = {
        extend: function (template) {
            //forin only in properties of template but not in Object.prototype(template)
            for (let prop of Object.keys(template)) {
                if (typeof template[prop] === 'function') {
                    Object.getPrototypeOf(obj)[prop] = template[prop];
                } else {
                    obj[prop] = template[prop];
                }
            }
        }
    };

    return obj;
}

let myObj = extensible();
let template = {
    extensionMethod: function () {
        console.log('JS')
    },
    extensionProperty: 'someString'
};
myObj.extend(template);
console.log(myObj);
console.log(myObj.__proto__);
