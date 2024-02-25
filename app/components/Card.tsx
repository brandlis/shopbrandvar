import Image from "next/image";
import { Products } from "../common/helpers/types";

type Props = {
  onClick: () => void;
  product: Products;
  titleButtom?: string;
  isShowButtom?: boolean;
};

const Card = ({
  product,
  titleButtom = "Add To Card",
  isShowButtom = true,
  onClick,
}: Props) => {
  return (
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
      <h2 className="mt-4 text-sm text-gray-700">{product.description}</h2>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
      {isShowButtom && (
        <button
          onClick={onClick}
          className="bg-300 hover:bg-500 text-100 font-bold py-2 px-4 rounded"
        >
          {titleButtom}
        </button>
      )}
    </div>
  );
};

export default Card;
