const mongoose = require('mongoose');
// const Mockgoose = require('mockgoose').Mockgoose;
// const mockgoose = new Mockgoose(mongoose);
const Card = require('../card');

describe('cards:', function() {
  describe('should fail validation if card object is empty', () => {
    it('(return promise)', () => {
      let card = new Card();

      expect.assertions(1);
      return card.validate().catch(err => {
        expect(err.name).toBe('ValidationError');
      });
    });
    it('(async/await)', async () => {
      let card = new Card();

      expect.assertions(1);
      try {
        await card.validate();
      } catch (err) {
        expect(err.name).toBe('ValidationError');
      }
    });
    it('(rejection unraveling)', () => {
      let card = new Card();

      expect.assertions(1);
      return expect(card.validate()).rejects.toThrow(
        expect.objectContaining({
          name: 'ValidationError'
        })
      );
    });
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
