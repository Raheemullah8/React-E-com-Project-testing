import React from 'react';


function About() {
  

  return (
    <div className={`min-h-screen flex flex-col`}>
      {/* Banner Section */}
      <section className="flex flex-col items-center justify-center h-64 mb-8" >
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">Discover Amazing Products</h1>
          <p className="text-lg mb-4">Browse our exclusive range and find the best deals.</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-teal-900 px-6 py-3 rounded-lg font-semibold">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="flex flex-col items-center p-6">
        <div className={`shadow-lg rounded-lg p-8 max-w-4xl mb-8 `}>
          <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
          <p className="mb-6">
            Explore our selection of top-rated products. Find something special that fits your needs and taste.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
            View Products
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
