function callIt(fn) {
    return fn.apply(this, Array.prototype.splice.call(arguments, 1));
}