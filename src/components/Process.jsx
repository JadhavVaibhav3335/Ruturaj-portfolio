import { motion } from 'framer-motion'
import { processSteps } from '../data.js'
import { SectionHead, stagger, fadeUp } from './Extras.jsx'

export default function Process() {
  return (
    <section className="process section" id="process">      <div className="container">
        <SectionHead
          eyebrow="How I work"
          title="A process that ships, on time"
          sub="Transparent steps from first call to final export — so you always know what's next."
        />
        <motion.div
          className="process-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {processSteps.map((s, i) => (
            <motion.div className="step" key={s.n} variants={fadeUp}>
              <div className="step-top">
                <span className="step-num">{s.n}</span>
                {i < processSteps.length - 1 && <span className="step-line" aria-hidden="true" />}
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
