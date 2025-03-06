// import React from "react";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo-container">
//         <img src="../assets/logo.png" alt="Logo" className="logo" />
//       </div>
//       <nav>
//         <a href="#home">Home</a>
//         <a href="#product">Product</a>
//         <a href="#feature">Features</a>
//         {/* <a href="#features">Features</a> */}
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="../assets/logo.png" alt="Logo" className="logo" />
      </div>

      {/* Menu Icon (Hamburger) */}
      <button className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Menu */}
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#product" onClick={toggleMenu}>Product</a>
        <a href="#feature" onClick={toggleMenu}>Features</a>
      </nav>
    </header>
  );
};

export default Header;

