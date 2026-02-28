import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, MonitorPlay, Users, ArrowRight, BrainCircuit } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};



const Home = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // Parallax scrolling effects
    const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yHeroImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <div className="container" style={{ position: 'relative', paddingTop: '5rem', paddingBottom: '6rem', minHeight: 'calc(100vh - 76px)', display: 'flex', flexDirection: 'column', gap: '6rem' }}>

            {/* Hero Section */}
            <motion.div
                ref={heroRef}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 10,
                    opacity: opacityHero
                }}
            >
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    style={{ textAlign: 'left', y: yHeroText, zIndex: 20 }}
                >
                    <motion.div variants={fadeInUp} style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(255, 0, 51, 0.1)', border: '1px solid rgba(255, 0, 51, 0.3)', borderRadius: '30px', marginBottom: '1.5rem' }}>
                        <span style={{ color: 'var(--cuec-red)', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                            DREAM DARE DEVELOP
                        </span>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-gradient" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1, fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Empowering <br />
                        Next-Gen <br />
                        Innovators
                    </motion.h1>
                    <motion.p variants={fadeInUp} style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                        The Entrepreneurship Cell at Chandigarh University, Uttar Pradesh, is the epicenter of innovation, disruptive startups, and visionary leadership. Join the revolution.
                    </motion.p>
                    <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <Link to="/register" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                            Join The Movement <ArrowRight size={20} />
                        </Link>
                        <Link to="/events/redbull-basement" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                            Red Bull Basement
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Hero Image / Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    style={{ position: 'relative', display: 'flex', justifyContent: 'center', y: yHeroImage, zIndex: 10 }}
                >
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(255,0,51,0.2) 0%, transparent 70%)', zIndex: -1, filter: 'blur(40px)' }}></div>
                    <img
                        src="/assets/hero.png"
                        alt="CUEC Hub"
                        style={{ width: '100%', maxWidth: '480px', objectFit: 'contain', borderRadius: '24px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))', border: '1px solid rgba(255,255,255,0.05)' }}
                    />
                </motion.div>
            </motion.div>

            {/* Core Pillars Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2, margin: "-100px" }}
                variants={staggerContainer}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', position: 'relative', zIndex: 10 }}
            >
                <motion.div
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="glass-card hover-glow-red"
                    style={{ padding: '2.5rem', textAlign: 'left' }}
                >
                    <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(255, 51, 102, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(255, 51, 102, 0.2)' }}>
                        <Rocket color="var(--cuec-red)" size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Incubation</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Transform your raw ideas into funded startups with our elite incubation and intensive mentorship programs at CU UP.</p>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="glass-card hover-glow-red"
                    style={{ padding: '2.5rem', textAlign: 'left' }}
                >
                    <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                        <MonitorPlay color="white" size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Tech & Business Workshops</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Learn from industry titans in dedicated masterclasses focusing on product engineering, strategy, and go-to-market execution.</p>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="glass-card hover-glow-red"
                    style={{ padding: '2.5rem', textAlign: 'left' }}
                >
                    <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(226, 232, 240, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(226, 232, 240, 0.2)' }}>
                        <Users color="var(--cuec-silver)" size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Networking</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Connect directly with an exclusive network of successful alumni, angel investors, and rogue builders.</p>
                </motion.div>
            </motion.div>

            {/* Why CU UP Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', position: 'relative', zIndex: 10, marginTop: '2rem' }}
            >
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>Why CU UP?</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '1rem auto 0' }}>The premier destination for tech-centric entrepreneurship.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <motion.div variants={fadeInUp} className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '2px solid var(--cuec-red)' }}>
                        <BrainCircuit size={40} color="var(--cuec-red)" />
                        <h4 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>Innovation-First Philosophy</h4>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>We integrate cutting-edge technology into the core of every startup we incubate, ensuring our founders build future-proof, highly scalable solutions.</p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '2px solid var(--cuec-white)' }}>
                        <Rocket size={40} color="var(--cuec-white)" />
                        <h4 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>Accelerated Growth</h4>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Leverage the massive academic and industrial network of Chandigarh University, Uttar Pradesh to fast-track your product-market fit.</p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Call to Action Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="glass-card"
                style={{ padding: '4rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(20,20,20,0.8) 0%, rgba(30,0,10,0.8) 100%)', borderColor: 'rgba(255,0,51,0.2)' }}
            >
                <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', marginBottom: '1.5rem' }}>Ready to disrupt the future?</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                    Stop waiting for the perfect moment. Take the leap, build groundbreaking solutions, and redefine the entrepreneurial landscape at Chandigarh University, Uttar Pradesh.
                </p>
                <Link to="/register" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>
                    Start Your Journey
                </Link>
            </motion.div>

        </div>
    );
};

export default Home;
