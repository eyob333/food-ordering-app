import lo from "../assets/logo.jpg"

function Meals(){

    return <>

    <div id="meals">

        <div className="meal-item">
            <img src={lo} alt="" />
            <h3>some food</h3>
            <div className="meal-item-price"> $455</div>

            <div className="meal-item-description"> 
                <article> bal bal bal balbal</article>
            </div>
            <div className="meal-item-actions">
                <button>add to cart </button>
            </div>
            
        </div>



    </div>

    </>
    
}


export default Meals