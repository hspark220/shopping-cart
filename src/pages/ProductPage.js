import { useParams } from 'react-router-dom';

const ProductPage = props => {

    const { id } = useParams();

    return (
        <div className="productPage">
            <h1>{id}</h1>
        </div>
    )
}

export default ProductPage;