import React from "react";
import "./Logo.css";

const Logo: React.FC = () => {
  return (
    <div className="d-flex logo align-items-baseline">
      <p className="text-alter-color fw-bold fs-3">TUS</p>
      <p className="text-custom-color fw-bold fs-3">RAMOS</p>
      <p className="fs-4">.cl</p>
    </div>
  );
};

export default Logo;
