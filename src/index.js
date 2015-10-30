var mathf = require("mathf"),
    isNumber = require("is_number");


var mat2 = exports;


mat2.ArrayType = typeof(Float32Array) !== "undefined" ? Float32Array : mathf.ArrayType;


mat2.create = function(m11, m12, m21, m22) {
    var out = new mat2.ArrayType(4);

    out[0] = isNumber(m11) ? m11 : 1;
    out[2] = isNumber(m12) ? m12 : 0;
    out[1] = isNumber(m21) ? m21 : 0;
    out[3] = isNumber(m22) ? m22 : 1;

    return out;
};

mat2.copy = function(out, a) {

    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];

    return out;
};

mat2.clone = function(a) {
    var out = new mat2.ArrayType(4);

    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];

    return out;
};

mat2.set = function(out, m11, m12, m21, m22) {

    out[0] = isNumber(m11) ? m11 : 1;
    out[2] = isNumber(m12) ? m12 : 0;
    out[1] = isNumber(m21) ? m21 : 0;
    out[3] = isNumber(m22) ? m22 : 1;

    return out;
};

mat2.identity = function(out) {

    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;

    return out;
};

mat2.zero = function(out) {

    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;

    return out;
};

mat2.mul = function(out, a, b) {
    var a11 = a[0],
        a12 = a[2],
        a21 = a[1],
        a22 = a[3],

        b11 = b[0],
        b12 = b[2],
        b21 = b[1],
        b22 = b[3];

    out[0] = a11 * b11 + a21 * b12;
    out[1] = a12 * b11 + a22 * b12;

    out[2] = a11 * b21 + a21 * b22;
    out[3] = a12 * b21 + a22 * b22;

    return out;
};

mat2.smul = function(out, a, s) {

    out[0] = a[0] * s;
    out[1] = a[1] * s;
    out[2] = a[2] * s;
    out[3] = a[3] * s;

    return out;
};

mat2.sdiv = function(out, a, s) {
    s = s !== 0 ? 1 / s : s;

    out[0] = a[0] * s;
    out[1] = a[1] * s;
    out[2] = a[2] * s;
    out[3] = a[3] * s;

    return out;
};

mat2.determinant = function(a) {

    return a[0] * a[3] - a[2] * a[1];
};

mat2.inverse = function(out, a) {
    var m11 = a[0],
        m12 = a[2],
        m21 = a[1],
        m22 = a[3],

        det = m11 * m22 - m12 * m21;

    if (det === 0) {
        return mat2.identity(out);
    }
    det = 1 / det;

    out[0] = m22 * det;
    out[1] = -m12 * det;
    out[2] = -m21 * det;
    out[3] = m11 * det;

    return out;
};

mat2.transpose = function(out, a) {
    var tmp;

    if (out === a) {
        tmp = a[1];
        out[1] = a[2];
        out[2] = tmp;
    } else {
        out[0] = a[0];
        out[1] = a[2];
        out[2] = a[1];
        out[3] = a[3];
    }

    return out;
};

mat2.setRotation = function(out, angle) {
    var c = mathf.cos(angle),
        s = mathf.sin(angle);

    out[0] = c;
    out[1] = s;
    out[2] = -s;
    out[3] = c;

    return out;
};

mat2.getRotation = function(out) {

    return mathf.atan2(out[1], out[0]);
};

mat2.rotate = function(out, a, angle) {
    var m11 = a[0],
        m12 = a[2],
        m21 = a[1],
        m22 = a[3],

        s = mathf.sin(angle),
        c = mathf.sin(angle);

    out[0] = m11 * c + m12 * s;
    out[1] = m11 * -s + m12 * c;
    out[2] = m21 * c + m22 * s;
    out[3] = m21 * -s + m22 * c;

    return out;
};

mat2.equal = function(a, b) {
    return !(
        a[0] !== b[0] ||
        a[1] !== b[1] ||
        a[2] !== b[2] ||
        a[3] !== b[3]
    );
};

mat2.notEqual = function(a, b) {
    return (
        a[0] !== b[0] ||
        a[1] !== b[1] ||
        a[2] !== b[2] ||
        a[3] !== b[3]
    );
};

mat2.str = function(out) {
    return (
        "Mat2[" + out[0] + ", " + out[2] + "]\n" +
        "     [" + out[1] + ", " + out[3] + "]"
    );
};

mat2.string = mat2.toString = mat2.str;
