
import { motion } from 'framer-motion';
import { resumeData } from '../data';

const Contact = () => {
    return (
        <section id="contact" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}
            >
                04. What's Next?
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ fontSize: '50px', justifyContent: 'center', marginBottom: '20px' }}
            >
                Get In Touch
            </motion.h2>

            <h2 style={{ display: 'none' }}>Hidden fix for pseudo element</h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ margin: '0 auto 50px auto' }}
            >
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}
            >
                <a
                    href={`mailto:${resumeData.contact.email}`}
                    style={{
                        padding: '18px 28px',
                        fontSize: '16px',
                        color: 'var(--primary)',
                        border: '1px solid var(--primary)',
                        borderRadius: '4px',
                        background: 'transparent',
                        display: 'inline-block',
                        textDecoration: 'none'
                    }}
                >
                    Say Hello
                </a>
                <a
                    href={resumeData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        padding: '18px 28px',
                        fontSize: '16px',
                        color: 'var(--bg-dark)',
                        background: 'var(--primary)',
                        borderRadius: '4px',
                        display: 'inline-block',
                        textDecoration: 'none',
                        fontWeight: 'bold'
                    }}
                >
                    LinkedIn
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
