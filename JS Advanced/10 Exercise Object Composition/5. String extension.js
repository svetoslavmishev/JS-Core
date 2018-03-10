(function () {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this.toString();
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this.toString() + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {
        if (this.toString() === '') {
            return true;
        }
        return false;
    };

    String.prototype.truncate = function (n) {
        if (n >= this.length) {
            return this.toString();
        } else {
            let strArray = this.split(' ');
            let first = strArray[0];

            for (let i = 1; i < strArray.length; i++) {
                if (first.length + strArray[i].length + 3 >= n) {
                    return first + '...'
                }
                first += ' ' + strArray[i]
            }
        }

        if (n < 4) {
            return '.'.repeat(n)
        }

        if (this.toString().indexOf(' ') == -1) {
            return this.slice(0, n - 3) + '...';
        }
    };

    String.format = function (string, ...params) {
        for (let i = 0; i < arguments.length; i++) {
            string = string.replace(`{${i - 1}}`, arguments[i]);
        }
        return string;
    }
})();

let str = 'quick brown fox jumps over the lazy dog';
str = str.ensureStart('the ');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);


str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}', 'dog');
console.log(str);