import { useContext } from "react"
import CartContext from "../store/cartContext"
import UserProgressContext from "../store/userProgressContext"
import Modal from "./ui/Modal"
import { formatting } from "../utils/formatter"
import Input from "../../../forms_input/src/components/Input"
import Button from "./ui/Button"

function Checkout(){
    const cartCtx = useContext( CartContext)
    const userProgressCtx = useContext( UserProgressContext)
    const totalPrice = cartCtx.items.reduce( (totalPrice, item) => totalPrice + item.quantity * item.price,0)

    function handleCloseClick(){
        userProgressCtx.hideCheckout()
    }
    
    function handOnSubmit(event){
        event.preventDefault()
        const fd = new FormData(event.target)
        const customerData = Object.fromEntries(fd.entries())
    }

    return <Modal open={userProgressCtx.progress == 'showCheckout'}>
        <form onSubmit={handOnSubmit} >
            <h2>checkout</h2>
            <p>Total cost: {formatting(totalPrice)}</p>
            <Input name="name" label="Full Name" type="text" />
            <Input name="email" label="Email Adress" type="email" />
            <Input name="street" label="Street" type="text" />
            <div className="control-row">
                <Input name="postal-code" label="Postal Code" type="text" />
                <Input name="city" label="City" type="text" />
            </div>

            <p className="modal-actions">
                <Button textOnly onClick={handleCloseClick} >Close</Button>
                <Button>Submit Order</Button>
            </p>

        </form>
    </Modal>
}

export default Checkout