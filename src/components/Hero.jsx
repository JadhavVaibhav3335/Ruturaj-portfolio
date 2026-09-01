import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { profile, stats, heroImage } from '../data.js'
import Icon from './Icon.jsx'
import { Magnetic, Counter } from './Extras.jsx'

export default function Hero() {
  const [i, setI] = useState(0)
  const { scrollY } = useScroll()
  const yBg = useTransform(scrollY, [0, 700], [0, -60])

  useEffect(() => {
    const t = setInterval(() => setI((s) => (s + 1) % profile.roles.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero" id="home">
      <motion.div className="hero-bg" style={{ y: yBg }} aria-hidden="true">
        <picture className="hero-bg-image">
          <source type="image/webp" srcSet={heroImage.srcSetWebp} sizes={heroImage.sizes} />
          <img
            src={heroImage.src}
            srcSet={heroImage.srcSetJpg}
            sizes={heroImage.sizes}
            width={heroImage.width}
            height={heroImage.height}
            fetchPriority="high"
            decoding="async"
            alt=""
          />
        </picture>
        <div className="hero-aurora">
          <span className="ha ha-1" />
          <span className="ha ha-2" />
        </div>
        <div className="hero-bg-veil" />
        <div className="hero-grid" />
      </motion.div>

      <span className="hero-mark" aria-hidden="true">{profile.initials}</span>

      <div className="hero-inner">
        <div className="hero-copy">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <span className="dot-pulse" /> Healthcare marketing · video · design
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            I&apos;m <span className="grad-text">{profile.first}</span> —<br />
            <span className="role-line">
              <AnimatePresence mode="wait">
                <motion.span
                  key={profile.roles[i]}
                  className="role-word"
                  initial={{ opacity: 0, y: 26, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -26, filter: 'blur(6px)' }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {profile.roles[i]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            className="hero-lede"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            {profile.intro}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <Magnetic>
              <a href="#work" className="btn btn-primary">
                Watch my work <Icon name="play" size={15} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn btn-ghost">
                Start a project <Icon name="arrowRight" size={15} />
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
          >
            {stats.map((s) => (
              <div className="hero-stat" key={s.label}>
                <strong>
                  <Counter to={s.value} suffix={s.suffix} />
                </strong>
                <span>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#vision"
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        aria-label="Scroll to vision"
      >
        <span className="mouse">
          <span className="mouse-dot" />
        </span>
        scroll
      </motion.a>
    </section>
  )
}
