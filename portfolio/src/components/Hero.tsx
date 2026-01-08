
import { motion } from 'framer-motion';
import { resumeData } from '../data';

const Hero = () => {
    return (
        <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '16px',
                    marginBottom: '20px',
                    letterSpacing: '0.1em'
                }}
            >
                DESIGNING THE FUTURE
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                    fontSize: 'clamp(40px, 8vw, 80px)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                    marginBottom: '10px'
                }}
            >
                {resumeData.name}.
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                    fontSize: 'clamp(30px, 6vw, 60px)',
                    fontWeight: 700,
                    color: 'var(--text-secondary)',
                    marginBottom: '30px'
                }}
            >
                Building meaningful digital experiences for the web.
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ maxWidth: '540px', fontSize: '18px', lineHeight: 1.6 }}
            >
                {resumeData.summary}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ marginTop: '50px' }}
            >
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                >
                    Check out my resume!
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
