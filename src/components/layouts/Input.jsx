import React from "react";

const Input = ({
  className,
  label,
  type,
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <div className={className}>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="block border-b border-gray-400 w-full outline-transparent"
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;
