// import { formatting } from 
import { formatting } from "../utils/formatter"

function Meals({name, description, img, price}){

    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3001/${img}`} alt="" />
            <div>         
                <h3>{name}</h3>
                <div className="meal-item-price"> {formatting(price)}</div>
                <p className="meal-item-description"> {description} </p>
            </div>
            <p className="meal-item-actions">
                <button>add to cart </button>
            </p>            
        </article>
    </li>
}

export default Meals