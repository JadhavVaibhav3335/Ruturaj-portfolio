import { motion } from 'framer-motion'
import { services } from '../data.js'
import Icon from './Icon.jsx'
import { SectionHead, stagger, fadeUp } from './Extras.jsx'

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <SectionHead
          eyebrow="What I do"
          title="Services built for healthcare growth"
          sub="Five disciplines, one goal — content that earns attention and converts it into patients."
        />

        <motion.ol
          className="svc-list"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((s, i) => (
            <motion.li className="svc-row" key={s.title} variants={fadeUp}>
              <a href="#contact" className="svc-link">
                <span className="svc-num">0{i + 1}</span>
                <span className="svc-body">
                  <span className="svc-title">{s.title}</span>
                  <span className="svc-desc">{s.desc}</span>
                </span>
                <span className="svc-arrow"><Icon name="arrowRight" size={22} /></span>
              </a>
            </motion.li>
          ))}

          <motion.li className="svc-row svc-row-cta" variants={fadeUp}>
            <a href="#contact" className="svc-link">
              <span className="svc-num">06</span>
              <span className="svc-body">
                <span className="svc-title">Something custom?</span>
                <span className="svc-desc">Full campaign, a rebrand or a hybrid video + design package — let&apos;s scope it together.</span>
              </span>
              <span className="svc-arrow"><Icon name="arrowRight" size={22} /></span>
            </a>
          </motion.li>
        </motion.ol>
      </div>
    </section>
  )
}
