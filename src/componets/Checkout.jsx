import { useContext } from "react"
import CartContext from "../store/cartContext"
import UserProgressContext from "../store/userProgressContext"
import Modal from "./ui/Modal"
import { formatting } from "../utils/formatter"
import Input from "../../../forms_input/src/components/Input"
import Button from "./ui/Button"
import useHttp from "../hooks/useHttp"
import Error from "./ui/Error"

const requestConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'}
}

function Checkout(){
    const cartCtx = useContext( CartContext)
    const userProgressCtx = useContext( UserProgressContext)
    const totalPrice = cartCtx.items.reduce( (totalPrice, item) => totalPrice + item.quantity * item.price,0)

    const {data, isLoading: isSending, error, sendHttp, resetData} = useHttp('http://localhost:3001/orders', requestConfig)
    

    function handleCloseClick(){
        userProgressCtx.hideCheckout()
    }

    function handleFinish(){
        userProgressCtx.hideCheckout()
        cartCtx.clearItem()
        resetData()

    }
    
    function handOnSubmit(event){
        event.preventDefault()
        const fd = new FormData(event.target)
        const customerData = Object.fromEntries(fd.entries())

        sendHttp(JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: customerData,                    
                }
            })
        )

        // fetch('http://localhost:3001/orders', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         order: {
        //             items: cartCtx.items,
        //             customer: customerData,                    
        //             }
        //         })
        //     })
    }

    let actions =  <> 
        <Button textOnly onClick={handleCloseClick} >Close</Button>
        <Button>Submit Order</Button>
    </> 

    if (isSending){
        actions = 'sending your orders....'
    }

    if (data && !error){
        return <Modal open={userProgressCtx.progress == 'showCheckout'} onClose={handleFinish}>
            <h2>Success</h2>
            <p>your order is submited successfully</p>
            <p>well get back to you with your email, i a few minutes!</p>
            <p className="modal-actions">
                <Button onClick={handleFinish}>Okay</Button>
            </p>

        </Modal>
    }

    return <Modal open={userProgressCtx.progress == 'showCheckout'} onClose={handleCloseClick}>
        <form onSubmit={handOnSubmit}  >
            <h2>checkout</h2>
            <p>Total cost: {formatting(totalPrice)}</p>
            <Input name="name" label="Full Name" type="text" />
            <Input name="email" label="Email Adress" type="email" />
            <Input name="street" label="Street" type="text" />
            <div className="control-row">
                <Input name="postal-code" label="Postal Code" type="text" />
                <Input name="city" label="City" type="text" />
            </div>
            {error ? <Error title={'Oopes '} message={error.message} />: <p className="modal-actions">{actions} </p>}

        </form>
    </Modal>
}

export default Checkout