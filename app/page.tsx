"use client";
import React, { useEffect } from "react";
import Card from "./components/Card";

import { useAppDispatch, useAppSelector } from "./common/store/hooks";
import { addToCart, getDataThunks } from "./common/store/actions";
import {
  productsHomeSelector,
  productsSelectorLoading,
} from "./common/store/selector";

export default function Home() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(productsSelectorLoading);
  const products = useAppSelector(productsHomeSelector);

  const getAllProducts = async () => {
    try {
      const responseAllProducts = await dispatch(getDataThunks()).unwrap();

      if (responseAllProducts.success && responseAllProducts.response) {
        return;
      }

      throw new Error(responseAllProducts.errorMessage);
    } catch (error) {
      //TODO: REDIRECT TRY AGAIN
      console.log(error);
    }
  };

  useEffect(() => {
    if (!products) getAllProducts();
  }, [products]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 phone:px-6 phone:py-24 laptop:max-w-7xl laptop:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 phone:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 desktop:gap-x-8">
        {products &&
          products.map((product) => (
            <Card
              key={product.id}
              product={product}
              onClick={() => dispatch(addToCart(product))}
            />
          ))}
      </div>
    </div>
  );
}
