
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 50px',
                backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)' : 'none',
                zIndex: 100,
                transition: 'all 0.3s ease'
            }}
            className="container"
        >
            <div style={{ color: 'var(--primary)', fontSize: '24px', fontWeight: 700, letterSpacing: '1px', zIndex: 1001 }}>
                SR.
            </div>

            {/* Mobile Toggle */}
            <button
                className="mobile-nav-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ color: 'var(--primary)', fontSize: '24px', zIndex: 1001 }}
            >
                {menuOpen ? '✕' : '☰'}
            </button>

            {/* Desktop Nav */}
            <ul className="desktop-nav" style={{ display: 'flex', gap: '30px' }}>
                {navLinks.map((link, i) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i }}
                    >
                        <a href={link.href} style={{ color: 'var(--text-primary)', fontSize: '14px', fontFamily: 'var(--font-mono)' }}>
                            <span style={{ color: 'var(--primary)', marginRight: '5px' }}>0{i + 1}.</span>
                            {link.name}
                        </a>
                    </motion.li>
                ))}
            </ul>

            {/* Mobile Nav Overlay */}
            <div className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    {navLinks.map((link, i) => (
                        <li key={i}>
                            <a
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                style={{ color: 'var(--text-primary)', fontSize: '20px', fontFamily: 'var(--font-mono)' }}
                            >
                                <span style={{ color: 'var(--primary)', marginRight: '10px' }}>0{i + 1}.</span>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
