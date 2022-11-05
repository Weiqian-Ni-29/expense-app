import { Text, View, StyleSheet } from 'react-native';
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../store/expenseContext';
import { getDateMinusDays } from '../util/date';
function RecentExpenses(){
    const expensesCtx = useContext(ExpensesContext);
    const recentExpenseCtx = expensesCtx.expenses.filter((expense)=>{
        const today = new Date();
        const days7DaysAgo = getDateMinusDays(today, 7);
        return expense.date > days7DaysAgo;
    });
    return (
        <ExpenseOutput periodName={'last 7 days'} expenses={recentExpenseCtx} fallbackText = {"There is no recent expenses"}/>
    );
}
export default RecentExpenses;