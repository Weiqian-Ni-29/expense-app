import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
    {
        id:'e1',
        title:'A pair of shoes',
        amount:59.99,
        date: new Date('2022-11-03')
    },
    {
        id:'e2',
        title:'Pizza',
        amount:12.99,
        date: new Date('2022-10-15')
    },
    {
        id:'e3',
        title:'Some bananas',
        amount:5.99,
        date: new Date('2021-12-05')
    },
    {
        id:'e4',
        title:'book',
        amount:14.99,
        date:new Date('2021-10-13')
    },
    {
        id:'e5',
        title:'phone',
        amount:599.99,
        date: new Date('2020-12-12')
    },
    {
        id:'e6',
        title:'dinner',
        amount: 12.33,
        date: new Date('2022-11-02')
    },
    {
        id:'e7',
        title:'pasta',
        amount: 12.43,
        date: new Date('2022-11-03'),
    },
    {
        id:'e8',
        title:'PC',
        amount: 700,
        date: new Date('2022-10-02')
    }
];

export const ExpensesContext = createContext({
    expenses:[],
    addExpense:({title, amount, date})=>{},
    deleteExpense:(id)=>{},
    updateExpense:(id, {title, amount, date})=>{}
});

function expensesReducer(state, action){
    switch(action.type){
        case "ADD":
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id: id},...state];
        case "UPDATE":
            const updateableExpenseIndex = state.findIndex((expense)=>{
                return expense.id === action.payload.id;
            });
            const updateableExpense = state[updateableExpenseIndex];
            const updatedItem = {...updateableExpense, ...action.payload.data};
            const updatedExpenses = [...state];
            updatedExpenses[updateableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case "DELETE":
            const newState = state.filter((expense)=>{
                return expense.id !== action.payload;
            });
            return newState;
        default:
            return state;
    }
}

function ExpensesContextProvider({children}){
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);
    function addExpense(expenseData){
        dispatch({type: "ADD", payload: expenseData});
    }
    function deleteExpense(id){
        dispatch({type: "DELETE", payload: id});
    }
    function updateExpense(id, expenseData){
        dispatch({type: "UPDATE", payload: {id:id, data: expenseData}})
    }
    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    };
    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContextProvider;
