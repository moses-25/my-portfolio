// src/components/common/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  icon,
}) => {
  const baseClasses = 'px-6 py-3 font-medium rounded-lg transition-colors duration-300 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    secondary: 'bg-white hover:bg-gray-100 text-indigo-600',
    outline: 'border border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {icon && <i className={`${icon} mr-2`}></i>}
      {children}
    </button>
  );
};

export default Button;
