"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    Shield,
    Award,
    Users,
    Target,
    Heart,
    TrendingUp,
} from "lucide-react";
import "../../styles/about.css";

/* ✅ SEO (SSR) */
export const metadata = {
    title:
        "About Book My Charter | Professional Helicopter Charter Services Since 2015",
    description:
        "Book My Charter is a leading helicopter charter service provider in India with over 10 years of experience offering safe, reliable, and professional helicopter services.",
    keywords:
        "about Book My Charter, helicopter charter company Delhi, professional helicopter services, helicopter service provider India",
};

export default function About() {
    const values = [
        {
            icon: Shield,
            title: "Safety First",
            description:
                "Uncompromising commitment to safety standards and regular maintenance",
        },
        {
            icon: Award,
            title: "Excellence",
            description:
                "Delivering exceptional service quality in every flight we operate",
        },
        {
            icon: Heart,
            title: "Customer Care",
            description:
                "Personalized attention and support for every client",
        },
        {
            icon: TrendingUp,
            title: "Innovation",
            description:
                "Adopting latest technology and best practices in aviation",
        },
    ];

    const stats = [
        { number: "10+", label: "Years Experience" },
        { number: "5000+", label: "Successful Flights" },
        { number: "100%", label: "Safety Record" },
        { number: "24/7", label: "Customer Support" },
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
                        <span>About</span> Book My Charter
                    </h1>
                    <p>
                        India’s trusted partner for premium helicopter charter services,
                        delivering excellence in aviation since 2015.
                    </p>
                </motion.div>
            </section>

            {/* STATS */}
            <section className="stats">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="stat-card"
                        >
                            <h2>{stat.number}</h2>
                            <p>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* STORY */}
            <section className="story">
                <div className="story-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>
                            Our <span>Story</span>
                        </h2>
                        <p>
                            Book My Charter was founded with a vision to make premium helicopter
                            services accessible and reliable across India.
                        </p>
                        <p>
                            Over the years, we have served pilgrimages, weddings, corporate
                            travel, and emergency medical evacuations while maintaining the
                            highest safety standards.
                        </p>
                        <p>
                            Today, we operate a modern fleet piloted by certified professionals,
                            ensuring every journey is safe and memorable.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1576948238627-b4bf82824ea6"
                            alt="Book My Charter team and fleet"
                            width={600}
                            height={400}
                            className="image"
                        />
                    </motion.div>
                </div>
            </section>

            {/* VALUES */}
            <section className="values">
                <h2>
                    Our <span>Core Values</span>
                </h2>

                <div className="value-grid">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="value-card"
                            >
                                <div className="icon-box">
                                    <Icon />
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* MISSION */}
            <section className="mission">
                <div className="mission-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1703902641446-130c6b6b1d42"
                            alt="Helicopter operations"
                            width={600}
                            height={400}
                            className="image"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>
                            <Target /> Our <span>Mission</span>
                        </h2>
                        <p>
                            To provide safe, reliable, and exceptional helicopter charter
                            services that exceed customer expectations.
                        </p>

                        <div className="vision-box">
                            <Users />
                            <div>
                                <h3>Our Vision</h3>
                                <p>
                                    To be India’s most trusted helicopter charter service provider,
                                    known for safety and operational excellence.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
