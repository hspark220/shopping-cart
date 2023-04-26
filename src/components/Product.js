const Product = props => {



    return (
        <div className="product" onClick={props.onClick}>
            <h1>{props.product}</h1>
        </div>
    )

}

export default Product;