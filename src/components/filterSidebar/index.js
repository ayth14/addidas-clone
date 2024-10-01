import React from 'react';
import tw from 'tailwind-styled-components';
import Dropdown from './Dropdown';

const SidebarContainer = tw.div`
  fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 transform
  w-full sm:w-64 z-50 overflow-y-auto ${(p) => (p.$isOpen ? 'translate-x-0' : 'translate-x-full')}
`;

const Overlay = tw.div`
  ${(p) => (p.$isOpen ? 'fixed inset-0 bg-black opacity-50' : 'hidden')}
  transition-opacity duration-300 z-40
`;

const CloseButton = tw.button`
  text-gray-500 p-2 hover:text-gray-700 absolute top-2 right-4
`;

const SidebarHeader = tw.h2`
  text-xl font-semibold p-4
`;

const SidebarContent = tw.div`
  p-4 space-y-4
`;

const FilterSidebar = ({ isOpen, toggleSidebar }) => {
  const filterCategories = [
    { label: 'Sort By', options: ['Price', 'Newest', 'Popular'] },
    { label: 'Feature', options: ['Best Seller', 'Limited Edition'] },
    { label: 'Division', options: ['Men', 'Women', 'Kids'] },
    { label: 'Color', options: ['Black', 'White', 'Red', 'Blue'] },
    { label: 'Discount', options: ['10%', '20%', '30%'] },
    { label: 'Gender', options: ['Male', 'Female'] },
    { label: 'Sport', options: ['Football', 'Basketball', 'Running'] },
  ];

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={toggleSidebar} />
      <SidebarContainer $isOpen={isOpen}>
        <CloseButton onClick={toggleSidebar}>
          <i className="fa fa-close" aria-hidden="true"></i>
        </CloseButton>
        <SidebarHeader>Filter & Sort</SidebarHeader>
        <SidebarContent>
          {filterCategories.map((category, index) => (
            <Dropdown key={index} label={category.label} options={category.options} />
          ))}
        </SidebarContent>
      </SidebarContainer>
    </>
  );
};

export default FilterSidebar;
