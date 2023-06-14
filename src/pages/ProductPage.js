import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';

const ProductPage = props => {

    const { id } = useParams();

    return (
        <>
            <Navigation cart={props.cart}/>
            <div className="productPage">
                <h2 className='title'>{id}</h2>
                <p className="description">This item number is  {id}</p>
                <div className="product-picture">
                    <h2>{id}</h2>
                </div>
                <button className="add" onClick={() => {
                    props.onClick(id);
                    console.log(props.cart.length)
                }}>Add To Cart</button>
                
            </div>
        </>
        
    )
}

export default ProductPage;