import './category-preview.styles.scss'
import ProductCard from '../product-card/product-card.component'
import {Link} from 'react-router-dom'

const CategoryPreview = ({ title, products}) => {
    return (
        <div className='category-preview-container'>
            
            <h2>
                <Link className='title' to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {
                    products
                        .filter((_, idx) => idx < 4 ) //the underscore means 'i dont want to use it'
                        .map((product) => 
                    <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    )
}
export default CategoryPreview