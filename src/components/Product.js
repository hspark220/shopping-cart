import { Link } from "react-router-dom";

const Product = props => {



    return (
        <Link className="product" to={`/shop/${props.index}`}>
            <h2>{props.product.title}</h2>
        </Link>
    )

}

export default Product;