import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';

export default function Categories({ categories }) {
  return (
    <div className="directory">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
