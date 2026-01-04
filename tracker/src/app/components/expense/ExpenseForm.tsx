"use client";
import { useState } from "react";
import { Expense } from "@/app/types/expense";
type Props ={
  expense: Expense[];
  onAddExpense:(expense: Expense)=>void;
  onDeleteExpense: (id: string) => void;
};
export default function ExpenseForm({expense, onAddExpense, onDeleteExpense}: Props)
{
  const [title, setTitle] = useState("");
  const [amount, setAmount]= useState("");
  const [category, setCategory] = useState("");
   
   const addExpense = () =>{
    if (!title || !amount ||!category)return;

    const newExpense: Expense={
      id: crypto.randomUUID(),
      title,
      amount: Number(amount),
      category,
    };

    onAddExpense(newExpense);
    setTitle("");
    setAmount("");
    setCategory("");
   };

  return (
    <div className="h-full flex justify-center items-center bg-gray-100 ">

      <div className="bg-white w-78 h-full shadow-lg border  border-gray-300 p-1 ">
        <h5 className="text-xs font-bold text-gray-600 mb-1">
          Add Expense
        </h5>
        <div className="bg-white w-full h-9 flex items-center gap-1 p-1 box-border -mt-1 ">
          <input
            className="flex-1 h-7 text-xs p-1 border border-gray-500 rounded bg-transparent outline-none box-border"
            placeholder="Title"
            type="text" value={title} onChange={(e)=>
              setTitle(e.target.value)
            }
             />

          <input
            className="w-12 h-7 text-xs p-1 border border-gray-500 rounded bg-transparent outline-none box-border"
            placeholder="₹" 
            type="text" value={amount} onChange={(e)=>
              setAmount(e.target.value)
            } />
          <select 
          value={category}
          onChange={((e)=> setCategory(e.target.value)
          )}
            className="flex-1 h-7 text-xs p-1 border border-gray-500 rounded bg-transparent outline-none box-border appearance-none" >
            <option>Category</option>
            <option>Shopping</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Entertainment</option>
            <option>Investment</option>
            <option>Health Care</option>
            <option>Salon</option>
          </select >
        </div>
           <div className="flex justify-end pr-1">
          <button onClick={addExpense} className="w-20 h-4 bg-blue-700 text-white text-xs rounded mb-1 ">Add Expense</button>
          </div>
   
{/* Expense History Section */}
  <h3 className="text-gray-700  text-sm font-bold text-center mb-4 pr-49  ">
    Expense History
  </h3>

  {expense.length === 0 ? (
    <p className="text-gray-700 text-xs text-center">
      No expenses added yet
    </p>
  ) : (
    <ul className="space-y-1">
      {expense.map((item) => (
        <li
  key={item.id}
  className="bg-white text-gray-700 text-xs p-2 flex justify-between items-center border-t border-gray-400"
>
  {/* LEFT SIDE */}
  <div className="flex flex-col">
    <p className="text-xs text-gray-600 font-bold">
      {item.category}
    </p>
    <p className="text-gray-500 font-medium">
      {item.title}
    </p>
  </div>

  {/* RIGHT SIDE */}
  <div className="flex items-center gap-3 min-w-27.5 justify-end">
    <p className="font-bold text-red-600">
      -₹{item.amount}
    </p>

    <button onClick={() => onDeleteExpense(item.id)}>
      <img src="/delete.png" alt="delete" width={20} />
    </button>
  </div>
</li>

      ))}
    </ul>
  )}
</div>

      </div>
    
  );
}