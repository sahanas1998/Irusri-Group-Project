import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ProductCard from "../components/cards/ProductCard";
import ProductDetails from "../constants/ProductDetails";

function Blog() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCardClick = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? ProductDetails
      : ProductDetails.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="py-[40px] mx:px-[24px] px-[16px] bg-[#0b0706]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[24px]">
          <div className="flex md:flex-row flex-col gap-[12px] justify-between items-center">
            <div className="flex md:flex-row flex-col gap-[12px] justify-between w-full">
              <h2 className="text-[32px] font-Urbanist text-white">
                All Products
              </h2>
              <select
                  className="custom-select px-[12px] py-[12px] md:w-[400px] rounded-[8px] border text-white border-[#a72425] bg-transparent"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="All">All</option>
                  <option value="Dresses">Dresses</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Medal">Medal</option>
                  <option value="Balls">Balls</option>
                </select>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[24px]">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                img={product.img}
                price={product.price}
                body={product.body}
                size={product.size}
                clickCard={() => handleCardClick(product)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
