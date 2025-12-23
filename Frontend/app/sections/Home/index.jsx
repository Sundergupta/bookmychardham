"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Plane,
    Shield,
    Clock,
    Award,
    Phone,
    Mountain,
    Heart,
    Sparkles,
} from "lucide-react";
import "../../styles/home.css";

/* ✅ SEO (Next.js replacement for Helmet) */
export const metadata = {
    title:
        "Book My Charter - Premium Helicopter Booking Services in Delhi | Chardham Yatra | Kedarnath Helicopter",
    description:
        "Book My Charter offers premium helicopter booking services in Delhi. Specializing in Chardham Yatra, Kedarnath helicopter services, wedding helicopter charter, flower dropping, and corporate charter flights. Call +91 9667370747",
    keywords:
        "helicopter booking, helicopter charter Delhi, Chardham yatra helicopter, Kedarnath helicopter booking, wedding helicopter services, flower dropping helicopter, helicopter rental Delhi",
};

export default function HomePage() {
    const services = [
        {
            icon: Mountain,
            title: "Chardham & Kedarnath Tours",
            description:
                "Experience divine journeys with our premium helicopter services.",
            link: "/chardham-kedarnath",
        },
        {
            icon: Heart,
            title: "Wedding Services",
            description:
                "Make your special day unforgettable with helicopter services.",
            link: "/wedding-services",
        },
        {
            icon: Sparkles,
            title: "Flower Dropping",
            description:
                "Aerial flower dropping ceremonies for special occasions.",
            link: "/flower-dropping",
        },
        {
            icon: Plane,
            title: "Charter Services",
            description:
                "Corporate charters and custom helicopter flight solutions.",
            link: "/charter-services",
        },
    ];

    const features = [
        {
            icon: Shield,
            title: "Safety First",
            description: "Certified pilots and well-maintained helicopters",
        },
        {
            icon: Clock,
            title: "24/7 Availability",
            description: "Round-the-clock helicopter charter services",
        },
        {
            icon: Award,
            title: "Experienced Team",
            description: "Years of aviation industry expertise",
        },
    ];

    return (
        <>
            {/* HERO */}
            <section className="hero">
                <div className="hero-overlay" />

                <div className="hero-container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>
                            <span>Premium Helicopter</span>
                            <br />
                            Charter Services
                        </h1>

                        <p>
                            Experience luxury air travel with India’s trusted helicopter
                            charter service.
                        </p>

                        <div className="hero-buttons">
                            <Link href="/booking" className="btn primary">
                                Book Your Flight
                            </Link>

                            <a href="tel:+919667370747" className="btn outline">
                                <Phone size={18} />
                                Call Now
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1684482609354-e0becc66f95e"
                            alt="Luxury Helicopter"
                        />
                    </motion.div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="services">
                <h2>Our Premium Services</h2>

                <div className="services-grid">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={i}
                                className="service-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <Icon size={36} />
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <Link href={service.link}>Explore</Link>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* FEATURES */}
            <section className="features">
                {features.map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                        <div key={i} className="feature-item">
                            <Icon size={28} />
                            <div>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    );
                })}
            </section>
        </>
    );
}
