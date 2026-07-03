/**
 * Product card used inside the Featured Kakanin grid.
 * Kept as its own component since it repeats 8 times with the same shape.
 */
function ProductCard({ name, description, image, tags = [] }) {
  return (
    <article className="product-card">
      <div className="product-card__image">
        <span className="product-card__img-container" aria-hidden="true">
          <img
            src={image}
            alt={name}
            className="product-card__img"
            loading="lazy"
          />
        </span>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__description">{description}</p>

        <div className="product-card__tags">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="product-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;