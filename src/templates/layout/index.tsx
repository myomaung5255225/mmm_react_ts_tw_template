import React from "react";
import { Header } from "../";
interface layoutProps {
  className?: string;
}
export const Layout: React.FC<layoutProps> = ({ children, className }) => {
  return (
    <div className={`${className} font-primary m-0 p-0`}>
      <Header color="primary" />
      <div className="min-h-screen">{children}</div>
    </div>
  );
};
