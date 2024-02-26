"use client";

import { useSelector } from "react-redux";
import { toast } from "sonner";

import { productsAddCartSelector } from "../common/store/selector";
import Card from "../components/Card";
import { useAppDispatch } from "../common/store/hooks";
import { deleteToCart } from "../common/store/actions";
import { Products } from "../common";

const ShoppingCart: React.FC = () => {
  const dispatch = useAppDispatch();
  const productsInCart = useSelector(productsAddCartSelector);

  const totalPrice = productsInCart.reduce(
    (total, product) => total + product.price,
    0
  );

  const handleDeleteToCart = (product: Products) => {
    dispatch(deleteToCart(product));
    toast.info(`Product "${product.title}" deleted from shopping cart`);
  };

  return (
    <div className="bg-black overflow-y-auto mt-10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 phone:grid-cols-2 desktop:grid-cols-3 gap-6">
          <div className="col-span-1 tablet:col-span-2 desktop:col-span-3 bg-white rounded-lg p-6 tablet:p-10 text-950">
            <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
            <h2 className="text-xl font-semibold mb-4">
              Total Products: {productsInCart.length}
            </h2>
            <h2 className="text-xl font-semibold mb-4">
              Total Price: ${Math.floor(totalPrice).toFixed(2)}
            </h2>
            {productsInCart.length === 0 ? (
              <p>There are no products in the cart</p>
            ) : (
              <ul className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6">
                {productsInCart.map((product) => (
                  <Card
                    key={product.id}
                    product={product}
                    titleButtom="Delete"
                    onClick={() => handleDeleteToCart(product)}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
