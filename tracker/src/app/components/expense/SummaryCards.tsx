type SummaryCardsProps={
  income: number;
  totalExpense:number;
  balance: number;
}

export default function SummaryCards({
  income,
  totalExpense,
  balance,
}: SummaryCardsProps){
  return (
    <div className=" flex items-center justify-center  bg-gray-100">
    <div className="bg-gray-100 flex items-center justify-between w-80 h-12 p-1">

      <div className="bg-green-500 text-white w-23 h-8 flex flex-col items-center justify-center rounded shadow-lg">
        <h5 className="text-xs ">💰 Income</h5>
        <p className="font-bold text-xs">+ ₹{income}</p>
          
        </div>

<div className="bg-red-500 text-white w-23 h-8 flex flex-col items-center justify-center rounded shadow-lg ">
        <h5 className="text-xs ">⇩ Expenses</h5>
        <p className="font-bold text-xs">- +₹{totalExpense}</p>
        </div>

<div className="bg-blue-600 text-white w-23 h-8 flex flex-col items-center justify-center rounded shadow-lg">
        <h5 className="text-xs">💵 Balance</h5>
        <p className="font-bold text-xs">₹{balance}</p>
        </div>

      </div>
    </div>
  );
}
