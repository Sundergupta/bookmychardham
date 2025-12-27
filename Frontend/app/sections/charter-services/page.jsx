"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Briefcase,
    Building2,
    Camera,
    Headphones,
    Check,
    Phone,
} from "lucide-react";
import "../../styles/charter-services.css";

/* ✅ SEO (SSR) */
export const metadata = {
    title:
        "Helicopter Charter Services Delhi | Corporate & VIP Helicopter Rental | Book My Charter",
    description:
        "Premium helicopter charter services in Delhi for corporate travel, VIP transport, aerial photography, and emergency medical services.",
    keywords:
        "helicopter charter Delhi, corporate helicopter rental, VIP helicopter services, emergency helicopter services",
};

export default function CharterServices() {
    const services = [
        {
            icon: Briefcase,
            title: "Corporate Charter",
            description:
                "Executive transport for business meetings, conferences, and site visits",
        },
        {
            icon: Building2,
            title: "VIP Transport",
            description:
                "Premium helicopter services for dignitaries and VIP guests",
        },
        {
            icon: Camera,
            title: "Aerial Photography",
            description:
                "Professional aerial filming for movies, advertisements, and events",
        },
        {
            icon: Headphones,
            title: "Emergency Services",
            description:
                "Medical evacuation and emergency response helicopter services",
        },
    ];

    const features = [
        "Flexible scheduling and routing",
        "Modern, well-maintained fleet",
        "Experienced and certified pilots",
        "Premium in-flight amenities",
        "Competitive pricing packages",
        "24/7 customer support",
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
                        <span>Professional Charter</span>
                        <br />
                        Services
                    </h1>
                    <p>
                        Comprehensive helicopter charter solutions for business, emergencies,
                        and specialized requirements across India.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-image"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1558597576-f1a962543f35"
                        alt="Corporate helicopter charter"
                        width={1200}
                        height={500}
                    />
                </motion.div>
            </section>

            {/* SERVICES */}
            <section className="services">
                <h2>Our Charter Services</h2>

                <div className="service-grid">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="service-card"
                            >
                                <div className="icon-box">
                                    <Icon />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* CORPORATE */}
            <section className="corporate">
                <div className="corporate-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>
                            Corporate Helicopter <span>Charter Solutions</span>
                        </h2>
                        <p>
                            Save valuable time and enhance productivity with executive
                            helicopter charter services.
                        </p>

                        <ul>
                            {features.map((item, index) => (
                                <li key={index}>
                                    <Check /> {item}
                                </li>
                            ))}
                        </ul>

                        <Link href="/booking" className="btn">
                            Request Corporate Quote
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="corporate-images"
                    >
                        <Image
                            src="https://images.unsplash.com/flagged/photo-1568098528295-ba158ae650d2"
                            alt="Corporate helicopter flight"
                            width={600}
                            height={300}
                        />
                        <Image
                            src="https://images.unsplash.com/photo-1599576221728-472ce35c895f"
                            alt="Aerial photography helicopter"
                            width={600}
                            height={300}
                        />
                    </motion.div>
                </div>
            </section>

            {/* EMERGENCY */}
            <section className="emergency">
                <div className="emergency-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1692967489040-07cdf6a859b9"
                            alt="Emergency medical helicopter"
                            width={600}
                            height={500}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>
                            Emergency Medical <span>Evacuation</span>
                        </h2>
                        <p>
                            Rapid medical evacuation services with trained paramedics and
                            advanced medical equipment onboard.
                        </p>

                        <ul>
                            <li>
                                <Check /> Immediate dispatch & response
                            </li>
                            <li>
                                <Check /> Advanced medical equipment
                            </li>
                            <li>
                                <Check /> Trained medical staff
                            </li>
                            <li>
                                <Check /> Direct hospital coordination
                            </li>
                        </ul>

                        <a href="tel:+919667370747" className="btn emergency-btn">
                            <Phone /> Emergency Hotline
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <h2>Get Your Custom Charter Quote</h2>
                <p>Contact us to discuss your helicopter charter requirements</p>

                <div className="cta-buttons">
                    <Link href="/booking" className="btn white">
                        Request a Quote
                    </Link>

                    <a href="tel:+919667370747" className="btn outline">
                        <Phone /> Call Now
                    </a>
                </div>
            </section>
        </>
    );
}
