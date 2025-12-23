import Link from "next/link";
import "../../styles/navbar.css";

export default function Navbar() {
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
                    <Link href="/" className="nav-item active">Home</Link>
                    <Link href="/chardham-kedarnath" className="nav-item">
                        Chardham & Kedarnath
                    </Link>
                    <Link href="/wedding-services" className="nav-item">
                        Wedding Services
                    </Link>
                    <Link href="/flower-dropping" className="nav-item">
                        Flower Dropping
                    </Link>
                    <Link href="/charter-services" className="nav-item">
                        Charter Services
                    </Link>
                    <Link href="/about-us" className="nav-item">About Us</Link>
                    <Link href="/contact" className="nav-item">Contact</Link>
                </nav>

                {/* CTA */}
                <Link href="/book-now" className="book-btn">
                    Book Now
                </Link>

            </div>
        </header>
    );
}
