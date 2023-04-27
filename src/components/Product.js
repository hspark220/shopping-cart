import { Link } from "react-router-dom";

const Product = props => {



    return (
        <Link className="product" to={`/shop/${props.product}`}>
            <h2>{props.product}</h2>
        </Link>
    )

}

export default Product;