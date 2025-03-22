"use client"

import { FaChevronDown } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
import { useState } from "react";
import "@/app/globals.css"

export default function Dropdown({ value, setValue, allValues }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-wrapper">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-button"
        title={`Conversion Options: ${allValues[value]}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {allValues[value]}
        <FaChevronDown />
      </button>
      <div
        className={`dropdown-option-wrapper ${isOpen ? "open" : ""}`}
        role="menu"
      >
        <div className="py-1" role="none">
          {Object.keys(allValues).map((key) => (
            <div
              key={key}
              className="dropdown-option"
              role="menuitem"
              onClick={() => {
                setValue(key);
                setIsOpen(false);
              }}
            >
              {allValues[key]}
              <span className="dropdown-icon">
                {value === key && <IoCheckmark />}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
