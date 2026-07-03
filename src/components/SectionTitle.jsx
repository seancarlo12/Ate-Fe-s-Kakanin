/**
 * Reusable section heading with an eyebrow label and a gold underline stroke,
 * used to keep heading rhythm consistent across sections.
 */
function SectionTitle({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2 className="section-title__heading">{title}</h2>
      <span className="section-title__underline" aria-hidden="true"></span>
      {description && <p className="section-title__description">{description}</p>}
    </div>
  );
}

export default SectionTitle;