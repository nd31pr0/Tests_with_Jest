
const caesarCipher = require('./caesarCipher');
test("shifts letters by the given factor", () => {
    expect(caesarCipher("Hello wOrld", 3)).toBe("Khoor zRuog");
})