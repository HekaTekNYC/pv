import { useState, useEffect } from "react";
import "./dropdown.css";

export default function Dropdown({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleDropdown = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <li className={`nav-bar__dropdown ${isOpen ? "open" : ""}`}>
      <a
        href={item.href}
        className="nav-bar__link nav-bar__dropdown-toggle"
        onClick={toggleDropdown}
      >
        {item.text}
        <img
          src="/icons/caret-lt-down.svg"
          alt=""
          className="nav-bar__caret"
          width="20"
          height="20"
        />
      </a>
      <ul className="nav-bar__dropdown-menu">
        {item.subLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </li>
  );
}
