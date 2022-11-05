import { Text, View, StyleSheet, Alert } from 'react-native';
import { useLayoutEffect } from 'react';
import { GlobalStyles } from '../constants/styles';
import IconButton from '../components/ui/IconButton';
import { useContext } from 'react';
import { ExpensesContext } from '../store/expenseContext';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { useState } from 'react';
import { getFormattedDate, createDate } from '../util/date';
function ManageExpenses({ route, navigation }){
    const expensesCtx = useContext(ExpensesContext);
    const editedExpenseId = route.params ? route.params.expenseId : undefined;
    const isEditing = !!editedExpenseId;
    const expenseItem = isEditing ? expensesCtx.expenses.find((expense)=>{return expense.id === editedExpenseId}) : undefined;
    const initialTitle = isEditing ? expenseItem.title : "";
    const initialAmount = isEditing ? expenseItem.amount : "";
    const initialDate = isEditing ? getFormattedDate(expenseItem.date) : "";
    const [titleContent, setTitleContent] = useState(initialTitle);
    const [amountContent, setAmountContent] = useState(initialAmount.toString());
    const [dateContent, setDateContent] = useState(initialDate);
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: isEditing ? "Editing" : "Add your transaction here"
        });
    },[navigation, isEditing]);
    function amountChangeHandler(enteredText){
        setAmountContent(enteredText);
    }
    function dateChangeHandler(enteredText){
        setDateContent(enteredText);
    }
    function titleChangeHandler(enteredText){
        setTitleContent(enteredText);
    }
    function deleteItemHandler(){
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    }
    function addItemHandler(){
        const amountIsValid = !isNaN(amountContent) && Number(amountContent) > 0;
        const resultDate = createDate(dateContent);
        const dateIsValid = resultDate.toString() !== 'Invalid Date';
        const titleIsValid = titleContent.trim().length > 0;
        if(!(amountIsValid && dateIsValid && titleIsValid)){
            Alert.alert("Invalid Input", "Please check your input values");
            return;
        }
        expensesCtx.addExpense({title:titleContent, amount: Number(amountContent), date: resultDate});
        navigation.goBack();
    }
    function updateItemHandler(){
        const amountIsValid = !isNaN(amountContent) && Number(amountContent) > 0;
        const resultDate = createDate(dateContent);
        const dateIsValid = resultDate.toString() !== 'Invalid Date';
        const titleIsValid = titleContent.trim().length > 0;
        if(!(amountIsValid && dateIsValid && titleIsValid)){
            Alert.alert("Invalid Input", "Please check your input values");
            return;
        }
        expensesCtx.updateExpense(editedExpenseId, {title:titleContent, amount: Number(amountContent), date: createDate(dateContent)});
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            {isEditing 
                ?
                <View>
                    <ExpenseForm titleChangeHandler={titleChangeHandler} dateChangeHandler={dateChangeHandler} amountChangeHandler={amountChangeHandler}
                                    titleContent={titleContent} amountContent={amountContent} dateContent={dateContent}/>
                    <View style={styles.editBtnContainer}>
                        <IconButton icon="aperture" color={GlobalStyles.colors.error50} size={100} pressHandler={updateItemHandler}/>
                        <IconButton icon="trash" color={GlobalStyles.colors.error500} size={100} pressHandler={deleteItemHandler}/> 
                    </View>
                </View>                  
                :
                <View>
                    <ExpenseForm titleChangeHandler={titleChangeHandler} dateChangeHandler={dateChangeHandler} amountChangeHandler={amountChangeHandler} 
                                    titleContent={titleContent} amountContent={amountContent} dateContent={dateContent}/>
                    <View style={styles.addBtnContainer}>
                        <IconButton icon="add" color={GlobalStyles.colors.error50} size={300} pressHandler={addItemHandler}/>
                    </View>
                </View> 
                }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor: GlobalStyles.colors.primary500,
        paddingTop:50
    },
    editBtnContainer:{
        flexDirection:'row',
        marginTop: 140,
        justifyContent:'space-between',
        marginHorizontal: 10
    },
    addBtnContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        borderWidth:10,
        borderColor: GlobalStyles.colors.primary700,
        borderRadius:150
    }
});

export default ManageExpenses;