import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import Flex from "../layouts/Flex";
const Paginate = ({ itemsPerPage, data }) => {
  // Example items, to simulate fetching from another resources.
  const items = data;
  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((product) => (
            <Product
              key={product.id}
              link={`/shop/${product.id}`}
              className={"w-[31%]"}
              productImg={product.thumbnail}
              productPrice={`$ ${product.price}`}
              productTitle={product.title}
              label={product.brand}
              labelShow={true}
            />
          ))}
      </>
    );
  }
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setLastPage(event.selected === pageCount - 1);
    setItemOffset(newOffset);
  };
  return (
    <>
      <Flex
        className={
          " gap-x-[34px] flex-wrap  gap-y-[50px] justify-center items-center  "
        }
      >
        <Items currentItems={currentItems} />
      </Flex>
      <ReactPaginate
        className="flex gap-x-2 mt-10 items-center relative "
        pageClassName="py-2 px-4   border border-[#F0F0F0]"
        activeClassName="text-white bg-black"
        breakClassName="self-end"
        breakLabel="..."
        nextLabel={`Products from ${itemOffset === 0 ? 1 : itemOffset} to ${
          lastPage ? items.length : endOffset
        } of ${items.length}`}
        nextClassName="absolute bottom-0 right-0"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Paginate;
