import { useState, useEffect } from 'react';

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Add a subtle shadow once the page has scrolled past the hero top.
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 12);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => setIsMenuOpen(false);

    return (
        <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner container">
                <a href="#home" className="navbar__brand" onClick={handleLinkClick}>
                    {/* Replace with Ate Fe's Kakanin official logo. */}
                    <span className="navbar__logo-placeholder" aria-hidden="true">
                        <img src="src\assets/ICON.svg" alt="Ate Fe's Kakanin Logo" />
                    </span>
                    <span className="navbar__brand-name">Ate Fe's Kakanin</span>
                </a>

                <nav
                    className={`navbar__nav ${isMenuOpen ? 'navbar__nav--open' : ''}`}
                    aria-label="Primary"
                >
                    <ul className="navbar__links">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="navbar__link" onClick={handleLinkClick}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--open' : ''}`}
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}

export default Navbar;