import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div className={`w-full container mx-auto md:px-6 !2xl:px-0 ${
      className ? className :'2xl:max-w-[1536px]'
    }`}>
      {children}
    </div>
  );
};

export default Wrapper;

