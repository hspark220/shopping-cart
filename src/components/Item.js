import { FiTrash } from "react-icons/fi";

const Item = props => {

    return (
        <div className="item">
            <div className="item-picture">
                <h3>{props.item.title}</h3>
            </div>
            <div className="item-title">
                <h3>{props.item.title + ": "}</h3>
                <p>{props.item.description}</p>
            </div>
            
            <button className="item-delete" onClick={() => {
                props.onClick(props.index);
            }}><FiTrash size={20}/></button>
        </div>
    )
}

export default Item;