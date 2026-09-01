import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  animate,
  AnimatePresence,
} from 'framer-motion'
import Icon from './Icon.jsx'

/* Scroll progress bar pinned to the top of the viewport */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  return (
    <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
  )
}

/* Animated number counter — counts up when scrolled into view */
export function Counter({ to, suffix = '', duration = 1.8 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  )
}

/* Magnetic hover wrapper for buttons & chips */
export function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      style={{ display: 'inline-block' }}
      animate={{ x: pos.x * strength, y: pos.y * strength }}
      transition={{ type: 'spring', stiffness: 220, damping: 16, mass: 0.5 }}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect()
        setPos({ x: e.clientX - r.left - r.width / 2, y: e.clientY - r.top - r.height / 2 })
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      {children}
    </motion.div>
  )
}

/* Reusable section heading with scroll reveal */
export function SectionHead({ eyebrow, title, sub, align = 'center' }) {
  return (
    <motion.div
      className={`section-head ${align === 'left' ? 'is-left' : ''}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </motion.div>
  )
}

/* Back-to-top floating button */
export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          className="back-top"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ y: -3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <Icon name="arrowUp" size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/* Shared scroll-reveal variants */
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
