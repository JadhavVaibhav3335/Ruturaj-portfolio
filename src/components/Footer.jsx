import { profile, navLinks, services } from '../data.js'
import Icon from './Icon.jsx'

const socials = [
  { icon: 'instagram', label: 'Instagram', href: profile.instagram },
  { icon: 'youtube', label: 'YouTube', href: '#' },
  { icon: 'behance', label: 'Behance', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="nav-logo">
              <span className="logo-mark">{profile.initials}</span>
              <span className="logo-text">
                {profile.brand}
                <em>healthcare media</em>
              </span>
            </a>
            <p>{profile.tagline}</p>
            <p className="footer-loc">
              <Icon name="pin" size={15} /> {profile.location}
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            {services.map((s) => (
              <a key={s.title} href="#services">{s.title}</a>
            ))}
          </div>

          <div className="footer-col">
            <h4>Say hello</h4>
            <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
            <a href={profile.instagram} target="_blank" rel="noreferrer">{profile.instaHandle}</a>
            {profile.email && <a href={`mailto:${profile.email}`}>{profile.email}</a>}
            <div className="footer-socials">
              {socials.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {profile.brand}. All rights reserved.</span>
          <span>Made with care for healthcare brands ✦</span>
        </div>
      </div>
    </footer>
  )
}
