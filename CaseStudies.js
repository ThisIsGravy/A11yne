import React from 'react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'E-Commerce Website Accessibility Overhaul',
      description: 'Increased compliance by 95% and reduced bounce rates by 30%.',
      image: '/assets/ecommerce-case.jpg',
    },
    {
      title: 'Education Platform Accessibility Improvements',
      description: 'Achieved full WCAG compliance and boosted user engagement by 20%.',
      image: '/assets/education-case.jpg',
    },
  ];

  return (
    <div>
      <section className="bg-[#0033cc] text-white py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold">Success Stories</h1>
          <p className="mt-4 text-lg">Real results from real businesses.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#374151]">{study.title}</h2>
                <p className="mt-2 text-gray-600">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
