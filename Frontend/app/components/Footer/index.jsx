import Link from "next/link";
import {
    Plane,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";
import "../../styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-grid">

                    {/* BRAND */}
                    <div className="footer-brand">
                        <div className="brand-header">
                            <div className="brand-icon">
                                <Plane />
                            </div>
                            <h3>
                                Book My <span>Charter</span>
                            </h3>
                        </div>

                        <p>
                            Your trusted partner for premium helicopter charter services in
                            India. Experience luxury travel with safety and comfort.
                        </p>

                        <div className="social-icons">
                            <a href="#"><Facebook /></a>
                            <a href="#"><Twitter /></a>
                            <a href="#"><Instagram /></a>
                            <a href="#"><Linkedin /></a>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <Link href="/">Home</Link>
                        <Link href="/chardham-kedarnath">Chardham & Kedarnath Tours</Link>
                        <Link href="/wedding-services">Wedding Services</Link>
                        <Link href="/flower-dropping">Flower Dropping</Link>
                        <Link href="/charter-services">Charter Services</Link>
                    </div>

                    {/* SERVICES */}
                    <div className="footer-links">
                        <h4>Our Services</h4>
                        <span>Helicopter Booking Delhi</span>
                        <span>Chardham Yatra by Helicopter</span>
                        <span>Kedarnath Helicopter Services</span>
                        <span>Wedding Helicopter Charter</span>
                        <span>Corporate Charter Flights</span>
                        <span>Aerial Photography</span>
                    </div>

                    {/* CONTACT */}
                    <div className="footer-contact">
                        <h4>Contact Us</h4>

                        <div className="contact-item">
                            <MapPin />
                            <span>
                                C705 Dwarka Sec 7<br />
                                Delhi 110077, India
                            </span>
                        </div>

                        <div className="contact-item">
                            <Phone />
                            <a href="tel:+919667370747">+91 9667370747</a>
                        </div>

                        <div className="contact-item">
                            <Mail />
                            <a href="mailto:info@bookmycharter.com">
                                info@bookmycharter.com
                            </a>
                        </div>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="footer-bottom">
                    <p>© 2025 Book My Charter. All rights reserved.</p>
                    <div className="footer-policy">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
