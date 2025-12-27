"use client";

import Link from "next/link";
import "../../styles/about.css";

export const metadata = {
    title: "Booking | Book My Charter",
    description: "Book My Charter - secure your helicopter charter booking.",
};

export default function Booking() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>
                    <span>Book</span> Your Flight
                </h1>
                <p>
                    To book a helicopter charter, please call +91 9667370747 or fill in the form below. Our team will get back to you shortly.
                </p>

                <div style={{ marginTop: 24 }}>
                    {/* Simple placeholder; integrate a form or booking widget as needed */}
                    <Link href="/contact" className="btn primary">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
