import './category-item.styles.scss'

const CategoryItem = ({category}) => {
    const { imageUrl, title } = category
    return (
        <div  className="category-container">
        <div className='background-image' style={{
          backgroundImage: `url(${imageUrl})` //https://reactjs.org/docs/dom-elements.html#style
        }}/>
        <div className="category-body-container">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
      </div>
    )
}

export default CategoryItem