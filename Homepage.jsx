import React from "react";

const features = [
  {
    icon: "₹",
    title: "Expense Tracking",
    description:
      "Add, edit, and categorize your expenses with ease. Never lose track of where your money goes.",
  },
  {
    icon: "📈",
    title: "Bank Integration",
    description:
      "Connect your bank accounts and automatically import transactions for seamless tracking.",
  },
  {
    icon: "📊",
    title: "Visual Analytics",
    description:
      "Beautiful charts and graphs to visualize your spending patterns and financial trends.",
  },
  {
    icon: "📌",
    title: "Smart Insights",
    description:
      "Get personalized insights and recommendations to improve your financial health.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f1f5ff] text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2 text-xl font-semibold text-[#3b3b3b]">
          <span className="text-indigo-600 text-2xl">₹</span>
          Expense<span className="font-bold">Tracker</span>
        </div>
        <div className="flex gap-4">
          <button className="text-gray-700 hover:underline">Login</button>
          <button className="bg-black text-white px-4 py-2 rounded">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Take Control of Your <span className="text-indigo-600">Finances</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-6">
          Track expenses, connect bank accounts, and get insights into your spending habits with our comprehensive personal finance tracker.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded shadow hover:bg-indigo-700">
            Start Tracking Now
          </button>
          <button className="bg-white border border-gray-300 text-gray-800 px-6 py-2 rounded shadow hover:bg-gray-100">
            Sign In
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 pb-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <div className="text-3xl bg-indigo-100 text-indigo-600 w-12 h-12 mx-auto flex items-center justify-center rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}