import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputClassName?: string;
  error?: boolean | string;
}

const IInput = ({ className, inputClassName, error, ...props }: Props) => {
  return (
    <div className={`w-full ${className}`}>
      <p className="text-primary">{props.label}</p>
      <input
        type="text"
        className={`border mt-2 py-1 px-2 outline-none w-full ${inputClassName}`}
        {...props}
      />
      {error && <p className="text-xs font-bold text-secondary">{error}</p>}
    </div>
  );
};

export default IInput;
