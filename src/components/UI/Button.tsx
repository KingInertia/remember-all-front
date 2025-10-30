import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block border-2 border-primary duration-200 rounded-3xl 
                 hover:shadow-[0px_0px_20px_8px_#66FFE9] puzzle-img cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
