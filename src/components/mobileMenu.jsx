import { motion } from "framer-motion";
import Link from "next/link";

export default function MobileMenu({
  toggleDropdown,
  toggleMenu,
  setShowDropdown,
  dropdownRef,
  showDropdown,
}) {
  function closeMenu() {
    if (showDropdown) {
      setShowDropdown(false);
    }
    toggleMenu();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col "
      ref={dropdownRef}
    >
      <p
        onClick={toggleDropdown}
        className=" hover:text-gray-400 px-3 py-2 uppercase font-extralight cursor-pointer border-l-2 border-[#ffcc00]"
      >
        Explore
      </p>
      {showDropdown && (
        <div className="w-56  bg-white ">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="/lakes/victoria"
              className="block px-4 py-2 text-sm uppercase  font-extralight border-l-2 border-[#ffcc00] transition-transform transform hover:translate-x-2"
              role="menuitem"
              onClick={closeMenu}
            >
              Lake Victoria
            </Link>

            <Link
              href="/lakes/tanganyika"
              className="block px-4 py-2 text-sm uppercase  font-extralight border-l-2 border-[#ffcc00] transition-transform transform hover:translate-x-2"
              role="menuitem"
              onClick={closeMenu}
            >
              Lake Tanganyika
            </Link>
            <Link
              href="/lakes/albert"
              className="block px-4 py-2 text-sm uppercase  font-extralight border-l-2 border-[#ffcc00] transition-transform transform hover:translate-x-2"
              role="menuitem"
              onClick={closeMenu}
            >
              Lake Albert
            </Link>
            <Link
              href="/lakes/kivu"
              className="block px-4 py-2 text-sm uppercase  font-extralight border-l-2 border-[#ffcc00] transition-transform transform hover:translate-x-2"
              role="menuitem"
              onClick={closeMenu}
            >
              Lake Kivu
            </Link>
            <Link
              href="/lakes/malawi"
              className="block px-4 py-2 text-sm uppercase  font-extralight border-l-2 border-[#ffcc00] transition-transform transform hover:translate-x-2"
              role="menuitem"
              onClick={closeMenu}
            >
              Lake Malawi
            </Link>
            <Link
              href="/lakes/turkana"
              className="block px-4 py-2 text-sm uppercase  font-extralight border-l-2 border-[#ffcc00] transition-transform transform hover:translate-x-2"
              role="menuitem"
              onClick={closeMenu}
            >
              Lake Turkana
            </Link>
            <Link
              href="/lakes/edward"
              className="block px-4 py-2 text-sm uppercase  font-extralight border-l-2 border-[#ffcc00] transition-transform transform hover:translate-x-2"
              role="menuitem"
              onClick={closeMenu}
            >
              Lake Edward
            </Link>
          </div>
        </div>
      )}
      <Link
        href="/news"
        onClick={closeMenu}
        className=" hover:text-gray-400 px-3 py-2 uppercase font-extralight border-l-2 border-[#ffcc00]"
      >
        News and Events
      </Link>
      <Link
        href="/resources"
        onClick={closeMenu}
        className=" hover:text-gray-400 px-3 py-2 uppercase font-extralight border-l-2 border-[#ffcc00]"
      >
        Resources
      </Link>
      <Link
        href="/partnerships"
        onClick={closeMenu}
        className=" hover:text-gray-400 px-3 py-2 uppercase font-extralight border-l-2 border-[#ffcc00]"
      >
        Partnerships
      </Link>
      <Link
        href="/contact"
        onClick={closeMenu}
        className=" hover:text-gray-400 px-3 py-2 uppercase font-extralight border-l-2 border-[#ffcc00]"
      >
        Contact us
      </Link>
    </motion.div>
  );
}
