"use client";

import React, { useEffect, useState } from "react";

import Card from "./components/Card";
import { useAppDispatch, useAppSelector } from "./common/store/hooks";
import { addToCart, getDataThunks } from "./common/store/actions";
import {
  productsSelectorLoading,
  productsSelector,
} from "./common/store/selector";
import { Products } from "./common";
import Pagination from "./components/Pagination";

const itemsPerPage = 4;

export default function Home() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(productsSelectorLoading);
  const allProducts = useAppSelector(productsSelector);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const getCurrentPageProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allProducts.slice(startIndex, endIndex);
  };

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(getDataThunks());
    }
  }, [dispatch, allProducts.length]);

  const handleAddToCart = (product: Products) => {
    dispatch(addToCart(product));
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 phone:px-6 phone:py-24 laptop:max-w-7xl laptop:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 phone:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 desktop:gap-x-8">
        {getCurrentPageProducts().map((product) => (
          <Card
            key={product.id}
            product={product}
            onClick={() => handleAddToCart(product)}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePagination={setCurrentPage}
        isDisabledNext={currentPage === totalPages}
        isDisabledPrev={currentPage <= 1}
      />
    </div>
  );
}
