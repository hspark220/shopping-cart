import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';

const ProductPage = props => {

    const { id } = useParams();

    return (
        <>
            <Navigation cart={props.cart}/>
            <div className="productPage">
                <h2 className='title'>{props.product[id].title}</h2>
                <p className="description">{props.product[id].description}</p>
                <div className="product-picture">
                    <h2>{props.product[id].title}</h2>
                </div>
                <div className='product-price'>
                    <h3>{`Price: $${props.product[id].price}`}</h3>
                </div>
                <button className="add" onClick={() => {
                    props.onClick(props.product[id]);
                    console.log(props.cart.length)
                }}>Add To Cart</button>
                
            </div>
        </>
        
    )
}


export default ProductPage;