"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Mountain,
    Clock,
    MapPin,
    Users,
    Check,
    Phone,
} from "lucide-react";
import "../../styles/chardham-kedarnath.css";



export default function ChardhamKedarnathPage() {
    const packages = [
        {
            name: "Kedarnath Helicopter Tour",
            duration: "1 Day",
            route: "Delhi → Kedarnath → Delhi",
            price: "Starting from ₹1,25,000",
            features: [
                "Round trip helicopter service",
                "VIP darshan arrangements",
                "Experienced pilot and crew",
                "All safety equipment included",
                "Flexible timing options",
            ],
        },
        {
            name: "Chardham Yatra Package",
            duration: "3-4 Days",
            route: "Complete Chardham Circuit",
            price: "Starting from ₹3,50,000",
            features: [
                "Visit all four dhams by helicopter",
                "Premium accommodation included",
                "VIP temple access arrangements",
                "Professional tour guide",
                "Meals and refreshments",
            ],
        },
        {
            name: "Badrinath Helicopter Service",
            duration: "1 Day",
            route: "Delhi → Badrinath → Delhi",
            price: "Starting from ₹1,15,000",
            features: [
                "Direct helicopter transfer",
                "Temple visit coordination",
                "Weather monitoring and support",
                "Comfortable seating arrangements",
                "Photo opportunities",
            ],
        },
    ];

    const highlights = [
        {
            icon: Clock,
            title: "Save Time",
            description: "Complete your pilgrimage in days instead of weeks",
        },
        {
            icon: Mountain,
            title: "Scenic Views",
            description: "Breathtaking aerial views of the Himalayas",
        },
        {
            icon: Users,
            title: "Group Bookings",
            description: "Special packages for families and groups",
        },
        {
            icon: MapPin,
            title: "Multiple Routes",
            description: "Flexible itineraries to suit your needs",
        },
    ];

    return (
        <>
            {/* HERO */}
            <section className="ck-hero">
                <div className="ck-hero-overlay" />
                <div className="ck-container">
                    <motion.div
                        className="ck-hero-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>
                            <span>Chardham Yatra &</span>
                            <br />
                            Kedarnath Helicopter Services
                        </h1>
                        <p>
                            Experience divine journeys with comfort and convenience using
                            premium helicopter services.
                        </p>
                    </motion.div>

                    <motion.img
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        src="https://images.unsplash.com/photo-1589907915524-b7375479c569"
                        alt="Kedarnath helicopter yatra"
                        className="ck-hero-img"
                    />
                </div>
            </section>

            {/* HIGHLIGHTS */}
            <section className="ck-highlights">
                <div className="ck-container grid">
                    {highlights.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                className="highlight-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <Icon />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* PACKAGES */}
            <section className="ck-packages">
                <div className="ck-container grid-3">
                    {packages.map((pkg, i) => (
                        <motion.div
                            key={i}
                            className="package-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3>{pkg.name}</h3>

                            <div className="package-meta">
                                <span><Clock /> {pkg.duration}</span>
                                <span><MapPin /> {pkg.route}</span>
                            </div>

                            <p className="price">{pkg.price}</p>

                            <ul>
                                {pkg.features.map((f, idx) => (
                                    <li key={idx}>
                                        <Check /> {f}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/booking" className="btn-primary">
                                Book Now
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="ck-cta">
                <motion.div
                    className="cta-box"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Begin Your Spiritual Journey Today</h2>
                    <p>Contact us for customized packages and group bookings</p>

                    <div className="cta-buttons">
                        <Link href="/booking" className="btn-white">
                            Request a Quote
                        </Link>
                        <a href="tel:+919667370747" className="btn-outline">
                            <Phone /> Call Now
                        </a>
                    </div>
                </motion.div>
            </section>
        </>
    );
}
