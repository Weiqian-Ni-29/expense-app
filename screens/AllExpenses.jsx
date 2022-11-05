import { Text, View, StyleSheet } from 'react-native';
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../store/expenseContext';
function AllExpenses(){
    const expensesCtx = useContext(ExpensesContext);
    return (
        <ExpenseOutput periodName={'total'} expenses={expensesCtx.expenses} fallbackText={"No expenses can be found in history"}/>
    );
}
export default AllExpenses;