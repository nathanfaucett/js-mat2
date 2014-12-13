global.mat2 = require("../src/index");


var a = mat2.rotate(mat2.create(), Math.PI * 0.5),
    b = mat2.rotate(mat2.create(), Math.PI),
    c = mat2.mul(a, b, mat2.create());

console.log(c);
