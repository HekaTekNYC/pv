import { useState, useRef, useEffect } from "react";
import "./dropdown.css";

interface Link {
  href: string;
  label: string;
}

interface DropdownProps {
  triggerText: string;
  links: Link[];
  triggerHref?: string;
  triggerClassName?: string;
}

export default function Dropdown({
  triggerText,
  links,
  triggerHref = "#",
  triggerClassName = "",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <li className="nav-bar__dropdown" ref={dropdownRef}>
      {/* Trigger */}
      <a
        href={triggerHref}
        className={`${triggerClassName} nav-bar__dropdown-toggle `}
        onClick={(e) => {
          e.preventDefault();
          toggleDropdown();
        }}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {triggerText}
        <img
          src="/icons/caret-drk-down.svg"
          alt="dropdown menu"
          className="nav-bar__caret"
          width="24"
          height="24"
        />
      </a>

      {/* Menu */}
      <ul
        className={`nav-bar__dropdown-menu ${isOpen ? "nav-bar__dropdown-menu--open" : ""}`}
        role="menu"
      >
        {links.map((link) => (
          <li key={link.href} role="none">
            <a
              href={link.href}
              className="nav-bar__dropdown-link"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
