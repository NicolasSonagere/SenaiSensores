import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ label, className, to, onClick }) => {
  const navigate = useNavigate();
  async function HandleClick(event) {
    try {
      event.preventDefault();
      await onClick()
      if (to) navigate(to)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <button
      onClick={HandleClick}
      className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;