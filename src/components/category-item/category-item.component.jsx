import './category-item.styles.scss';

export default function CategoryItem({ category: { imageUrl, title } }) {
  console.log(imageUrl);
  return (
    <div className="category">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
