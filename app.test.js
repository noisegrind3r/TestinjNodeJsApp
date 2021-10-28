const funcs = require('./app');

test('1-st test', () => {
    expect(funcs.RunApp({ hamster: 'angora', action: 'vocalize' })).toBe('angora squeaks 30 dB.');
});
test('2-nd test', () => {
    expect(funcs.RunApp({ hamster: 'djungarian', action: 'eat' })).toBe('djungarian eats plum.');
});
test('3-rd test', () => {
    expect(funcs.RunApp({ hamster: 'common', action: 'roll' })).toBe('common turn the wheel 35 rpm.');
});
test('4-th test', () => {
    expect(funcs.RunApp({ hamster: 'forest', action: 'eat' })).toBe('Unknown hamster');
});
test('5-th test', () => {
    expect(funcs.RunApp({ hamster: 'rubber', action: 'drink' })).toBe('Unknown action');
});
test('6-th test', () => {
    expect(funcs.RunApp({ hamster: 'rubber', property: 'food' })).toBe('apricot');
});
test('7-th test', () => {
    expect(funcs.RunApp({ hamster: 'angora', property: 'volume' })).toBe(30);
});
test('8-th test', () => {
    expect(funcs.RunApp({ hamster: 'wild', property: 'speed' })).toBe(42);
});
test('9-th test', () => {
    expect(funcs.RunApp({ hamster: 'wild' })).toBe('params not set');
});
test('10-th test', () => {
    expect(funcs.RunApp({})).toBe('hamster not set');
});