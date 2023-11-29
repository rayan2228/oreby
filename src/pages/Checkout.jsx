import React, { useEffect } from "react";
import Container from "../components/layouts/Container";
import Flex from "../components/layouts/Flex";
import Breadcrumb from "../components/Breadcrumb";
import { useState } from "react";
import Input from "../components/layouts/Input";
const Checkout = () => {
  const [couponArea, setCouponArea] = useState(false);
  const [bank, setBank] = useState(false);
  const [bank2, setBank2] = useState(false);
  const [inputValues, setInputValues] = useState({
    fName: "",
    lName: "",
    country: "",
    address: "",
    city: "",
    postCode: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    fName: "",
    lName: "",
    country: "",
    address: "",
    city: "",
    postCode: "",
    phone: "",
    email: "",
  });

  const checkValidation = () => {
    if (!inputValues.fName) {
      setErrors({ ...errors, fName: "nam daw nai" });
    }
  };
  const handleInputs = (e) => {
    let { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    setErrors({ ...inputValues, [name]: "" });
  };
  const handleCheckout = (e) => {
    e.preventDefault();
    checkValidation();
  };
  return (
    <section>
      <Container>
        <Breadcrumb
          title={window.location.pathname.split("/")[1]}
          linkVal={"home"}
          link={"/"}
          currentPage={window.location.pathname.split("/")[1]}
          currentPageLink={window.location.pathname}
        />
        <h6 className="mt-10">
          Have a coupon?{" "}
          <span onClick={() => setCouponArea(!couponArea)}>
            Click here to enter your code
          </span>
        </h6>
        {couponArea && (
          <Flex
            className={
              "p-32 w-[600px] gap-x-3 border-dashed border border-gray-400 "
            }
          >
            <input type="text" className="border border-gray-400" />{" "}
            <button>apply coupon</button>
          </Flex>
        )}
        <h2 className="text-2xl">Billing Details</h2>
        <Flex className={"flex-col my-10 w-[1054px] gap-y-10"}>
          <Flex className={"gap-x-10"}>
            <div>
              <Input
                label={"First Name *"}
                placeholder={"First Name"}
                className={"w-[509px]"}
                type={"text"}
                value={inputValues.fName}
                onChange={handleInputs}
                name="fName"
              />
              <p className="text-red-500">{errors.fName}</p>
            </div>
            <Input
              label={"Last Name *"}
              placeholder={"Last Name"}
              className={"w-[509px]"}
              type={"text"}
              value={inputValues.lName}
              onChange={handleInputs}
              name="lName"
            />
          </Flex>
          <Input
            label={"Company Name (optional)"}
            placeholder={"Company Name"}
            className={"w-full"}
            type={"text"}
          />
          <div>
            <label htmlFor="">Country *</label>
            <select
              name="country"
              id=""
              className="block outline-transparent w-full border-b border-gray-400"
              value={inputValues.country}
              onChange={handleInputs}
            >
              <option value="">Please select</option>
            </select>
          </div>
          <Input
            label={"Street Address *"}
            placeholder={"House number and street name"}
            value={inputValues.address}
            onChange={handleInputs}
            name="address"
          />
          <Input placeholder={"House number and street name"} />
          <Input
            label={"Town/City *"}
            placeholder={"House number and street name"}
            value={inputValues.city}
            onChange={handleInputs}
            name="city"
          />
          <Input
            label={"County (optional)"}
            placeholder={"House number and street name"}
          />
          <Input
            label={"Post Code *"}
            placeholder={"House number and street name"}
            value={inputValues.postCode}
            onChange={handleInputs}
            name="postCode"
          />
          <Input
            label={"Phone *"}
            placeholder={"House number and street name"}
            value={inputValues.phone}
            onChange={handleInputs}
            name="phone"
          />
          <Input
            label={"Email Address *"}
            placeholder={"House number and street name"}
            type={"email"}
            value={inputValues.email}
            onChange={handleInputs}
            name="email"
          />
          <div>
            <h2 className="text-2xl">Additional Information</h2>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full outline-gray-400 border border-gray-400"
              placeholder="Notes about your order, e.g. special notes for delivery."
            ></textarea>
          </div>
        </Flex>

        <h2 className="text-2xl">Your Order</h2>
        <Flex className={"w-[644px]  mt-6 border border-[#F0F0F0] flex-wrap"}>
          <h6 className="w-1/2 py-4 px-5 border-r border-b border-[#F0F0F0]">
            Subtotal
          </h6>
          <h6 className="w-1/2 py-4 px-5 border-b border-[#F0F0F0]">3044 $</h6>
          <h6 className="w-1/2 py-4 px-5 border-r  border-[#F0F0F0]">Total</h6>
          <h6 className="w-1/2 py-4 px-5">2440 $</h6>
          <h6 className="w-1/2 py-4 px-5 border-r  border-[#F0F0F0]">Total</h6>
          <h6 className="w-1/2 py-4 px-5">2440 $</h6>
          <h6 className="w-1/2 py-4 px-5 border-r  border-[#F0F0F0]">Total</h6>
          <h6 className="w-1/2 py-4 px-5">2440 $</h6>
        </Flex>
        <div className="p-6 w-[1053px]">
          <div>
            <input
              type="radio"
              name="payment"
              onChange={() => {
                setBank(!bank), setBank2(false);
              }}
            />
            <label htmlFor="">bank</label>
            {bank && (
              <p className="bg-green-50 p-3">
                Pay via Bank; you can pay with your credit card if you don’t
                have a Bank account.
              </p>
            )}
          </div>
          <div>
            <input
              type="radio"
              name="payment"
              onChange={() => {
                setBank2(!bank2), setBank(false);
              }}
            />
            <label htmlFor="">bank 2</label>
            {bank2 && (
              <p className="bg-green-50 p-3">
                Pay via Bank; you can pay with your credit card if you don’t
                have a Bank account.
              </p>
            )}
          </div>
          <h6>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </h6>
          <button
            className={
              "bg-black text-white font-bold inline-block py-4 px-6 mt-8 rounded-md"
            }
            onClick={handleCheckout}
          >
            Proceed to Bank
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Checkout;
