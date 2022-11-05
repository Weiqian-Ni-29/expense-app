import { FlatList, View, Text, StyleSheet } from 'react-native'
import ExpenseItem from './ExpenseItem';
function ExpensesList({ expenses }){
    return (
        <FlatList data={expenses} keyExtractor={(item)=>{return item.id;}} renderItem={(itemData)=>{
            return (
                <ExpenseItem expense={itemData.item} />
            );
        }} />
    );
}

const styles = StyleSheet.create({
    
});

export default ExpensesList;