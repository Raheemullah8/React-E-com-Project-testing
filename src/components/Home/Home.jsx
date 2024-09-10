import React from 'react';
import useTheme from '../../themeContext/ThemeContext.js'

function Home() {
  const{themeMode}=useTheme()

  return (
    <div className={` mt-10 flex flex-col md:flex-row `}>
      {/* Left Side - E-commerce Content */}
      <div className={`w-full md:w-1/2 p-6  flex flex-col justify-center items-center md:items-start`}>
        <h1 className="text-3xl font-bold mb-4 transition-transform transform hover:scale-105">
          E-Commerce Content
        </h1>
        <p className="mb-4 text-lg leading-relaxed transition-opacity hover:opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
        </p>
        <p className="text-lg leading-relaxed transition-opacity hover:opacity-80">
          Nulla facilisi. Curabitur non libero urna, tincidunt magna a, condimentum justo. Sed euismod metus et felis efficitur, sed pretium mi consequat.
        </p>
      </div>

      {/* Right Side - E-commerce Images */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
        <img
          src="https://img.freepik.com/premium-photo/young-man-with-shopping-cart-bags-isolated-white_85869-2842.jpg?w=740"
          alt="E-commerce"
          className="max-w-full h-auto object-cover  rounded-full  shadow-lg transition-transform transform hover:scale-105"
        />
      </div>
    </div>
  );
}

export default Home;
