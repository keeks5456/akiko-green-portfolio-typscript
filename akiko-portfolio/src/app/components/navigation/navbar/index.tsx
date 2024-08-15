import React from "react";
import Link from "next/link";
// import Logo from "./Logo";
// import Button from "./Button";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="sticky top-0 z-10 w-full h-20 nav-banner">
        <div className="container h-full px-2 mx-auto">
          <div className="flex items-center justify-end h-full">
            {/* <Logo /> */}
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            {/* logo ends */}

            <ul className="hidden md:flex gap-x-5 text-[white] text-3xl z-50 absolute">
              <li>
                {/* put in a hover later */}
                <p className="space-x-2">Akiko</p>
              </li>
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              {/* create a blog component */}
              <li>
                <Link href="/blogs">
                  <p>Blogs</p>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <p>Projects</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            {/* <div className="hidden md:block">
              <Button />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
