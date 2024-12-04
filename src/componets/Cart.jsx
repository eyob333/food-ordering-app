import { useContext } from "react";
import CartContext from "../store/cartContext";
import UserProgressContext from "../store/userProgressContext";
import Modal from "./ui/Modal";
import { formatting } from "../utils/formatter";
import Button from "./ui/Button";

function Cart(){
    const cartCtx = useContext(CartContext);
    const totalPrice = cartCtx.items.reduce( (totalPrice, item) => totalPrice + item.quantity * item.price, 0)

    const userProgressCtx = useContext(UserProgressContext)
    console.log(cartCtx.items)

    function handleButtonClick(){
        userProgressCtx.hideCart()
    }

    return <Modal classNa={'cart'} open={userProgressCtx.progress === 'showCart'} >
        <ul>
            {cartCtx.items.map( item => <li key={item.id + Math.random()}>
                {item.name} -  {item.quantity}
            </li>)}
            <p className="cart-total"> { formatting(totalPrice) } </p>
            <p className="modal-actions">
                <Button textOnly onClick={handleButtonClick} >close</Button>
                <Button>Go to checkout</Button>
            </p>
        </ul>
    </Modal>
}

export default Cart