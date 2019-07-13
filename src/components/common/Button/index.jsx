import React from "react";

const Button = ({ children, className, type, href }) => {
  return (
    <button className={className} type={type} href={href}>
      {children}
    </button>
  );
};

export default Button;
