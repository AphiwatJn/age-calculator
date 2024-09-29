import React from "react";
import Input_age from "../componencts/input_age";
import Calculator_age from "../componencts/calculator_age";
import { useState } from "react";
import { Input } from "postcss";


function Age_calculator_page() {
  const [input, setInput] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [show, setShow] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [error, setError] = useState({
    day: "",
    month: "",
    year: "",
  });

  const calculator = () => {
    let isValid = true;

    // Validate day
    if (!input.day || isNaN(input.day) || input.day < 1 || input.day > 31) {
      setError((prev) => ({ ...prev, day: "Invalid day" }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, day: "" }));
    }

    // Validate month
    if (!input.month || isNaN(input.month) || input.month < 1 || input.month > 12) {
      setError((prev) => ({ ...prev, month: "Invalid month" }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, month: "" }));
    }

    // Validate year
    const currentYear = new Date().getFullYear();
    if (!input.year || isNaN(input.year) || input.year.length !== 4 || input.year > currentYear) {
      setError((prev) => ({ ...prev, year: "Invalid year" }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, year: "" }));
    }

    if (isValid) {
      const dob = new Date(`${input.year}-${input.month}-${input.day}`);
      const today = new Date();

      let years = today.getFullYear() - dob.getFullYear();
      let months = today.getMonth() - dob.getMonth();
      let days = today.getDate() - dob.getDate();

      if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      setShow({
        day: days,
        month: months,
        year: years,
      });
    }
  };

  return (
    <div className="h-dvh flex justify-center items-center bg-Off_white">
      <div className="flex flex-col justify-start p-8 w-[600px] h-[450px] bg-White rounded-3xl rounded-br-[150px]">
        <Input_age setInput={setInput} input={input} calculator={calculator} error={error} />
        <Calculator_age show={show} />
      </div>
    </div>
  );
}

export default Age_calculator_page;
