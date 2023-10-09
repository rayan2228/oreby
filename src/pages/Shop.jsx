import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/layouts/Container";
import SideBar from "../components/layouts/SideBar";
import Flex from "../components/layouts/Flex";
import Product from "../components/layouts/Product";
import Product1 from "../assets/product.png";
import Filter from "../components/layouts/Filter";
import { BsFillGridFill, BsListTask } from "react-icons/bs";
const Shop = () => {
  return (
    <section className="pt-[124px] pb-36">
      <Container>
        <Breadcrumb
          title={"products"}
          linkVal={"home"}
          link={"/"}
          currentPage={"products"}
          currentPageLink={window.location.pathname}
        />
        <Flex className={"gap-x-10 mt-32"}>
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
            <Flex
              className={" gap-x-[34px] flex-wrap  gap-y-[50px] justify-center"}
            >
              <Product
                className={"w-[31%]"}
                productImg={Product1}
                productPrice={"$44.00"}
                productTitle={"Basic Crew Neck Tee"}
                label={"new"}
                labelShow={true}
              />
              <Product
                className={"w-[31%]"}
                productImg={Product1}
                productPrice={"$44.00"}
                productTitle={"Basic Crew Neck Tee"}
                label={"new"}
                labelShow={true}
              />
              <Product
                className={"w-[31%]"}
                productImg={Product1}
                productPrice={"$44.00"}
                productTitle={"Basic Crew Neck Tee"}
                label={"new"}
                labelShow={true}
              />
              <Product
                className={"w-[31%]"}
                productImg={Product1}
                productPrice={"$44.00"}
                productTitle={"Basic Crew Neck Tee"}
                label={"new"}
                labelShow={true}
              />
              <Product
                className={"w-[31%]"}
                productImg={Product1}
                productPrice={"$44.00"}
                productTitle={"Basic Crew Neck Tee"}
                label={"new"}
                labelShow={true}
              />
              <Product
                className={"w-[31%]"}
                productImg={Product1}
                productPrice={"$44.00"}
                productTitle={"Basic Crew Neck Tee"}
                label={"new"}
                labelShow={true}
              />
              <Product
                className={"w-[31%]"}
                productImg={Product1}
                productPrice={"$44.00"}
                productTitle={"Basic Crew Neck Tee"}
                label={"new"}
                labelShow={true}
              />
              <Product
                className={"w-[31%]"}
                productImg={Product1}
                productPrice={"$44.00"}
                productTitle={"Basic Crew Neck Tee"}
                label={"new"}
                labelShow={true}
              />
              <Product
                className={"w-[31%]"}
                productImg={Product1}
                productPrice={"$44.00"}
                productTitle={"Basic Crew Neck Tee"}
                label={"new"}
                labelShow={true}
              />
              <Product
                className={"w-[31%]"}
                productImg={Product1}
                productPrice={"$44.00"}
                productTitle={"Basic Crew Neck Tee"}
                label={"new"}
                labelShow={true}
              />
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;
