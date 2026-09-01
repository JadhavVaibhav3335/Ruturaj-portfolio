import { motion } from 'framer-motion'
import { testimonials } from '../data.js'
import { SectionHead, stagger, fadeUp } from './Extras.jsx'

const shades = ['#e9e9e9', '#d4d4d4', '#bfbfbf', '#a9a9a9']

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <SectionHead
          eyebrow="Testimonials"
          title="Trusted by healthcare teams"
          sub="The people who grew their practices with content that works."
        />
        <motion.div
          className="t-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {testimonials.map((t, i) => (
            <motion.figure className="t-card" key={t.name} variants={fadeUp} whileHover={{ y: -6 }}>
              <div className="t-stars" aria-hidden="true">★★★★★</div>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="t-avatar" style={{ background: shades[i % shades.length] }}>
                  {t.name.replace('Dr. ', '').split(' ').map((w) => w[0]).join('').slice(0, 2)}
                </span>
                <span>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
