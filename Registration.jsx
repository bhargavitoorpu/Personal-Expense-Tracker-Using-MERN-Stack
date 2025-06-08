import React from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const expenses = [
  {
    id: 1,
    title: "Grocery Store",
    category: "Food",
    date: "2024-01-15",
    amount: 85.5,
  },
  {
    id: 2,
    title: "Gas Station",
    category: "Transport",
    date: "2024-01-14",
    amount: 45.0,
  },
  {
    id: 3,
    title: "Netflix Subscription",
    category: "Entertainment",
    date: "2024-01-12",
    amount: 15.99,
  },
];

const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);

const Expenses = () => {
  return (
    <div className="p-6 bg-[#f7faff] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Expenses</h1>
          <p className="text-sm text-gray-600">Manage and track your expenses</p>
        </div>
        <button className="bg-[#5b3df0] hover:bg-[#472ae0] text-white px-4 py-2 rounded-md font-medium">
          + Add Expense
        </button>
      </div>

      {/* Expense Summary */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold">Expense Summary</h3>
        <p className="text-sm text-gray-500 mb-2">Overview of your total expenses</p>
        <h2 className="text-3xl font-bold text-[#5b3df0]">₹{totalExpense.toFixed(2)}</h2>
        <p className="text-sm text-gray-600">Total expenses across {expenses.length} transactions</p>
      </div>

      {/* All Expenses List */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">All Expenses</h3>
        <p className="text-sm text-gray-500 mb-4">View and manage your expense records</p>

        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="flex justify-between items-center py-3 border-b last:border-b-0"
          >
            <div>
              <h4 className="font-medium">{expense.title}</h4>
              <p className="text-sm text-gray-500">
                {expense.category} • {expense.date}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-600 font-semibold">₹{expense.amount.toFixed(2)}</span>
              <button className="p-1 hover:bg-gray-200 rounded">
                <PencilIcon className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <TrashIcon className="h-5 w-5 text-red-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expenses;
