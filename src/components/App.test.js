import {
  getDefaultTableFields,
  calculateTotalMoney,
  calculateHighlightedMoney
} from './helpers';
import { tableFieldsConfig } from '../config';

describe('App component test', () => {
  it('Should return default fields if cookie is empty', () => {
    expect(getDefaultTableFields(false)).toEqual(tableFieldsConfig);
  });
  const data = [
    {
      amount: 100,
      isVisible: true,
      isHighlighted: true,
      optype: 'SALE'
    },
    {
      amount: 200,
      isVisible: true,
      isHighlighted: true,
      optype: 'SALE'
    },
    {
      amount: 500,
      isVisible: false,
      isHighlighted: true,
      optype: 'SALE'
    },
    {
      amount: 50,
      isVisible: true,
      isHighlighted: false,
      optype: 'REFUND'
    }
  ];
  const totalMoney = 250;
  const totalHighlightedMoney = 300;
  it('calculateTotalMoney test', () => {
    expect(calculateTotalMoney(data)).toEqual(totalMoney);
  });
  it('calculateHighlightedMoney test', () => {
    expect(calculateHighlightedMoney(data)).toEqual(totalHighlightedMoney);
  });
});
