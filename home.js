import React from 'react';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <section className="bg-[#0033cc] text-white py-20 text-center" role="banner">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold">Welcome to A11yne Accessibility Consulting</h1>
          <p className="mt-4 text-lg">Your partner in creating an inclusive digital world.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Our Features</h2>
          <ul className="text-lg text-[#374151] space-y-4 max-w-3xl mx-auto">
            <li>✔️ Accessibility Audits</li>
            <li>✔️ WCAG Compliance</li>
            <li>✔️ Training and Consulting</li>
            <li>✔️ Continuous Monitoring</li>
          </ul>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Home;
