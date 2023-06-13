const SideCart = props => {

    return (
        <div className="side-cart">
            {props.cart.map(item => {
                return <h3>{item}</h3>
            })}
        </div>
    )
}

export default SideCart;