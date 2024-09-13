import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { getFormattedDate } from "../util/date";

function ExpenseItem({ description, amount, date }) {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    // backgroundColor: GlobalStyles.colors.primary500,
    backgroundColor: GlobalStyles.colors.surface,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    borderWidth: 0.4,
    borderColor: GlobalStyles.colors.outline,
    elevation: 3,
    shadowColor: "grey",
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    // color: GlobalStyles.colors.primary50,
    color: GlobalStyles.colors.onSurface,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    // backgroundColor: "white",
    backgroundColor: GlobalStyles.colors.primaryContainer,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80
  },
  amount: {
    color: GlobalStyles.colors.onPrimaryContainer,
    fontWeight: "bold",
  },
});
