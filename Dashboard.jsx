import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "Food", value: 38, color: "#8884d8" },
  { name: "Transport", value: 29, color: "#82ca9d" },
  { name: "Utilities", value: 14, color: "#f9c74f" },
  { name: "Entertainment", value: 19, color: "#f9844a" },
];

const barData = [
  { name: "Jan", amount: 1150 },
  { name: "Feb", amount: 1080 },
  { name: "Mar", amount: 1320 },
  { name: "Apr", amount: 1050 },
  { name: "May", amount: 1400 },
  { name: "Jun", amount: 1250 },
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-[#f7faff] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-600">Welcome back, bhargavitoorpu! Here's your financial overview.</p>
        </div>
        <button className="bg-[#5b3df0] hover:bg-[#472ae0] text-white px-4 py-2 rounded-md font-medium">
          + Add Expense
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Balance */}
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-sm text-gray-500">Total Balance</p>
          <h2 className="text-2xl font-bold text-green-600">₹2,345.67</h2>
          <p className="text-xs text-gray-500">+2.5% from last month</p>
        </div>
        {/* Expenses */}
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-sm text-gray-500">Monthly Expenses</p>
          <h2 className="text-2xl font-bold text-red-600">₹1,234.56</h2>
          <p className="text-xs text-gray-500">-5.2% from last month</p>
        </div>
        {/* Income */}
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-sm text-gray-500">Monthly Income</p>
          <h2 className="text-2xl font-bold text-green-600">₹3,500.00</h2>
          <p className="text-xs text-gray-500">+1.2% from last month</p>
        </div>
        {/* Savings Rate */}
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-sm text-gray-500">Savings Rate</p>
          <h2 className="text-2xl font-bold text-blue-600">64.7%</h2>
          <p className="text-xs text-gray-500">+8.1% from last month</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Expense Categories Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Expense Categories</h3>
          <p className="text-sm text-gray-500 mb-4">Breakdown of your spending by category</p>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Trends Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Monthly Trend</h3>
          <p className="text-sm text-gray-500 mb-4">Your spending over the last 6 months</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#8884d8" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
