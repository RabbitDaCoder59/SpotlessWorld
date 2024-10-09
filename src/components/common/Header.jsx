import React, { useEffect, useState } from "react";
import "../../assets/styles/styles.css";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../../data.js";
import Hamburger from "hamburger-react";
import { MdClose } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [links, setLinks] = useState([]);
  const navigate = useNavigate();

  // hamburger function
  const [isOpen, setOpen] = useState(false);

  const handleOpenhamburger = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const links = navLinks.map((link) => {
      if (link.href === window.location.pathname) {
        return { ...link, isActive: !link.isActive };
      } else {
        return { ...link, isActive: false };
      }
    });
    setLinks(links);
  }, [navigate]);

  return (
    <section className="container relative">
      <header className="lg:px-22 px-4 relative">
        <div className="flex items-center justify-between">
          <div className="lg:w-36 w-45  ">
            <img src={logo} alt="Logo" />
          </div>
          <nav className="hidden lg:block">
            <ul className="flex gap-6">
              {links.map((navLink, index) => (
                <li key={index}>
                  <Link
                    className={`${navLink.isActive && "active"}`}
                    to={navLink.href}
                  >
                    {navLink.text}
                  </Link>
                </li>
              ))}
              <div className="navBtn"></div>
            </ul>
          </nav>
          <AiOutlineMenu
            className="text-white text-5xl lg:hidden"
            onClick={handleOpenhamburger}
          />
        </div>
      </header>
      <div className={`w-full h-full lg:hidden ${isOpen ? "" : "hidden"}`}>
        <div className="hamburgerMenu flex flex-col px-5  w-72 h-screen   bg-blue absolute z-50 right-0 top-0">
          <ul className="mt-16">
            {links.map((navLink, index) => (
              <li key={index}>
                <Link
                  className={`${navLink.isActive && "active"}`}
                  to={navLink.href}
                >
                  {navLink.text}
                </Link>
              </li>
            ))}
          </ul>

          <MdClose
            className="text-white text-6xl absolute top-2 right-3 "
            onClick={handleOpenhamburger}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
// onClick={isClose()}
