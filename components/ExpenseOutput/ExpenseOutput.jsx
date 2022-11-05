import { View, StyleSheet, Text } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

function ExpenseOutput({ expenses, periodName, fallbackText }){
    const content = <Text style={styles.infoText}>{fallbackText}</Text>
    return (
        <View style={styles.container}>
            {
                expenses.length === 0 ? content
                : <View>
                    <ExpensesSummary peroidName={periodName} expenses={expenses} />
                    <ExpensesList expenses={expenses}/>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:24,
        backgroundColor: GlobalStyles.colors.primary700,
        flex:1,
        paddingBottom: 80
    },
    infoText:{
        color:'white',
        fontSize:16,
        textAlign:'center',
        marginTop:32
    }
});

export default ExpenseOutput;