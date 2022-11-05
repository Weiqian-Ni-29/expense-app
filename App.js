import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ManageExpenses from './screens/ManageExpenses';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { GlobalStyles } from './constants/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import IconButton from './components/ui/IconButton';
import ExpensesContextProvider from './store/expenseContext';
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function OverviewScreen(){
  return (
    <BottomTab.Navigator screenOptions={({ navigation })=>({
      headerStyle: {backgroundColor:GlobalStyles.colors.primary500},
      headerTintColor: 'white',
      tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
      tabBarActiveTintColor:GlobalStyles.colors.accent500,
      headerRight: ({tintColor})=>{
        return <IconButton icon="add" size={24} color={tintColor} pressHandler={()=>{
          navigation.navigate(ManageExpenses);
        }}/>
      }
    })}>
      <BottomTab.Screen name = "RecentExpenses" component={RecentExpenses} options={{
        title:"Recent Expenses",
        tabBarLabel:"Recent",
        tabBarIcon:({color,size})=>{
          return <Ionicons name='hourglass' size={size} color={color}/>
        }}}/>
      <BottomTab.Screen name = "AllExpenses" component={AllExpenses} options={{
        title:"All Expenses",
        tabBarLabel:"All",
        tabBarIcon:({color,size})=>{
          return <Ionicons name='calendar' size={size} color={color}/>
        }}}/>
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <ExpensesContextProvider>
        <StatusBar style="light" />
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
              headerTintColor: 'white'
            }}>
              <Stack.Screen name="Overview" component={OverviewScreen} options={{headerShown : false}}/>
              <Stack.Screen name="ManageExpenses" component={ManageExpenses} options={{presentation:'modal'}}/>
            </Stack.Navigator>
          </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
