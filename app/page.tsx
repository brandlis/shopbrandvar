"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 phone:px-6 phone:py-24 laptop:max-w-7xl laptop:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 phone:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 desktop:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <Image
                width={200}
                height={200}
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>

            <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
            <h2 className="mt-4 text-sm text-gray-700">
              {product.description}
            </h2>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
