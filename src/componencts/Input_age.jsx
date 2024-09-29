import React from "react";
import img from "../assets/images/icon-arrow.svg";


function Input_age({ setInput, input, calculator, error }) {
  const hdlChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full">
      <form className="flex flex-row pb-8 gap-5">
        <div className="flex flex-col">
          <label className="font-bold">DAY</label>
          <input
            type="number"
            placeholder="DD"
            name="day"
            value={input.day}
            onChange={hdlChange}
            className="w-32 h-12 border border-Light_grey px-2 font-bold rounded-md focus:border-purple focus:outline-none text-[32px]"
            min="1"
            max="31"
          />
          <p className="text-[12px] py-1 italic text-red-400">
            {error.day !== "" ? error.day : ""}
          </p>
        </div>

        <div className="flex flex-col">
          <label className="font-bold">MONTH</label>
          <input
            type="number"
            placeholder="MM"
            name="month"
            value={input.month}
            onChange={hdlChange}
            className="w-32 h-12 border border-Light_grey px-2 font-bold rounded-md focus:border-purple focus:outline-none text-[32px]"
            min="1"
            max="12"
          />
          <p className="text-[12px] py-1 italic text-red-400">
            {error.month !== "" ? error.month : ""}
          </p>
        </div>

        <div className="flex flex-col">
          <label className="font-bold">YEAR</label>
          <input
            type="number" 
            placeholder="YYYY"
            name="year"
            value={input.year}
            onChange={hdlChange}
            className="w-32 h-12 border border-Light_grey px-2 font-bold rounded-md focus:border-purple focus:outline-none text-[25px]"
            min="1900"  // You can set min/max values if needed
            max={new Date().getFullYear()}
          />
          <p className="text-[12px] py-1 italic text-red-400">
            {error.year !== "" ? error.year : ""}
          </p>
        </div>
      </form>

      <div className="relative">
        <hr />
        <button
          onClick={calculator}
          aria-label="Calculate age"
          className="absolute w-14 bg-black p-3 rounded-full hover:bg-purple bottom-0 right-0 transform translate-y-1/2"
        >
          <img src={img} alt="Arrow" />
        </button>
      </div>
    </div>
  );
}
export default Input_age;
