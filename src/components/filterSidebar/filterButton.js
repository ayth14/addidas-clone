import React from "react";
import tw from "tailwind-styled-components";

const ButtonContainer = tw.div`
bg-white flex items-end justify-end px-6
`;

const Button = tw.button`
  text-black font-semibold border-2 border-black py-2 px-4 rounded-0 hover:text-gray-500
  flex items-center gap-2
  z-30
`;
const Text = tw.span`
  text-md lg:block hidden
`;
const filterButton = (props) => {
  const { toggleSidebar } = props;

  return (
    <ButtonContainer>
      <Button onClick={toggleSidebar}>
        <Text>Filter & Sort</Text>
        <i className="fa fa-filter" aria-hidden="true"></i>
      </Button>
    </ButtonContainer>
  );
};

export default filterButton;
