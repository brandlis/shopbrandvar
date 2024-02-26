import React, { Dispatch, SetStateAction } from "react";

type Props = {
  isDisabledPrev?: boolean;
  currentPage: string | number;
  totalPages?: string | number | null | undefined;
  handlePagination: Dispatch<SetStateAction<number>>;
  isDisabledNext?: boolean;
};

const Pagination: React.FC<Props> = ({
  isDisabledPrev,
  currentPage,
  totalPages,
  handlePagination,
  isDisabledNext,
}) => {
  return (
    <div className=" mt-20 flex justify-center w-full ">
      <button
        className="px-4 py-2 bg-500 text-100 rounded-md mr-2 font-bold hover:bg-800 "
        onClick={() => {
          handlePagination((prev) => prev - 1);
        }}
        style={{ letterSpacing: "2px" }}
        disabled={isDisabledPrev}
      >
        Previous
      </button>
      <div className="flex">
        <p className="px-4 py-2 rounded-md mx-1  text-900 ">
          {currentPage}/{totalPages}
        </p>
      </div>
      <button
        className="px-4 py-2 bg-500 text-100 rounded-md font-bold hover:bg-800 "
        onClick={() => {
          handlePagination((prev) => prev + 1);
        }}
        disabled={isDisabledNext}
        style={{ letterSpacing: "2px" }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
