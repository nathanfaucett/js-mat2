var mathf = require("mathf");


var mat2 = module.exports;


mat2.create = function(m11, m12, m21, m22) {
    return mat2.set(
        new mathf.ArrayType(4),
        m11, m12,
        m21, m22
    );
};

mat2.copy = function(a, b) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];

    return a;
};

mat2.set = function(a, m11, m12, m21, m22) {

    a[0] = m11 !== undefined ? m11 : 1;
    a[2] = m12 !== undefined ? m12 : 0;
    a[1] = m21 !== undefined ? m21 : 0;
    a[3] = m22 !== undefined ? m22 : 1;
    return a;
};

mat2.identity = function(a) {
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 1;

    return a;
};

mat2.zero = function(a) {
    a[0] = 0;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;

    return a;
};

mat2.mul = function(a, b, out) {
    var a11 = a[0],
        a12 = a[2],
        a21 = a[1],
        a22 = a[3],

        b11 = b[0],
        b12 = b[2],
        b21 = b[1],
        b22 = b[3];

    out = out || a;

    out[0] = a11 * b11 + a21 * b12;
    out[1] = a12 * b11 + a22 * b12;

    out[2] = a11 * b21 + a21 * b22;
    out[3] = a12 * b21 + a22 * b22;

    return out;
};

mat2.smul = function(a, s, out) {
    out = out || a;

    out[0] = a[0] * s;
    out[1] = a[1] * s;
    out[2] = a[2] * s;
    out[3] = a[3] * s;

    return out;
};

mat2.sdiv = function(a, s, out) {
    s = s !== 0 ? 1 / s : s;

    out = out || a;

    out[0] = a[0] * s;
    out[1] = a[1] * s;
    out[2] = a[2] * s;
    out[3] = a[3] * s;

    return out;
};

mat2.determinant = function(a) {

    return a[0] * a[3] - a[2] * a[1];
};

mat2.inverse = function(a, out) {
    var m11 = a[0],
        m12 = a[2],
        m21 = a[1],
        m22 = a[3],

        det = m11 * m22 - m12 * m21;

    out = out || a;

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

mat2.transpose = function(a, out) {
    var tmp;

    out = out || a;

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

mat2.setRotation = function(a, angle) {
    var c = mathf.cos(angle),
        s = mathf.sin(angle);

    a[0] = c;
    a[1] = s;
    a[2] = -s;
    a[3] = c;

    return a;
};

mat2.getRotation = function(a) {

    return mathf.atan2(a[1], a[0]);
};

mat2.rotate = function(a, angle, out) {
    var m11 = a[0],
        m12 = a[2],
        m21 = a[1],
        m22 = a[3],

        s = mathf.sin(angle),
        c = mathf.sin(angle);

    out = out || a;

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
