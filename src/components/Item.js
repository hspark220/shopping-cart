import { FiTrash } from "react-icons/fi";

const Item = props => {

    return (
        <div className="item">
            <div className="item-picture">
                <h3>{props.id}</h3>
            </div>
            <h3 className="item-title">{props.id}</h3>
            <button className="item-delete" onClick={() => {
                props.onClick(props.index);
            }}><FiTrash size={20}/></button>
        </div>
    )
}

export default Item;