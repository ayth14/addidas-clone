import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { ProductCard } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";


const ProductListContainer = tw.div`
  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6
`;

const ProductList = () => {
  const dispatch = useDispatch();
  const productList = useSelector(
    (state) => state.product.productList
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ProductListContainer>
      {productList && productList.length > 0 ? (
        productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div>
          NO Products Found
        </div>

      )
      }
    </ProductListContainer>
  );
};

export default ProductList;
