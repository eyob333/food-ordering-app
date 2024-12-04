import { formatting } from "../../utils/formatter"

function CartItemList({name, quantity, price, onAdd, onRemove}){

    return <li className="cart-item">
        <p>
            {name} - {quantity} x {formatting(price)}
        </p>
        <p className="cart-item-actions">
            <button onClick={onAdd}>+</button>
            {quantity}
            <button onClick={onRemove}>-</button>
        </p>
    </li>
}

export default CartItemList