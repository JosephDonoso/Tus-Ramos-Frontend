import React from "react";
import "./Navbar.css";

import Logo from "./Logo";

interface OptionProps {
  name: string;
  type: string;
  state?: string;
  moreOptions?: OptionProps[];
  href: string;
}

interface NavbarProps {
  options: OptionProps[];
}

const Navbar: React.FC<NavbarProps> = ({ options }) => {
  const renderItem = (name: string, href: string, state?: string) => {
    return (
      <li className="nav-item">
        {state === "active" ? (
          <a className={"nav-link active"} aria-current="page" href={href}>
            {name}
          </a>
        ) : (
          <a className={"nav-link"} href={href}>
            {name}
          </a>
        )}
      </li>
    );
  };

  const renderDropdown = (name: string, moreOptions: OptionProps[]) => {
    return (
      <li className="nav-item dropdown" data-bs-theme="light">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {name}
        </a>
        <ul className="dropdown-menu bg-custom-color">
          {moreOptions.map((option) => (
            <li>
              <a className="dropdown-item" href={option.href}>
                {option.name}
              </a>
            </li>
          ))}
        </ul>
      </li>
    );
  };

  const listOptions = options.map((option) => {
    if (option.type === "item") {
      return renderItem(option.name, option.href, option.state);
    } else if (option.type === "dropdown") {
      return renderDropdown(option.name, option.moreOptions ?? []);
    } else {
      return <></>;
    }
  });

  return (
    <div className="header">
      <nav
        className="navbar navbar-expand-lg bg-main-color"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Logo />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">{listOptions}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
