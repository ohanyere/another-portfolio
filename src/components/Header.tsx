import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-4 py-3 sm:px-10">
      <div className="flex items-center gap-4 text-[#0d121b]">
        <div className="size-8">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
          <Link to="/">Francis</Link>
        </h2>
      </div>

      <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
        <nav className="flex items-center gap-9 text-black">
          <a className="text-sm font-medium hover:text-gray-500" href="#capabilities">
            Capabilities
          </a>
          <a className="text-sm font-medium hover:text-gray-500" href="#projects">
            Work
          </a>
          <a className="text-sm font-medium hover:text-gray-500" href="#about">
            About
          </a>
          <a className="text-sm font-medium hover:text-gray-500" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
