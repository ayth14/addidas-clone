import React, { useState } from "react";
import tw from "tailwind-styled-components";

const DropdownContainer = tw.div`
  border-b border-gray-300 pb-2
`;

const DropdownLabel = tw.button`
  flex justify-between items-center w-full text-left text-lg font-semibold py-2
`;

const DropdownContent = tw.div`
  ${(p) => (p.$isOpen ? "block" : "hidden")} mt-2 space-y-2
`;

const DropdownItem = tw.div`
  cursor-pointer hover:text-blue-600
`;

const Dropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer>
      <DropdownLabel onClick={() => setIsOpen(!isOpen)}>
        {label}
        <span>
          {isOpen ? (
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          )}
        </span>
      </DropdownLabel>
      <DropdownContent $isOpen={isOpen}>
        {options.map((option, index) => (
          <DropdownItem key={index}>{option}</DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
