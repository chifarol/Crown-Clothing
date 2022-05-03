import './category-card.scss';
import { useNavigate } from 'react-router-dom';



const CategoryItem = ({ category }) => {
    const { title, imageUrl } = category;
    const navigateTo = useNavigate();
    const navigateHandler = () => {
        navigateTo(`/shop/${title}`)
    }

    return (
        <div className="category-container" onClick={navigateHandler}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="category-body-container">
                <h1> {title}</h1>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem