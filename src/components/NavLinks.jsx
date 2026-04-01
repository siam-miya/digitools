import React from 'react';

const NavLinks = ({ element, setOpen }) => {
  return (
    <li className="list-none">
      <a 
        href={element.path} 
        className="hover:text-[#4F39F6] transition-colors duration-200 block md:inline-block"
        onClick={() => setOpen && setOpen(false)} 
      >
        {element.name}
      </a>
    </li>
  );
};

export default NavLinks;