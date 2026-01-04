"use client";

import { useState } from "react";
  
export default function ExpenseList(){

const [title, setTitle] = useState("");
const [amount, setAmount] = useState("");
const [category, setCategory] = useState("");  

const [expense, setExpense] = useState([
  {
    id: Date.now(),
title,
amount: Number(amount),
category,
  }
]);

const addExpense = () => {
if (!title || !amount || !category) return;
const newExpense = {
id: Date.now(),
title,
amount: Number(amount),
category,
};
setExpense([...expense, newExpense]);
setTitle("");
setAmount("");
setCategory("");
};

const deleteExpense =(id: number)=>
  {
    const updatedExpense = expense.filter((item)=> item.id !==id)
    setExpense(updatedExpense);
  }

    return(
        <div className="flex items-center justify-center bg-gray-100">
            <div className="bg-amber-500 w-80 ">
                <h3 className="pl-2 font-bold text-sm text-gray-700">Expense History</h3>

                <div className="bg-amber-700">
                  <ol>
                    <li></li>
                  </ol>
                </div>
            </div>
        </div>
    );
}