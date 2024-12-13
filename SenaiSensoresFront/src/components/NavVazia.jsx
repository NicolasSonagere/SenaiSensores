import React from 'react';
import { Link } from 'react-router-dom';

const NavbarVazia = () => {
  return (
    <nav className="bg-[#1a1a1a] p-4 shadow-xl">
      <Link to="/" className="text-white font-bold text-xl">Senai Sensores</Link>
    </nav>
    );
};

export default NavbarVazia;