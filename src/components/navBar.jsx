import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import MobileMenu from "./mobileMenu";

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function toggleDropdown() {
    setShowDropdown((prevState) => !prevState);
  }

  function toggleMenu() {
    setShowMobileMenu((prevState) => !prevState);
  }

  return (
    <nav className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-white md:text-xl font-light">
              African Lakes
            </a>
          </div>
          <div
            className="hidden md:block flex items-center space-x-4 relative"
            ref={dropdownRef}
          >
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-gray-400 px-4 py-2 uppercase font-extralight"
            >
              Explore
            </button>
            {showDropdown && (
              <div className="absolute mt-3 w-56 origin-top-right rounded-b-md shadow-lg bg-black bg-opacity-80">
                <div
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    href="/lakes/victoria"
                    className="block px-4 py-2 text-sm uppercase text-white font-extralight border-l-2 border-[#ffcc00] transition-transform transform hover:translate-x-2"
                    role="menuitem"
                    onClick={() => setShowDropdown(false)}
                  >
                    Lake Victoria
                  </Link>

                  <Link
                    href="/lakes/tanganyika"
                    className="block px-4 py-2 text-sm uppercase text-white font-extralight border-l-2 border-[#ffcc00] transition-transform transform hover:translate-x-2"
                    role="menuitem"
                    onClick={() => setShowDropdown(false)}
                  >
                    Lake Tanganyika
                  </Link>
                  <Link
                    href="/lakes/albert"
                    className="block px-4 py-2 text-sm uppercase text-white font-extralight border-l-2 border-[#ffcc00] transition-transform transform hover:translate-x-2"
                    role="menuitem"
                    onClick={() => setShowDropdown(false)}
                  >
                    Lake Albert
                  </Link>
                  <Link
                    href="/lakes/kivu"
                    className="block px-4 py-2 text-sm uppercase text-white font-extralight border-l-2 border-[#ffcc00] transition-transform transform hover:translate-x-2"
                    role="menuitem"
                    onClick={() => setShowDropdown(false)}
                  >
                    Lake Kivu
                  </Link>
                  <Link
                    href="/lakes/malawi"
                    className="block px-4 py-2 text-sm uppercase text-white font-extralight border-l-2 border-[#ffcc00] transition-transform transform hover:translate-x-2"
                    role="menuitem"
                    onClick={() => setShowDropdown(false)}
                  >
                    Lake Malawi
                  </Link>
                  <Link
                    href="/lakes/turkana"
                    className="block px-4 py-2 text-sm uppercase text-white font-extralight border-l-2 border-[#ffcc00] transition-transform transform hover:translate-x-2"
                    role="menuitem"
                    onClick={() => setShowDropdown(false)}
                  >
                    Lake Turkana
                  </Link>
                  <Link
                    href="/lakes/edward"
                    className="block px-4 py-2 text-sm uppercase text-white font-extralight border-l-2 border-[#ffcc00] transition-transform transform hover:translate-x-2"
                    role="menuitem"
                    onClick={() => setShowDropdown(false)}
                  >
                    Lake Edward
                  </Link>
                </div>
              </div>
            )}
            <Link
              href="/news"
              className="text-white hover:text-gray-400 px-3 py-2 uppercase font-extralight"
            >
              News and Events
            </Link>
            <Link
              href="/resources"
              className="text-white hover:text-gray-400 px-3 py-2 uppercase font-extralight"
            >
              Resources
            </Link>
            <Link
              href="/partnerships"
              className="text-white hover:text-gray-400 px-3 py-2 uppercase font-extralight"
            >
              Partnerships
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-400 px-3 py-2 uppercase font-extralight"
            >
              Contact us
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-400 px-3 py-2 focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {showMobileMenu ? (
        <div className=" bg-white h-[100vh] z-[10000000000]">
          <MobileMenu
            toggleDropdown={toggleDropdown}
            setShowDropdown={setShowDropdown}
            dropdownRef={dropdownRef}
            showDropdown={showDropdown}
            toggleMenu={toggleMenu}
          />
        </div>
      ) : null}
    </nav>
  );
}
