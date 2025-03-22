"use client";

import { FaBarsStaggered } from "react-icons/fa6";
import { FaServer } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Btn from "@/components/Btn";
import config from "@/config";
import "@/css/navbar.scss";

export default function Navbar() {
  const router = useRouter();
  const path = usePathname();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const noNavPaths = ["auth", "logout", "game"];
  const showNav = !noNavPaths.some((navPath) => path.includes(navPath));
  const toggleNavbar = () => setIsNavOpen(!isNavOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector(".navbar-menu");
      if (navbar && !navbar.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    showNav && (
      <nav>
        <div className="navbar">
          <div className="navbar-start">
            <Btn
              onClick={toggleNavbar}
              title="Open Navigation"
              tabIndex={isNavOpen ? -1 : 0}


            >
              <FaBarsStaggered className="icon scale-[0.925]" />
            </Btn>
            <div
              className={`navbar-menu ${isNavOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
              <ul>
                <li>
                  <Link href="/profile" className="nav-link" tabIndex={isNavOpen ? 0 : -1}>
                    <div>
                      <FaUserAlt className="icon" />
                    </div>
                    <div>
                      <span>Profile </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/add" className="nav-link" tabIndex={isNavOpen ? 0 : -1}>
                    <div>
                      <FaCirclePlus className="icon" />
                    </div>
                    <div>
                      <span>Add Server</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/servers" className="nav-link" tabIndex={isNavOpen ? 0 : -1}>
                    <div>
                      <FaServer className="icon" />
                    </div>
                    <div>
                      <span>Servers</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="nav-link" tabIndex={isNavOpen ? 0 : -1}>
                    <div>
                      <FaEnvelope className="icon" />
                    </div>
                    <div>
                      <span>Contact</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link href="/" className="logo" tabIndex={0}>{config.name}</Link>
          </div>
          <div className="navbar-end">
            <Btn
              onClick={() => router.push("/profile")}
              title="Profile"
              className="rounded-full"


            >
              <FaUserAlt className="icon scale-[0.8]" />
            </Btn>
          </div>
        </div >
      </nav >
    )
  );
}
