"use client";
import { ChangeEvent, useState } from "react";

export default function Home() {
  // State to hold the input number
  const [number, setNumber] = useState("");
  // State to hold the result of the number check
  const [result, setResult] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  const checkNumber = () => {
    const parsedNumber = parseInt(number, 10);
  if (!isNaN(parsedNumber)) { 
    if (parsedNumber % 2 === 0) {
      setResult("The number is even");
    } else {
      setResult("The number is odd");
    }
  } else {
    setResult("Please enter a valid number");
  }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">
        Check if a Number is Odd or Even
      </h1>
      <input
        type="text"
        placeholder="Enter a number"
        value={number}
        onChange={handleInputChange}
        className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-80"
      />
      <button
        onClick={checkNumber}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Check
      </button>
      <p className="mt-4">{result}</p>
    </div>
  );
}
