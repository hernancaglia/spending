import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Shoes",
    amount: 65.5,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "Trousers",
    amount: 40,
    date: new Date("2022-02-19"),
  },
  {
    id: "e3",
    description: "Food",
    amount: 16.8,
    date: new Date("2022-03-19"),
  },
  {
    id: "e4",
    description: "Book",
    amount: 15,
    date: new Date("2022-06-19"),
  },
  {
    id: "e5",
    description: "Book",
    amount: 10,
    date: new Date("2022-09-19"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES); // could also use state

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  
  function updateExpense(id) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }
  
    function deleteExpense(id) {
      dispatch({ type: "DELETE", payload: id });
    }

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
