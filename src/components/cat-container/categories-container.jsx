import CategoryItem from '../cards/category-card';
import './categories-container.scss';

const CategoriesContainer = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((category) => {
                return (
                    <CategoryItem category={category} key={category.id} />

                )
            })}

        </div>
    )
}

export default CategoriesContainer;