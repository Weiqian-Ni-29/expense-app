import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
function ExpensesSummary({ peroidName, expenses }){
    const expenseSum = expenses.reduce((sum, expense)=>{
        return sum + expense.amount;
    }, 0);
    return (
        <View style={styles.container}>
            <Text style={styles.period}>{peroidName}</Text>
            <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        padding:8,
        backgroundColor:GlobalStyles.colors.primary50,
        borderRadius:6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
        marginTop:10
    },
    period:{
        fontSize:16,
        color:GlobalStyles.colors.primary700,
        fontWeight:'bold'
    },
    sum:{
        fontSize:16,
        fontWeight:'bold',
        color:GlobalStyles.colors.primary500
    }
});

export default ExpensesSummary;