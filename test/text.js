import assert from 'assert';
import Text from '../lib/nato/Text';

describe('Text', () => {
  describe('constructor', () => {
    it('should succeed', () => {
      assert.ok(new Text('a8h43lnr0'));
    });

    it('should fail', () => {
      assert.throws(() => new Text(1), Error, 'Argument should be a string');
      assert.throws(() => new Text('a^'), Error, 'No translation for "^"');
    });
  });

  describe('methods', () => {
    const text = new Text('a8h43lnr0');

    it('should translate to nato', () => {
      assert.equal(
        text.toNato(),
        'Alfa Eight Hotel Four Three Lima November Romeo Zero'
      );

      assert.equal(
        text.nato,
        'Alfa Eight Hotel Four Three Lima November Romeo Zero'
      );
    });

    it('should display pronunciation', () => {
      assert.equal(
        text.toPronunciation(),
        'AL-FAH AIT HOH-TEL FOW-ER TREE LEE-MAH NO-VEM-BER ROW-ME-OH ZEE-RO'
      );

      assert.equal(
        text.pronunciation,
        'AL-FAH AIT HOH-TEL FOW-ER TREE LEE-MAH NO-VEM-BER ROW-ME-OH ZEE-RO'
      );
    });
  });
});
