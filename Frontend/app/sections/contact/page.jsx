"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    MessageSquare,
} from "lucide-react";
import "../../styles/contact.css";

/* ✅ SEO (SSR) */
export const metadata = {
    title:
        "Contact Book My Charter | Helicopter Booking Delhi | +91 9667370747",
    description:
        "Contact Book My Charter for helicopter booking and charter services in Delhi. Call +91 9667370747 or email info@bookmycharter.com.",
    keywords:
        "contact Book My Charter, helicopter booking Delhi, helicopter charter contact, Dwarka helicopter services",
};

export default function Contact() {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Office Address",
            content: ["C705 Dwarka Sec 7", "Delhi 110077", "India"],
            link: "https://maps.google.com/?q=C705+Dwarka+Sec+7+Delhi+110077",
        },
        {
            icon: Phone,
            title: "Phone Number",
            content: ["+91 9667370747"],
            link: "tel:+919667370747",
        },
        {
            icon: Mail,
            title: "Email Address",
            content: ["info@bookmycharter.com"],
            link: "mailto:info@bookmycharter.com",
        },
        {
            icon: Clock,
            title: "Working Hours",
            content: ["24/7 Emergency Services", "Office: 9 AM - 6 PM (Mon-Sat)"],
            link: null,
        },
    ];

    return (
        <>
            {/* HERO */}
            <section className="hero">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <h1>
                        <span>Contact</span> Us
                    </h1>
                    <p>
                        Get in touch with us for helicopter booking inquiries, quotes, or
                        service details.
                    </p>
                </motion.div>
            </section>

            {/* CONTACT INFO */}
            <section className="contact-info">
                <div className="info-grid">
                    {contactInfo.map((info, index) => {
                        const Icon = info.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="info-card"
                            >
                                <div className="icon-box">
                                    <Icon />
                                </div>
                                <h3>{info.title}</h3>

                                {info.link ? (
                                    <a
                                        href={info.link}
                                        target={
                                            info.link.startsWith("http") ? "_blank" : undefined
                                        }
                                        rel="noopener noreferrer"
                                    >
                                        {info.content.map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </a>
                                ) : (
                                    info.content.map((line, i) => <p key={i}>{line}</p>)
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* MAP & QUICK CONTACT */}
                <div className="contact-grid">
                    {/* MAP */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="map-box"
                    >
                        <h2>
                            <MapPin /> Find Us on Map
                        </h2>
                        <div className="map">
                            <iframe
                                src="https://www.openstreetmap.org/export/embed.html?bbox=77.0200%2C28.5800%2C77.0300%2C28.5900&layer=mapnik&marker=28.5850%2C77.0250"
                                loading="lazy"
                                title="Book My Charter Location"
                            ></iframe>
                        </div>
                        <p>C705 Dwarka Sec 7, Delhi 110077, India</p>
                    </motion.div>

                    {/* QUICK CONTACT */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="quick-contact"
                    >
                        <h2>
                            <MessageSquare /> Quick Contact
                        </h2>

                        <div className="block">
                            <h3>Bookings & Inquiries</h3>
                            <a href="tel:+919667370747" className="phone">
                                +91 9667370747
                            </a>
                        </div>

                        <div className="block">
                            <h3>Email</h3>
                            <a href="mailto:info@bookmycharter.com">
                                info@bookmycharter.com
                            </a>
                        </div>

                        <div className="block">
                            <h3>Emergency Services</h3>
                            <p>Available 24/7 for urgent medical evacuations</p>
                            <a href="tel:+919667370747" className="emergency-btn">
                                Emergency Hotline
                            </a>
                        </div>

                        <div className="block">
                            <h3>Business Hours</h3>
                            <ul>
                                <li>Mon - Sat: 9:00 AM - 6:00 PM</li>
                                <li>Sunday: By Appointment</li>
                                <li className="green">Emergency Services: 24/7</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="cta-box"
                >
                    <h2>Ready to Book Your Flight?</h2>
                    <p>
                        Contact us today or send an email to request a helicopter charter
                        quote.
                    </p>

                    <div className="cta-buttons">
                        <a href="tel:+919667370747" className="btn white">
                            <Phone /> Call Now
                        </a>
                        <a href="mailto:info@bookmycharter.com" className="btn outline">
                            <Mail /> Send Email
                        </a>
                    </div>
                </motion.div>
            </section>
        </>
    );
}
