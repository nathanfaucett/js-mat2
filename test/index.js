var tape = require("tape"),
    mat2 = require("..");


tape("mat2.equal(a, b)", function(assert) {
    assert.equals(mat2.equal(mat2.create(), mat2.create()), true);
    assert.end();
});
