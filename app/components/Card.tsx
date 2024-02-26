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
    <div
      key={product.id}
      className="group flex flex-col justify-around phone:mt-4 mt-10 shadow-lg p-4 border-[1px] border-200 rounded-lg"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg desktop:aspect-h-8 desktop:aspect-w-7">
        <Image
          width={80}
          height={80}
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover object-center group-hover:opacity-80 py-2"
        />
      </div>

      <h3 className="mt-4 text-xl text-pretty text-800 font-semibold">
        {product.title}
      </h3>
      <h2 className="mt-4 text-sm text-700 truncate">{product.description}</h2>
      <p className="mt-4 text-xl font-bold text-900 ">$ {product.price}</p>
      {isShowButtom && (
        <div className=" w-full flex items-center justify-center">
          <button
            onClick={onClick}
            className="tablet:w-32 w-full mt-6 bg-300 hover:bg-700 text-100 font-bold py-2 px-4 rounded"
          >
            {titleButtom}
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
