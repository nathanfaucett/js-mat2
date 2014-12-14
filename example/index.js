global.mat2 = require("../src/index");


var a = mat2.create(),
    b = mat2.create(),
    c = mat2.create();

mat2.rotate(a, a, Math.PI * 0.5);
mat2.rotate(b, b, Math.PI);
mat2.mul(c, a, b);

console.log(c);
