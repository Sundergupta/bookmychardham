"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Sparkles,
    Heart,
    Cloud,
    Calendar,
    Check,
    Phone,
} from "lucide-react";
import "../../styles/flower-dropping.css";


export default function FlowerDropping() {
    const occasions = [
        {
            icon: Heart,
            title: "Memorial Services",
            description:
                "Respectful aerial flower tributes for memorial ceremonies",
        },
        {
            icon: Calendar,
            title: "Special Events",
            description:
                "Grand openings, festivals, and celebration ceremonies",
        },
        {
            icon: Sparkles,
            title: "Religious Ceremonies",
            description:
                "Devotional flower offerings from the sky",
        },
        {
            icon: Cloud,
            title: "Custom Requests",
            description:
                "Personalized flower dropping for any special occasion",
        },
    ];

    const packages = [
        {
            name: "Basic Package",
            price: "Starting from ₹75,000",
            features: [
                "Single helicopter service",
                "Up to 50kg fresh flowers",
                "15 minutes flight duration",
                "Standard flower varieties",
                "Basic photography coordination",
            ],
        },
        {
            name: "Premium Package",
            price: "Starting from ₹1,50,000",
            features: [
                "Single helicopter service",
                "Up to 150kg premium flowers",
                "30 minutes flight duration",
                "Choice of exotic flowers",
                "Professional videography",
                "Custom flight patterns",
            ],
        },
        {
            name: "Grand Package",
            price: "Custom Pricing",
            features: [
                "Multiple helicopters",
                "Unlimited fresh flowers",
                "Extended flight time",
                "Designer flower arrangements",
                "Full media coverage",
                "Synchronized dropping ceremony",
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
                        <span>Aerial Flower Dropping</span>
                        <br />
                        Services
                    </h1>
                    <p>
                        Create breathtaking moments with professional aerial flower dropping
                        services for memorials and special ceremonies.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-image"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1500777455000-fb215fd0eb62"
                        alt="Helicopter dropping flowers"
                        width={1200}
                        height={500}
                    />
                </motion.div>
            </section>

            {/* OCCASIONS */}
            <section className="occasions">
                <h2>Perfect For Every Occasion</h2>

                <div className="occasion-grid">
                    {occasions.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="occasion-card"
                            >
                                <div className="icon-box">
                                    <Icon />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* FEATURES */}
            <section className="features">
                <div className="features-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>
                            Why Choose Our <span>Flower Dropping Service?</span>
                        </h2>
                        <ul>
                            <li>
                                <Check /> Fresh premium quality flowers
                            </li>
                            <li>
                                <Check /> Precise timing & coordination
                            </li>
                            <li>
                                <Check /> Professional photography & videography
                            </li>
                            <li>
                                <Check /> Custom arrangements & patterns
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1489864341077-e204d82219b8"
                            alt="Flower petals aerial view"
                            width={600}
                            height={400}
                            className="feature-image"
                        />
                    </motion.div>
                </div>
            </section>

            {/* PACKAGES */}
            <section className="packages">
                <h2>Service Packages</h2>

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
                <h2>Create a Memorable Ceremony</h2>
                <p>Contact us to plan your perfect aerial flower ceremony</p>

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
