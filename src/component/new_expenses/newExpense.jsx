import React from "react";
import ExpenseForm from "./expense_form/expenseForm";
import './newExpense.css'

const NewExpense = ()=>{
    return( 
    <div className="new-expense">
        <ExpenseForm />
   </div>
    );
}

export default NewExpense;