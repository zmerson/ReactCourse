import './category.styles.scss'
import ProductCard from '../../components/product-card/product-card.component';
import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
//The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.
//https://reactrouter.com/docs/en/v6/hooks/use-params

const Category = () => {
    const {category} = useParams()
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category]);
        }, [category, categoriesMap])
    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase}</h2>
            <div className='category-container'>
            <h2 className='title'>{category}</h2>
            {
                products &&
                products.map((product) => <ProductCard key={product.id} product={product} />)
            }
        </div>
        </Fragment>
       
    )
}

export default Category;