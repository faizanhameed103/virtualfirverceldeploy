import React, { useState } from "react";
const Pricing = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [totalImages, setTotalImages] = useState(0);
  const [pricePerImage, setPricePerImage] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const packages = [
    { name: "20 images", price: 0.4 },
    { name: "50 images", price: 0.35 },
    { name: "200 images", price: 0.28 },
    { name: "300 images", price: 0.26 },
    { name: "500 images", price: 0.25 },
    { name: "1000 images", price: 0.22 },
    { name: "5000 images", price: 0.2 },
    { name: "10000 images", price: 0.18 },
    { name: "50000 images", price: 0.12 },
  ];

  const handlePackageSelection = (index) => {
    setSelectedPackage(index);
    setTotalImages(parseInt(packages[index].name)); // Extract number of images from package name
    setPricePerImage(packages[index].price);
    calculateTotalPrice(parseInt(packages[index].name), packages[index].price);
  };

  const calculateTotalPrice = (numImages, pricePerImg) => {
    const total = numImages * pricePerImg;
    setTotalPrice(total.toFixed(2)); // Rounding total price to 2 decimal places
  };
  return (
    <div
      id="price"
      className="md:flex lg:flex lg:flex-row justify-evenly w-full items-center flex-wrap  px-8  flex-col text-zinc-800 my-10"
    >
      <div className="flex flex-col my-8 items-center bg-slate-100 p-8 rounded-lg cursor-pointer shadow-lg max-w-sm w-full">
        <div>
          <h2 className="font-extrabold text-3xl text-center mb-2">
            Essential Package
          </h2>
          <p className="opacity-60 text-center">
            Unleash the basics Features of Virtual Fit limitted access
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-10 cursor-pointer">
          <p className="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <b>Limitted Access</b>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 ml-1 fill-orange-300"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </p>
          <p className="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <b>5 Free Credits</b>
          </p>
          <p className="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <b>Limitted Services</b>
          </p>
          <p className="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <b>For Individual</b>
          </p>
          <p className="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <b>Basic Support</b>
          </p>
        </div>
        <div className="flex flex-col items-center mt-6 my-8">
          <p className="font-extrabold text-4xl">Free</p>
          <p className="text-sm opacity-100 text-black">/month</p>
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="#_"
            className="inline-flex items-center hover:scale-110 transition-all duration-500  justify-center h-12 px-6 py-0 text-sm font-semibold text-center no-underline align-middle transition-all duration-300 ease-in-out    rounded-full cursor-pointer select-none hover:text-black hover:border-black focus:shadow-xs focus:no-underline text-black border-solid border-2 border-black"
          >
            Try 1 Month
          </a>
        </div>
      </div>

      <div className="flex flex-col my-8 items-center bg-slate-100 p-8 rounded-lg cursor-pointer shadow-lg max-w-sm w-full">
        <h2 className="font-extrabold text-4xl text-center mb-4">
          Premium Package
        </h2>
        <p className="opacity-60 text-center">
          Unleash the Advance Features of Virtual Fit
        </p>
        <div className="w-full space-y-4">
          {" "}
          {packages.map((pkg, index) => (
            <label key={index} className="flex items-center text-lg">
              <input
                type="radio"
                name="package"
                checked={selectedPackage === index}
                onChange={() => handlePackageSelection(index)}
                className="mr-2"
              />
              <span className="ml-2">{pkg.name}</span>
              <span className="ml-auto">{pkg.price}/img</span>
            </label>
          ))}
        </div>
        <p className="text-2xl mt-4">
          Total price: <b>${totalPrice}</b>
        </p>
        /month
        <div className="flex justify-center mt-8">
          <a
            href="#_"
            className="inline-flex items-center hover:scale-110 transition-all duration-500 justify-center h-12 px-6 py-0 text-lg font-semibold text-center no-underline align-middle transition-all duration-300 ease-in-out rounded-full cursor-pointer select-none hover:text-black hover:border-black focus:shadow-xs focus:no-underline text-black border-solid border-2 border-black"
          >
            Try 1 Month
          </a>
        </div>
      </div>

      <div className="flex flex-col my-8 items-center  bg-slate-700 p-8 rounded-lg cursor-pointer shadow-lg relative max-w-sm w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          aria-hidden="true"
          className="w-20 h-20 absolute -top-11 -left-11 fill-[#FB6304]"
        >
          <path
            fill-rule="evenodd"
            d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p className="mono text-sm absolute -top-4 bg-[#FB6304] text-white py-0.5 px-2 font-bold tracking-wider rounded">
          POPULAR PACK
        </p>
        <div>
          <div className="flex gap-4 justify-center ">
            <p className="font-extrabold text-white text-3xl mb-2">
              Ultimate Package
            </p>
          </div>
          <p className="opacity-60 text-center text-white">
            Experience the pinnacle of our offerings, designed for those seeking
            the utmost Virtual Fit.
          </p>
          <p className="opacity-60 text-center"></p>
        </div>

        <div className="flex flex-col gap-2 my-10  text-white">
          <p className="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <b>Ultimate Access</b>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 ml-1 fill-orange-300"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </p>
          <p className="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <b>Custom Credits</b>
          </p>
          <p className="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <b>Advance Services</b>
          </p>
          <p className="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <b>For Businesses</b>
          </p>
          <p className="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <b>Premium Support</b>
          </p>
          <div className="flex gap-4 justify-center">
            <div className="flex flex-col items-center my-8">
              <p className="font-extrabold text-4xl">$15</p>
              <p className="text-sm opacity-60">/month</p>
            </div>
          </div>
          <div className="flex justify-center ">
            <a
              href="#_"
              className="inline-flex items-center hover:scale-110 transition-all duration-500 justify-center h-12 px-6 py-0 text-sm font-semibold text-center  no-underline align-middle transition-all duration-300 ease-in-out    rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline text-white border-solid border-2 border-white"
            >
              Try 1 Month
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
