import Dictionary from './Dictionary';

export default class Parser {
  static natify(text) {
    text.split('').map(letter => {
      if (letter === ' ') return letter;

      let nLetter = Dictionary[letter];
      if (!nLetter ||
          !nLetter.name ||
          !nLetter.pronunciation) {
        throw new Error(`No translation for "${letter}"`);
      }
    });
  }
}
