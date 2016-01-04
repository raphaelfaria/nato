import Dictionary from './Dictionary';

export default class Parser {
  static natify(text) {
    return text.replace(/\s/g, '')
      .split('')
      .map(letter => {
        const nLetter = Dictionary[letter];
        if (!nLetter ||
            !nLetter.text ||
            !nLetter.pronunciation) {
          throw new Error(`No translation for "${letter}"`);
        }

        return nLetter;
      });
  }
}
