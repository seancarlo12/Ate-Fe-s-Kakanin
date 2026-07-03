/**
 * Decorations.jsx
 * Signature visual motifs inspired by bilao weaving, banana leaves,
 * and coconut silhouettes. Kept subtle and reused across sections
 * rather than scattered one-off graphics.
 */

/** Woven bilao edge — replaces plain straight dividers between sections. */
export function WovenDivider({ flip = false, tone = "pandan" }) {
    const stroke = tone === "pandan" ? "var(--pandan-700)" : "var(--gold-600)";
    return (
        <svg
            className={`woven-divider${flip ? " woven-divider--flip" : ""}`}
            viewBox="0 0 400 24"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            <path
                d="M0 12 Q 10 0, 20 12 T 40 12 T 60 12 T 80 12 T 100 12 T 120 12 T 140 12 T 160 12 T 180 12 T 200 12 T 220 12 T 240 12 T 260 12 T 280 12 T 300 12 T 320 12 T 340 12 T 360 12 T 380 12 T 400 12"
                fill="none"
                stroke={stroke}
                strokeWidth="2.5"
            />
            <path
                d="M0 12 Q 10 24, 20 12 T 40 12 T 60 12 T 80 12 T 100 12 T 120 12 T 140 12 T 160 12 T 180 12 T 200 12 T 220 12 T 240 12 T 260 12 T 280 12 T 300 12 T 320 12 T 340 12 T 360 12 T 380 12 T 400 12"
                fill="none"
                stroke={stroke}
                strokeWidth="2.5"
                opacity="0.45"
            />
        </svg>
    );
}

/** Circular woven bilao pattern, used as an ambient background motif. */
export function BilaoPattern({ className = "" }) {
    return (
        <svg
            className={`bilao-pattern ${className}`}
            viewBox="0 0 300 300"
            aria-hidden="true"
        >
            <defs>
                <pattern
                    id="weave"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d="M0 0 L20 20 M20 0 L0 20"
                        stroke="var(--gold-600)"
                        strokeWidth="1.5"
                        opacity="0.5"
                    />
                </pattern>
            </defs>
            <circle
                cx="150"
                cy="150"
                r="145"
                fill="none"
                stroke="var(--pandan-700)"
                strokeWidth="3"
            />
            <circle cx="150" cy="150" r="128" fill="url(#weave)" opacity="0.6" />
            <circle
                cx="150"
                cy="150"
                r="110"
                fill="none"
                stroke="var(--pandan-700)"
                strokeWidth="2"
                opacity="0.7"
            />
            <circle
                cx="150"
                cy="150"
                r="90"
                fill="none"
                stroke="var(--gold-600)"
                strokeWidth="2"
                opacity="0.6"
            />
        </svg>
    );
}

/** Single banana leaf silhouette — used in page corners. */
export function BananaLeaf({ className = "" }) {
    return (
        <svg
            className={`banana-leaf ${className}`}
            viewBox="0 0 200 340"
            aria-hidden="true"
        >
            <path
                d="M100 10 C 40 40, 10 120, 20 200 C 28 260, 55 310, 100 330 C 92 260, 90 180, 100 120 C 110 60, 100 10, 100 10 Z"
                fill="var(--pandan-700)"
            />
            <path
                d="M100 25 C 96 90, 96 220, 100 320"
                fill="none"
                stroke="var(--pandan-900)"
                strokeWidth="3"
                opacity="0.4"
            />
        </svg>
    );
}

/** Coconut half silhouette, used sparingly as an accent illustration. */
export function CoconutIcon({ className = "" }) {
    return (
        <svg
            className={`coconut-icon ${className}`}
            viewBox="0 0 120 120"
            aria-hidden="true"
        >
            <path
                d="M60 10 C 90 10, 108 35, 108 62 C 108 92, 86 110, 60 110 C 34 110, 12 92, 12 62 C 12 35, 30 10, 60 10 Z"
                fill="var(--gold-tint)"
                stroke="var(--gold-600)"
                strokeWidth="3"
            />
            <path
                d="M60 10 C 90 10, 108 35, 108 62 L 60 62 Z"
                fill="var(--pandan-700)"
                opacity="0.85"
            />
            <circle cx="45" cy="80" r="4" fill="var(--pandan-900)" opacity="0.5" />
            <circle cx="65" cy="88" r="4" fill="var(--pandan-900)" opacity="0.5" />
            <circle cx="55" cy="70" r="4" fill="var(--pandan-900)" opacity="0.5" />
        </svg>
    );
}

/** Soft organic blob used behind headings/hero for warmth without clutter. */
export function SoftBlob({ className = "", tone = "gold" }) {
    const fill = tone === "gold" ? "var(--gold-tint)" : "var(--pandan-tint)";
    return (
        <svg
            className={`soft-blob ${className}`}
            viewBox="0 0 200 200"
            aria-hidden="true"
        >
            <path
                fill={fill}
                d="M45.3,-58.5C57.9,-49.9,66.3,-34.6,69.4,-18.4C72.6,-2.2,70.5,15,62.6,29.1C54.7,43.2,41,54.2,25.6,61.1C10.2,68,-6.9,70.8,-22.6,66.6C-38.3,62.4,-52.6,51.2,-61.6,36.5C-70.6,21.9,-74.3,3.8,-70.6,-12.3C-66.9,-28.5,-55.8,-42.7,-42,-51.4C-28.2,-60.1,-14.1,-63.4,1.6,-65.5C17.3,-67.7,34.7,-67.1,45.3,-58.5Z"
                transform="translate(100 100)"
            />
        </svg>
    );
}
