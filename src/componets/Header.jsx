import { useContext } from 'react'
import CartContext from '../store/cartContext'
import img from '../assets/logo.jpg'
import Button from './ui/Button'


function Header(){
    const cartCtx = useContext(CartContext)
    const totalCartItems = cartCtx.items.reduce( (totalNumberOfitems, item) => totalNumberOfitems + item.quantity  , 0)

   
    return (
    <header id="main-header">
        <div id='title'>
            <img src={img} alt="logo-img" />
            <h1>react food</h1>
        </div>

        <nav>
            <Button textOnly> {`cart (${totalCartItems})` }  </Button>
        </nav>
    </header> )
}

export default Header

