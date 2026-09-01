import { motion } from 'framer-motion'
import { vision, tools, profile } from '../data.js'
import Icon from './Icon.jsx'
import { stagger, fadeUp } from './Extras.jsx'

export default function Vision() {
  return (
    <section className="vision section" id="vision">
      <div className="container">
        <div className="vision-grid">
          <motion.div
            className="vision-media"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="vision-photo">
              <picture>
                <source type="image/webp" srcSet={profile.images.portraitWebp} />
                <img
                  src={profile.images.portrait}
                  alt="Ruturaj Jadhav — behind the scenes"
                  width={840}
                  height={1050}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="vision-photo-frame" aria-hidden="true" />
            <span className="vision-caption">01 — the craft behind the camera</span>
          </motion.div>

          <motion.div
            className="vision-copy"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span className="eyebrow" variants={fadeUp}>My vision</motion.span>
            <motion.h2 variants={fadeUp}>
              {vision.lead} <span className="vision-grad">{vision.highlight}</span>
            </motion.h2>
            <motion.p className="vision-sub" variants={fadeUp}>{vision.sub}</motion.p>

            <div className="v-pillars">
              {vision.pillars.map((p) => (
                <motion.div className="v-pillar" key={p.title} variants={fadeUp}>
                  <span className="v-ico"><Icon name={p.icon} size={21} /></span>
                  <div className="v-pillar-body">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div className="vision-tools" variants={fadeUp}>
              <span className="vt-label">The toolbox</span>
              <div className="vt-chips">
                {tools.map((t) => (
                  <span className="vt-chip" key={t}>{t}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
