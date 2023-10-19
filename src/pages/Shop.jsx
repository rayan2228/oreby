import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/layouts/Container";
import SideBar from "../components/layouts/SideBar";
import Flex from "../components/layouts/Flex";

import Filter from "../components/layouts/Filter";
import { BsFillGridFill, BsListTask } from "react-icons/bs";
import Paginate from "../components/layouts/Paginate";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      await fetch("https://dummyjson.com/products?limit=100")
        .then((result) => result.json())
        .then((data) => setProducts(data.products));
    };
    getProducts();
  }, []);
  return (
    <section className="pt-[124px] pb-36 ">
      <Container>
        <Breadcrumb
          title={"products"}
          linkVal={"home"}
          link={"/"}
          currentPage={"products"}
          currentPageLink={window.location.pathname}
        />
        <Flex className={"gap-x-10 mt-32 relative"}>
          <SideBar />
          <div className="w-[74%] ">
            <Flex className={" items-center  mb-16 "}>
              <Flex className={"w-[40%] gap-x-5 text-2xl"}>
                <BsFillGridFill />
                <BsListTask />
              </Flex>
              <Flex className={"w-[60%] justify-end gap-x-10"}>
                <Filter title={"Sort by:"} selectClass={"w-[239px]"}>
                  <option value="" className="">
                    Featured
                  </option>
                </Filter>
                <Filter title={"Show:"} selectClass={"w-[139px]"}>
                  <option value="">36</option>
                </Filter>
              </Flex>
            </Flex>

            <Paginate itemsPerPage={12} data={products} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;
