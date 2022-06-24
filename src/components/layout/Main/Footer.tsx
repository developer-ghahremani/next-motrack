import React from "react";

const Footer = () => {
  return (
    <div className="py-8 mt-8 bg-gray-dark">
      <div className="main__container flex items-end justify-end">
        <p className="mx-4 text-sm font-bold">Powered By</p>
        <img src="/images/logo.png" className="rounded-3xl w-24 h-24" alt="" />
      </div>
    </div>
  );
};

export default Footer;
