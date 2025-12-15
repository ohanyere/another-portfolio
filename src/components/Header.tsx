import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isCaseStudy = location.pathname === "/case-study/";

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-4 sm:px-10 py-3">
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
          <Link to={"/"}>Francis</Link>
        </h2>
      </div>

      {!isCaseStudy ? (
        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
          <nav className="flex items-center gap-9 text-black">
            <a className="text-sm font-medium hover:text-gray-500" href="#projects">
              Projects
            </a>
            <a className="text-sm font-medium hover:text-gray-500" href="#about">
              About
            </a>
            <a className="text-sm font-medium hover:text-gray-500" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      ) : (
        <div className="hidden sm:flex flex-1 justify-end gap-4 sm:gap-8">
          <div className="flex items-center gap-6 sm:gap-9 text-black">
            <Link className="text-sm font-medium hover:text-gray-500" to="/">
              Work
            </Link>
            <a className="text-sm font-medium hover:text-gray-500" href="/#about">
              About
            </a>
            <a className="text-sm font-medium hover:text-gray-500" href="/#contact">
              Contact
            </a>
          </div>
          <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:opacity-90">
            Get In Touch
          </button>
        </div>
      )}
    </header>
  );
}
