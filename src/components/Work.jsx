import { motion } from 'framer-motion'
import { work } from '../data.js'
import Icon from './Icon.jsx'
import { SectionHead, stagger, fadeUp } from './Extras.jsx'

const spans = [7, 5, 5, 7, 5, 7]

export default function Work() {
  return (
    <section className="work section" id="work">
      <div className="container">
        <SectionHead
          eyebrow="Selected work"
          title="Projects that performed"
          sub="A slice of recent healthcare campaigns — each one measured, not just made."
        />

        <motion.div
          className="work-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {work.map((w, i) => (
            <motion.a
              key={w.title}
              href="#contact"
              className={`poster${i === 0 ? ' poster-feature' : ''}`}
              style={{ '--span': spans[i % spans.length], '--g': w.g }}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              <div className="poster-art">
                <span className="poster-ico"><Icon name={w.icon} size={34} /></span>
                <span className="poster-play"><Icon name="play" size={16} /></span>
                <span className="poster-dur">{w.dur}</span>
                <span className="poster-cat">{w.cat}</span>
              </div>
              <div className="poster-meta">
                <h3>{w.title}</h3>
                <span className="poster-tag">{w.tag}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
