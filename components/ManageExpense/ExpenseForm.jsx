import { View } from "react-native";
import Input from "./Input";
function ExpenseForm({titleChangeHandler, amountChangeHandler, dateChangeHandler, titleContent, amountContent, dateContent}){
    return (
        <View>
            <Input label="Title" textInputConfig={{
                onChangeText: titleChangeHandler,
                value:titleContent
            }}/>
            <Input label="Amount" textInputConfig={{
                keyboardType:"decimal-pad", 
                onChangeText:amountChangeHandler,
                value:amountContent
                }}/>
            <Input label="Date" textInputConfig={{
                placeholder:"YYYY/MM/DD",
                maxLength:10,
                minLength:10,
                keyboardType:"decimal-pad",
                onChangeText: dateChangeHandler,
                value:dateContent
            }}/>
        </View>
    );
}
export default ExpenseForm;