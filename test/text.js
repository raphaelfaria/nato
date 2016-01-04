import assert from 'assert';
import Text from '../lib/nato/Text';

describe('Text', () => {
  const text = new Text('a8h43lnr0');

  it('should translate to nato', () => {
    assert.equal(text.natify(), 'Alfa Eight Hotel Four Three Lima November Romeo Zero');
  });

  it('should display pronunciation', () => {
    assert.equal(text.pronunciation(), 'AL-FAH AIT HOH-TEL FOW-ER TREE LEE-MAH NO-VEM-BER ROW-ME-OH ZEE-RO');
  });
});
