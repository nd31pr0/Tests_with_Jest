const Reversed =  require("./Reversed");

test("takes character string and returns its reverse", () => {
    expect(Reversed('text')).toBe('txet')
})