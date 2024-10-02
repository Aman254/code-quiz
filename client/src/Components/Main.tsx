import React from "react";

interface MainChildrenProps {
  children: React.ReactNode;
  className: string;
}

const Main: React.FC<MainChildrenProps> = ({ children, className }) => {
  return <main className={className}>{children}</main>;
};

export default Main;
