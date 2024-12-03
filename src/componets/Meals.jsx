import { useContext } from "react"
import cartContext from "../store/cartContext"
import { formatting } from "../utils/formatter"
import Button from "./ui/Button"


function Meals({meal}){
    const cartCtx = useContext(cartContext)

    function addMealItem(){
        cartCtx.addItem(meal)
    }

    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3001/${meal.image}`} alt="" />
            <div>         
                <h3>{meal.name}</h3>
                <div className="meal-item-price"> {formatting(meal.price)}</div>
                <p className="meal-item-description"> {meal.description} </p>
            </div>
            <p className="meal-item-actions">
                <Button onClick={addMealItem} > add to cart </Button> 
            </p>            
        </article>
    </li>
}

export default Meals