import React, { useState } from 'react';

const PricingCalculator = () => {
  const [users, setUsers] = useState(10);
  const [features, setFeatures] = useState('basic');

  const calculatePrice = () => {
    let basePrice = 100;
    if (features === 'pro') basePrice += 50;
    if (features === 'enterprise') basePrice += 150;

    return basePrice + users * 10;
  };

  return (
    <div className="py-20">
      <div className="container mx-auto text-center max-w-lg">
        <h2 className="text-4xl font-bold mb-10">Calculate Your Pricing</h2>
        <form className="bg-white p-6 shadow-md rounded-lg">
          <label htmlFor="users" className="block text-[#374151] font-semibold mb-2">
            Number of Users
          </label>
          <input
            type="number"
            id="users"
            value={users}
            onChange={(e) => setUsers(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0033cc]"
            min="1"
          />

          <label htmlFor="features" className="block text-[#374151] font-semibold mt-4 mb-2">
            Features
          </label>
          <select
            id="features"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0033cc]"
          >
            <option value="basic">Basic</option>
            <option value="pro">Pro</option>
            <option value="enterprise">Enterprise</option>
          </select>

          <div className="mt-6">
            <p className="text-xl font-bold">Estimated Price: ${calculatePrice()}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PricingCalculator;
