/**
 * Generates a password
 * @param {Number} Length The length of the password characters
 * @returns {String}
 */
module.exports = (Length) => {
    if (!Length) throw new TypeError("Length isn't specified")
    var length = Length,
        res = '0123456789',
        value = "";
    for (var i = 0, n = res.length; i < length; ++i) {
        value += res.charAt(Math.floor(Math.random() * n));
    }
    return value;
}