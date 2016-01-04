import Parser from './Parser';

export default class Text {
  constructor(string) {
    if (typeof string !== 'string' || !string instanceof String) {
      throw new Error('Argument should be a string');
    }
    this.text = string;
    this.natified = this.natify();
  }

  natify() {
    return Parser.natify(this.text);
  }

  toNato() {
    return this.natified.map(letter => letter.text).join(' ');
  }

  toPronunciation() {
    return this.natified.map(letter => letter.pronunciation).join(' ');
  }

  get nato() {
    return this.toNato();
  }

  get pronunciation() {
    return this.toPronunciation();
  }
}
