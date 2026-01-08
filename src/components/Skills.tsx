
import { motion } from 'framer-motion';
import { resumeData } from '../data';

const Skills = () => {
    return (
        <section id="skills">
            <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <span style={{ color: 'var(--primary)', marginRight: '10px', fontSize: '24px' }}>03.</span>
                Skills
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {Object.entries(resumeData.skills).map(([category, items], i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        {/* Minimalist Heading - No Box */}
                        <h3 style={{
                            textTransform: 'uppercase',
                            color: 'var(--text-secondary)',
                            fontSize: '14px',
                            letterSpacing: '2px',
                            marginBottom: '20px',
                            borderLeft: '3px solid var(--primary)',
                            paddingLeft: '15px'
                        }}>
                            {category}
                        </h3>

                        {/* Sleek Glass Tags */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                            {items.map((skill, j) => (
                                <motion.div
                                    key={j}
                                    whileHover={{ y: -3, backgroundColor: 'rgba(157, 142, 199, 0.2)' }}
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                        color: 'var(--text-primary)',
                                        padding: '10px 20px',
                                        borderRadius: '8px',
                                        fontSize: '15px',
                                        fontFamily: 'var(--font-mono)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        cursor: 'default',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
