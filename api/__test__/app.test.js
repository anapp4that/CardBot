// const sum = require('../app');
const mongoose = require('mongoose');
// const Mockgoose = require('mockgoose').Mockgoose;
// const mockgoose = new Mockgoose(mongoose);
const Card = require('../../models/card');

// beforeAll(() => {
//   console.log('Before All!');
// });
//
// beforeEach(() => {
//   console.log('Before Each!');
// });
//
// afterEach(() => {
//   console.log('After Each!');
// });
//
// afterAll(() => {
//   console.log('After All!');
// });

describe('In a sane universe:', () => {
  it('1 + 2 = 3', () => {
    // console.log('A test!');
    expect(1 + 2).toBe(3);
  });
});

describe('cards:', function() {
  it('should fail validation if card object is empty', () => {
    let card = new Card();
    // let promise = card.validate();

    expect.assertions(1);
    return expect(card.validate()).rejects.toThrow();
  });

  // it('should create a card', function() {
  //   let card = new Card({
  //     type: 'WWE',
  //     name: 'TLC',
  //     matches: []
  //   });
  //
  //   console.log('Card:\n' + card);
  // });
});

// test('Create Card', () => {
//   let card = new Card({
//     type: 'WWE',
//     name: 'TLC',
//     matches: []
//   });
//
//   console.log(card);
//
//   card.save(function(err) {
//     if (err) {
//       console.log('Error:' + err);
//     }
//     console.log('Card saved successfully:' + card);
//   });
//
//   // expect(1 + 2).toBe(3);
// });
