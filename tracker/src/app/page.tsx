"use client";

import { useState, useEffect } from "react";
import ExpenseForm from "./components/expense/ExpenseForm";
import SummaryCards from "./components/expense/SummaryCards";
import { Expense } from "@/app/types/expense";

export default function ExpensePage() {


const getExpenseFromStorage = (): Expense[] => {
  if (typeof window === "undefined") return [];
  const storeData = localStorage.getItem("expenses");
  return storeData ? JSON.parse(storeData) : [];
};

const [expense, setExpense] = useState<Expense[]>(
  getExpenseFromStorage()
);

useEffect(() => {
  localStorage.setItem("expenses", JSON.stringify(expense));
}, [expense]);

  
  const [income, setIncome] = useState<number>(50000);

  const addExpense = (newExpense: Expense) => {
  setExpense(prev => [...prev, newExpense]);
};

 const totalExpense = expense.reduce(
    (total,item)=> total + item.amount,
    0); 

  const balance = income - totalExpense;

const deleteExpense = (id: string) => {
  setExpense(prev => prev.filter(item => item.id !== id));
};

return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-700 h-5 w-full text-gray-300 flex items-center justify-center p-1">Expense Tracker</nav>
    <SummaryCards
    income={income}
    totalExpense={totalExpense}
    balance={balance}
    />
      <ExpenseForm expense={expense} onAddExpense ={addExpense} 
       onDeleteExpense={deleteExpense}/>
       
      </div>
  );
}