import { motion } from 'framer-motion'
import { profile } from '../data.js'
import Icon from './Icon.jsx'
import { SectionHead, Magnetic, stagger, fadeUp } from './Extras.jsx'

const waText = encodeURIComponent("Hi Ruturaj, I have a project for you!")

const actions = [
  { icon: 'chat', cls: 'wa', label: 'WhatsApp', sub: 'Fastest way to reach me', href: `https://wa.me/${profile.whatsapp}?text=${waText}`, external: false },
  { icon: 'phone', cls: 'call', label: 'Call me', sub: profile.phone, href: `tel:${profile.phoneHref}`, external: false },
  { icon: 'instagram', cls: 'ig', label: 'Instagram DM', sub: profile.instaHandle, href: profile.instagram, external: true },
]

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-copy"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <SectionHead
              align="left"
              eyebrow="Contact"
              title="Have a project in mind?"
              sub="Tell me about your brand and goals — I usually reply within a few hours."
            />

            <motion.div className="contact-info" variants={stagger}>
              <motion.a href={`tel:${profile.phoneHref}`} className="contact-row" variants={fadeUp}>
                <span className="contact-ico"><Icon name="phone" size={18} /></span>
                <span><small>Phone / WhatsApp</small><strong>{profile.phone}</strong></span>
              </motion.a>
              <motion.a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="contact-row"
                variants={fadeUp}
              >
                <span className="contact-ico"><Icon name="instagram" size={18} /></span>
                <span><small>Instagram</small><strong>{profile.instaHandle}</strong></span>
              </motion.a>
              <motion.div className="contact-row" variants={fadeUp}>
                <span className="contact-ico"><Icon name="pin" size={18} /></span>
                <span><small>Location</small><strong>{profile.location}</strong></span>
              </motion.div>
            </motion.div>

            <motion.div className="contact-socials" variants={fadeUp}>
              <Magnetic>
                <a href={profile.instagram} target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
                  <Icon name="instagram" size={19} />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#" className="social-btn" aria-label="YouTube"><Icon name="youtube" size={19} /></a>
              </Magnetic>
              <Magnetic>
                <a href="#" className="social-btn" aria-label="Behance"><Icon name="behance" size={19} /></a>
              </Magnetic>
            </motion.div>
          </motion.div>

          <motion.div
            className="connect-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>Start a conversation</h3>
            <p>Pick whichever feels easiest — I&apos;ll get back to you quickly.</p>

            <div className="action-list">
              {actions.map((a) => (
                <motion.a
                  key={a.label}
                  href={a.href}
                  target={a.external ? '_blank' : undefined}
                  rel="noreferrer"
                  className="action-row"
                  whileHover={{ y: -4, x: 2 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className={`action-ico ${a.cls}`}><Icon name={a.icon} size={20} /></span>
                  <span className="action-meta">
                    <strong>{a.label}</strong>
                    <small>{a.sub}</small>
                  </span>
                  <span className="action-arrow"><Icon name="arrowRight" size={18} /></span>
                </motion.a>
              ))}
            </div>

            <p className="connect-note">⚡ Available for freelance, contract & full-campaign work.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
