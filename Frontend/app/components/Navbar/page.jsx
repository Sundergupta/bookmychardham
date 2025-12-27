"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../styles/navbar.css";

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    return (
        <header className="navbar">
            <div className="nav-container">

                {/* LOGO */}
                <div className="logo">
                    <div className="logo-icon">✈</div>
                    <div className="logo-text">
                        <h2>Book My</h2>
                        <h1>Charter</h1>
                        <p>Premium Helicopter Services</p>
                    </div>
                </div>

                {/* MENU */}
                <nav className="nav-links">
                    <Link
                        href="/"
                        className={`nav-item ${isActive("/") ? "active" : ""}`}
                    >
                        Home
                    </Link>

                    <Link
                        href="/chardham-kedarnath"
                        className={`nav-item ${isActive("/chardham-kedarnath") ? "active" : ""}`}
                    >
                        Chardham & Kedarnath
                    </Link>

                    <Link
                        href="/wedding-services"
                        className={`nav-item ${isActive("/wedding-services") ? "active" : ""}`}
                    >
                        Wedding Services
                    </Link>

                    <Link
                        href="/flower-dropping"
                        className={`nav-item ${isActive("/flower-dropping") ? "active" : ""}`}
                    >
                        Flower Dropping
                    </Link>

                    <Link
                        href="/charter-services"
                        className={`nav-item ${isActive("/charter-services") ? "active" : ""}`}
                    >
                        Charter Services
                    </Link>

                    <Link
                        href="/about"
                        className={`nav-item ${isActive("/about") ? "active" : ""}`}
                    >
                        About Us
                    </Link>

                    <Link
                        href="/contact"
                        className={`nav-item ${isActive("/contact") ? "active" : ""}`}
                    >
                        Contact
                    </Link>
                </nav>

                {/* CTA */}
                <Link
                    href="/booking"
                    className={`book-btn ${isActive("/booking") ? "active" : ""}`}
                >
                    Book Now
                </Link>

            </div>
        </header>
    );
}
