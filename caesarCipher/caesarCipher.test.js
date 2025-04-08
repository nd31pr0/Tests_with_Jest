
const caesarCipher = require('./caesarCipher');
test("shifts letters by the given factor", () => {
    expect(caesarCipher("hello world", 3)).toBe("khoor zruog");
})