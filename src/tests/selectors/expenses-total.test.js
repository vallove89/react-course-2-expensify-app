import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';
import { exp } from 'prelude-ls';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
})