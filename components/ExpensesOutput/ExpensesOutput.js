import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Shoes",
    amount: 65.50,
    date: new Date("2021-12-19")
  },
  {
    id: "e2",
    description: "Trousers",
    amount: 40,
    date: new Date("2022-02-19")
  },
  {
    id: "e3",
    description: "Food",
    amount: 16.80,
    date: new Date("2022-03-19")
  },
  {
    id: "e4",
    description: "Book",
    amount: 15,
    date: new Date("2022-06-19")
  },
  {
    id: "e5",
    description: "Book",
    amount: 10,
    date: new Date("2022-09-19")
  }
]

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.background
  }
});