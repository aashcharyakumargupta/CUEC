import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BrainCircuit, Globe, Building2, TrendingUp, Lightbulb } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const About = () => {
    return (
        <div className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem', minHeight: 'calc(100vh - 76px)' }}>

            {/* Header Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}
            >
                <motion.div variants={fadeInUp} style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(255, 0, 51, 0.1)', border: '1px solid rgba(255, 0, 51, 0.3)', borderRadius: '30px', marginBottom: '1.5rem' }}>
                    <span style={{ color: 'var(--cuec-red)', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                        Pioneering the Future
                    </span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1, fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>
                    About <br /> CUEC
                </motion.h1>

                <motion.p variants={fadeInUp} style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    The Entrepreneurship Cell at Chandigarh University, Uttar Pradesh, is a dynamic ecosystem dedicated to fostering the next generation of innovative founders, disruptors, and visionary leaders.
                </motion.p>
            </motion.div>

            {/* Mission Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '6rem', alignItems: 'center' }}
            >
                <motion.div variants={fadeInUp}>
                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our Mission</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                        At CU UP, we believe that innovation is not just a buzzword, but the foundational fabric of tomorrow's most successful enterprises. Our mission is to democratize access to elite entrepreneurial resources, mentorship, and high-performance computing.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                        We exist to bridge the gap between academic theory and cutthroat market reality, empowering innovators to build globally scalable solutions straight from the campus.
                    </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="glass-card" style={{ padding: '3rem', background: 'linear-gradient(135deg, rgba(20,20,20,0.8) 0%, rgba(30,0,10,0.8) 100%)', borderColor: 'rgba(255,0,51,0.2)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-50px', right: '-50px', opacity: 0.1 }}>
                        <BrainCircuit size={200} color="var(--cuec-red)" />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Zap color="var(--cuec-red)" /> The CU UP Advantage
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'var(--text-secondary)' }}>
                            <Building2 size={24} color="var(--cuec-white)" style={{ flexShrink: 0 }} />
                            <span>State-of-the-art innovation labs and technical resources available to student founders.</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'var(--text-secondary)' }}>
                            <TrendingUp size={24} color="var(--cuec-white)" style={{ flexShrink: 0 }} />
                            <span>Direct pipelines to seed funding and angel investor networks.</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'var(--text-secondary)' }}>
                            <Globe size={24} color="var(--cuec-white)" style={{ flexShrink: 0 }} />
                            <span>Global reach with a curriculum designed for international scale.</span>
                        </li>
                    </ul>
                </motion.div>
            </motion.div>

            {/* Core Values */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)', textAlign: 'center', marginBottom: '3rem' }}>Core Tenets</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {[
                        { icon: <BrainCircuit size={32} color="var(--cuec-red)" />, title: 'Tech-First Disruption', text: 'We prioritize building solutions that leverage modern technology to create exponential value.' },
                        { icon: <Lightbulb size={32} color="#fff" />, title: 'Relentless Execution', text: 'Ideas are cheap. We foster a culture of rapid prototyping, deployment, and iterative scaling.' },
                        { icon: <Globe size={32} color="var(--cuec-silver)" />, title: 'Global Impact', text: 'We build from Uttar Pradesh for the world, ensuring our ventures solve universal problems.' }
                    ].map((value, idx) => (
                        <motion.div key={idx} variants={fadeInUp} className="glass-card hover-glow-red" style={{ padding: '2rem', textAlign: 'center' }}>
                            <div style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                                {value.icon}
                            </div>
                            <h4 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>{value.title}</h4>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>{value.text}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

        </div>
    );
};

export default About;
