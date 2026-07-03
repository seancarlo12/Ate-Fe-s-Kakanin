const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/esperanza.tolentino.543",
    icon: "facebook",
  },
  {
    label: "Phone",
    href: "tel:+639389791867",
    icon: "phone",
  },
];
function SocialIcon({ type }) {
  if (type === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"
        />
      </svg>
    );
    
  }
  return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.62 10.79a15.46 15.46 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.56 3.57.56a1 1 0 011 1V20a1 1 0 01-1 1C10.3 21 3 13.7 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.19 2.45.56 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"
          />
        </svg>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="navbar__logo-placeholder" aria-hidden="true">
            <img src="https://res.cloudinary.com/k0n4rwiu/image/upload/v1783105886/ICON_hjapn8.svg" alt="Ate Fes Kakanin Logo" />
          </span>
          <div>
            <p className="footer__name">Ate Fe's Kakanin</p>
            <p className="footer__tagline">Traditional Filipino Kakanin, Made with Love</p>
          </div>
        </div>

        <ul className="footer__socials">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                className="footer__social-link"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon type={social.icon} />
              </a>
            </li>
          ))}
        </ul>

        <a href="#home" className="footer__back-to-top">
          Back to Top ↑
        </a>
      </div>

      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} Ate Fe's Kakanin. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;