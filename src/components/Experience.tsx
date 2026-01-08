import { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data';

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" style={{ maxWidth: '700px' }}>
            <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <span style={{ color: 'var(--primary)', marginRight: '10px', fontSize: '24px' }}>02.</span>
                Where I've Worked
            </motion.h2>

            <div className="experience-container">
                <div className="experience-tabs" style={{ position: 'relative', width: 'max-content' }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '2px',
                        height: '100%',
                        background: 'var(--bg-light)',
                        zIndex: 0
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        top: `${activeTab * 42}px`,
                        left: 0,
                        width: '2px',
                        height: '42px',
                        background: 'var(--primary)',
                        zIndex: 1,
                        transition: 'top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                        boxShadow: '0 0 10px var(--primary)'
                    }}></div>
                    {resumeData.experience.map((job, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className="experience-tab-btn"
                            style={{
                                display: 'block',
                                width: '100%',
                                height: '42px',
                                padding: '0 20px',
                                border: 'none',
                                borderLeft: '2px solid transparent',
                                background: activeTab === i ? 'rgba(17, 34, 64, 0.5)' : 'transparent',
                                color: activeTab === i ? 'var(--primary)' : 'var(--text-secondary)',
                                textAlign: 'left',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '13px',
                                cursor: 'pointer',
                                transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {job.company}
                        </button>
                    ))}
                </div>

                <div className="experience-content" style={{ marginLeft: '30px', flex: 1 }}>
                    {resumeData.experience.map((job, i) => (
                        activeTab === i && (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 style={{ fontSize: '22px', fontWeight: 500 }}>
                                    {job.role} <span style={{ color: 'var(--primary)' }}>@ {job.company}</span>
                                </h3>
                                {job.client && (
                                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '5px' }}>
                                        Client: <span style={{ color: 'var(--text-primary)' }}>{job.client}</span>
                                    </p>
                                )}
                                <p style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', marginBottom: '25px' }}>
                                    {job.period} | {job.location}
                                </p>
                                <ul>
                                    {job.description.map((desc, j) => (
                                        <li key={j} style={{ position: 'relative', paddingLeft: '30px', marginBottom: '10px', fontSize: '16px', color: 'var(--text-secondary)' }}>
                                            <span style={{ position: 'absolute', left: 0, color: 'var(--primary)' }}>▹</span>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
