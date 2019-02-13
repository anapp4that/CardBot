beforeAll(() => {
  console.log('Before All!');
});

beforeEach(() => {
  console.log('Before Each!');
});

afterEach(() => {
  console.log('After Each!');
});

afterAll(() => {
  console.log('After All!');
});

describe('In a sane universe:', () => {
  it('1 + 2 = 3', () => {
    // console.log('A test!');
    expect(1 + 2).toBe(3);
  });
  it('1 + 2 != 4', () => {
    // console.log('A test!');
    expect(1 + 2).not.toBe(4);
  });
});
