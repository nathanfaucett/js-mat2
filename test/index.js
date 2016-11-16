var tape = require("tape"),
    mat2 = require("..");


tape("mat2.equal(a, b)", function(assert) {
    assert.equals(mat2.equals(mat2.create(), mat2.create()), true);
    assert.end();
});

tape("mat2.setRotation(out, angle)", function(assert) {
    assert.equals(mat2.equals(
        mat2.setRotation([], Math.PI / 2), [0, 1, -1, 0]
    ), true);
    assert.end();
});

tape("mat2.rotate(out, a, angle)", function(assert) {
    assert.equals(mat2.equals(
        mat2.rotate([], [1, 0, 0, 1], Math.PI / 2), [0, 1, -1, 0]
    ), true);
    assert.end();
});
