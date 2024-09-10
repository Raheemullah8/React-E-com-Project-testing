import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Category from './Category';
import useTheme from '../../themeContext/ThemeContext';

function Product() {
  const {themeMode} = useTheme()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categorys, setCategory] = useState([]);
  const [chosen, setChosen] = useState("All");
  const [sortCriteria, setSortCriteria] = useState("default");

  useEffect(() => {
    // Fetch products from the API
    const url = chosen === "All"
      ? 'https://dummyjson.com/products'
      : `https://dummyjson.com/products/category/${chosen}`;

    axios.get(url)
      .then((response) => {
        setProducts(response?.data?.products);
        setLoading(false); // Data has been fetched, so set loading to false
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // In case of error, stop loading
      });
  }, [chosen]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then((response) => {
        setCategory(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (sortCriteria === 'priceAsc') {
      setProducts((prevProducts) =>
        [...prevProducts].sort((a, b) => a.price - b.price)
      );
    } else if (sortCriteria === 'priceDesc') {
      setProducts((prevProducts) =>
        [...prevProducts].sort((a, b) => b.price - a.price)
      );
    } else if (sortCriteria === 'category') {
      setProducts((prevProducts) =>
        [...prevProducts].sort((a, b) => a.category.localeCompare(b.category))
      );
    }
  }, [sortCriteria]);

  return (
    <div className='container mx-auto px-4'>
      {/* Display loading message while data is being fetched */}
      {loading ? (
        <h1 className='text-center text-3xl'>Loading...</h1>
      ) : (
        <div>
          <div className='flex flex-wrap gap-5 mt-10 mb-5'>
            <Category
              isChosen={chosen === "All"}
              onclick={() => setChosen("All")}
              category={{ slug: "All", name: "All" }}
            />
            {categorys.map((category) => (
              <Category
                key={category.slug}
                onclick={() => setChosen(category.slug)}
                isChosen={chosen === category.slug}
                category={category}
              />
            ))}
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <select
                value={sortCriteria}
                onChange={(e) => setSortCriteria(e.target.value)}
                className={`${themeMode == 'dark'?'text-white':'text-black'} block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500`}
              >
                <option value="default">Sort by</option>
                <option value="priceAsc">Price (Low to High)</option>
                <option value="priceDesc">Price (High to Low)</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
