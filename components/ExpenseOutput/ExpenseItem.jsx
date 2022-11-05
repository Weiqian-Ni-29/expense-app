import { View, Text, StyleSheet, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { getFormattedDate } from '../../util/date';
import { useNavigation } from '@react-navigation/native'
import ManageExpenses from '../../screens/ManageExpenses';
function ExpenseItem({ expense }){
    const navigation = useNavigation();
    function pressHandler(){
        navigation.navigate('ManageExpenses',{expenseId:expense.id});
    }
    return (
        <Pressable onPress={pressHandler} style={({pressed})=>{return pressed && styles.pressed}}>
            <View style={styles.container}>
                <View style={styles.rowcontainer}>
                    <Text style={styles.title}>{expense.title}</Text>
                    <Text style={styles.amount}>${expense.amount.toFixed(2)}</Text>
                </View>
                <Text style={styles.date}>{getFormattedDate(expense.date)}</Text>
            </View>
        </Pressable> 
    );
}

const styles = StyleSheet.create({
    pressed:{
        opacity:0.75
    },
    rowcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    container:{
        padding:12,
        backgroundColor: GlobalStyles.colors.primary500,
        margin:5,
        borderRadius:8
    },
    title:{
        color: GlobalStyles.colors.accent500,
        fontSize:16
    },
    amount:{
        fontSize:20,
        color: GlobalStyles.colors.primary50
    },
    date:{
        textAlign:'right',
        color: GlobalStyles.colors.primary100,
        fontSize:13
    }
});

export default ExpenseItem;