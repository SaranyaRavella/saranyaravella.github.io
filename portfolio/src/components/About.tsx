
import { motion } from 'framer-motion';
import { resumeData } from '../data';
import profileImg from '../assets/profile.jpg';

const About = () => {
    return (
        <section id="about">
            <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <span style={{ color: 'var(--primary)', marginRight: '10px', fontSize: '24px' }}>01.</span>
                About Me
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '50px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p>
                        Hello! I'm Saranya, a software engineer based in {resumeData.contact.location}.
                    </p>
                    <p>
                        I enjoy creating things that live on the internet. My interest in web development started back in 2016 during my undergrad, and since then I've been honing my skills in building accessible, inclusive products and digital experiences.
                    </p>
                    <p>
                        Fast-forward to today, and I've had the privilege of working at a major consultancy for a huge banking client. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                    </p>
                    <p>Here are a few technologies I've been working with recently:</p>

                    <ul style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
                        gap: '10px',
                        marginTop: '20px'
                    }}>
                        {resumeData.skills.frontend.slice(0, 6).map((tech, i) => (
                            <li key={i} style={{ position: 'relative', paddingLeft: '20px', color: 'var(--text-secondary)' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--primary)' }}>▹</span>
                                {tech}
                            </li>
                        ))}
                        {resumeData.skills.backend.slice(0, 3).map((tech, i) => (
                            <li key={i + 10} style={{ position: 'relative', paddingLeft: '20px', color: 'var(--text-secondary)' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--primary)' }}>▹</span>
                                {tech}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ position: 'relative' }}
                >
                    {/* Placeholder for Profile Image */}
                    <div style={{
                        width: '100%',
                        maxWidth: '300px',
                        height: '300px',
                        backgroundColor: 'var(--primary)',
                        borderRadius: '4px',
                        opacity: 0.2,
                        position: 'absolute',
                        top: '20px',
                        left: '20px'
                    }}></div>
                    <div style={{
                        width: '100%',
                        maxWidth: '300px',
                        height: '300px',
                        backgroundColor: 'var(--bg-light)',
                        borderRadius: '4px',
                        position: 'relative',
                        zIndex: 1,
                        overflow: 'hidden'
                    }}>
                        <img
                            src={profileImg}
                            alt="Profile"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease',
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
