import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';

const ProductPage = props => {

    const { id } = useParams();

    return (
        <>
            <Navigation/>
            <div className="productPage">
                
                <div className="product-picture">
                    <h2>{id}</h2>
                </div>
            </div>
        </>
        
    )
}

export default ProductPage;