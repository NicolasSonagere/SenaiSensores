import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const InputField = ({ label, onChange, value }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(
    label.toLowerCase() === 'password' ? 'password' : 
    label.toLowerCase() === 'email' ? 'email' : 'text'
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setInputType(showPassword ? 'password' : 'text');
  };

  return (
    <div className="mb-4 relative">
      <label htmlFor={label.toLowerCase()} className="block text-white font-bold mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          id={label.toLowerCase()}
          type={inputType}
          value={value}
          onChange={onChange}
          className="bg-transparent shadow border border-white rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline pr-10"
        />
        {label.toLowerCase() === 'password' && (
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;