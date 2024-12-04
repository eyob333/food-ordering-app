import { useContext } from "react";
import CartContext from "../store/cartContext";
import UserProgressContext from "../store/userProgressContext";
import Modal from "./ui/Modal";
import { formatting } from "../utils/formatter";
import CartItemList from "./ui/CartItemList";
import Button from "./ui/Button";

function Cart(){
    const cartCtx = useContext(CartContext);
    const totalPrice = cartCtx.items.reduce( (totalPrice, item) => totalPrice + item.quantity * item.price, 0)

    const userProgressCtx = useContext(UserProgressContext)

    function handleCloseClick(){
        userProgressCtx.hideCart()
    }
    function handeleCheckoutClick(){
        userProgressCtx.showCheckout()
    }

    return <Modal classNa={'cart'} open={userProgressCtx.progress === 'showCart'} onClose={userProgressCtx.progress === 'showCart' ? handleCloseClick : null } >
        <ul>
            {cartCtx.items.map( item => <CartItemList key={item.id} 
                name={item.name} 
                quantity={item.quantity} 
                price={item.price} 
                onAdd={ () => cartCtx.addItem(item)}
                onRemove={ () => cartCtx.removeItem(item.id)}
                />
            )}
            <p className="cart-total"> { formatting(totalPrice) } </p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseClick} >close</Button>
                {cartCtx.items.length !== 0 && <Button onClick={handeleCheckoutClick}>Go to checkout</Button>}
            </p>
        </ul>
    </Modal>
}

export default Cart