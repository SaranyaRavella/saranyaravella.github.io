
import { motion } from 'framer-motion';
import { resumeData } from '../data';

const Education = () => {
    return (
        <section id="education" style={{ maxWidth: '800px', margin: '0 auto 100px auto' }}>
            <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ marginBottom: '40px' }}
            >
                <span style={{ color: 'var(--primary)', marginRight: '10px', fontSize: '24px' }}>04.</span>
                Education
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                {resumeData.education.map((edu, i) => (
                    <motion.div
                        key={i}
                        className="glass-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -5 }}
                        style={{ padding: '30px', borderLeft: '3px solid var(--primary)' }}
                    >
                        <h3 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--text-primary)' }}>
                            {edu.institution}
                        </h3>
                        <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)', fontSize: '14px', marginBottom: '15px' }}>
                            {edu.degree}
                        </p>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }}>
                            <span>{edu.period}</span>
                            <span>{edu.location}</span>
                        </p>
                        {edu.achievements && (
                            <p style={{ marginTop: '15px', fontSize: '13px', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                                {edu.achievements}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
