const capitalize =  require('./capitalize');

test("takes a string and returns it with first letter in caps", () => {
    expect(capitalize('text')).toBe('Text')
})
