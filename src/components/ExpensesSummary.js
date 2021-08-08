
import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses-total';


const ExpensesSummary = ({expenseCount, expensesTotal})=>{
    const expensesWord = expenseCount ===1 ? 'expense':'expenses';
    const formatetsExpensesTotal = numeral(expensesTotal/100).format('$0,0.00')
    return (
        <div>
            <h1>Viewing {expenseCount} {expensesWord} totalling {formatetsExpensesTotal}</h1>
        </div>
    )
};

const mapStateToProps = (state)=>{
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount:visibleExpenses.length,
        expensesTotal:selectExpenseTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary)