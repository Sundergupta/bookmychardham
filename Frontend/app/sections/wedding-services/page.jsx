"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Heart,
    Camera,
    Music,
    Sparkles,
    Check,
    Phone,
} from "lucide-react";
import "../../styles/wedding-services.css";


export default function WeddingServices() {
    const services = [
        {
            icon: Heart,
            title: "Grand Entrance",
            description:
                "Make a spectacular entrance at your wedding venue with our luxury helicopters",
        },
        {
            icon: Camera,
            title: "Aerial Photography",
            description:
                "Capture stunning aerial shots of your special day from unique perspectives",
        },
        {
            icon: Music,
            title: "Pre-Wedding Shoots",
            description:
                "Elevate your pre-wedding photography with helicopter backdrop shoots",
        },
        {
            icon: Sparkles,
            title: "Couple Transport",
            description:
                "Private helicopter transfers for bride, groom, and VIP guests",
        },
    ];

    const packages = [
        {
            name: "Basic Wedding Package",
            price: "Starting from ₹2,50,000",
            features: [
                "Helicopter arrival or departure",
                "30 minutes flight time",
                "Red carpet landing arrangement",
                "Professional photography coordination",
                "Decorated helicopter interior",
            ],
        },
        {
            name: "Premium Wedding Package",
            price: "Starting from ₹4,50,000",
            features: [
                "Round trip helicopter service",
                "Multiple location transfers",
                "Aerial photography session",
                "Flower petal dropping ceremony",
                "Luxury interior decoration",
                "Champagne service onboard",
            ],
        },
        {
            name: "Luxury Wedding Package",
            price: "Custom Pricing",
            features: [
                "Full-day helicopter availability",
                "Multiple helicopters for guests",
                "Professional videography crew",
                "Customized flight routes",
                "Premium decoration and setup",
                "Dedicated event coordinator",
            ],
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
                        <span>Wedding Helicopter</span>
                        <br />
                        Services
                    </h1>
                    <p>
                        Make your special day unforgettable with luxury wedding helicopter
                        services.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-image"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1632990603137-06a1085e6c8e"
                        alt="Wedding helicopter"
                        width={1200}
                        height={500}
                    />
                </motion.div>
            </section>

            {/* SERVICES */}
            <section className="services">
                <h2>Our Wedding Services</h2>

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

            {/* PACKAGES */}
            <section className="packages">
                <h2>Wedding Packages</h2>

                <div className="package-grid">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="package-card"
                        >
                            <h3>{pkg.name}</h3>
                            <p className="price">{pkg.price}</p>

                            <ul>
                                {pkg.features.map((feature, i) => (
                                    <li key={i}>
                                        <Check /> {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/booking" className="btn">
                                Book This Package
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <h2>Make Your Wedding Extraordinary</h2>
                <p>Contact us to plan your dream wedding helicopter service</p>

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
