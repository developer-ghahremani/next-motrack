import React, { ButtonHTMLAttributes } from "react";

import ILoading from "components/ILoading";

interface Props extends ButtonHTMLAttributes<{}> {
  loading?: boolean;
}

const IButton = ({ children, className, loading, ...props }: Props) => {
  return (
    <button
      className={`h-min w-min text-white bg-green-600 ${className}`}
      {...props}>
      {loading ? <ILoading size={6} /> : children}
    </button>
  );
};

export default IButton;
