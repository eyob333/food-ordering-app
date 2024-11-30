import Meals from "./Meals"
import { fetchMenu } from "../https"
import { useEffect, useState } from "react";


function Menu(){

    const [fetchedData, setFethcedData] = useState([])

    useEffect( () => {
        async function fetchMenu() {
            const response = await fetch("http://localhost:3001/meals")
            const resData = await response.json()
            if( !response.ok ){
                throw new Error("faild to featch the meals!!") 
            }
            setFethcedData( resData)
        }
        fetchMenu()
    }, [])

    return <>
    <ul id="meals">
        { fetchedData.map( data => 
            <Meals key={data.id} name={data.name} description={data.description} price={data.price} img={data.image}/>
        )}
    </ul>
    </>
    
}


export default Menu
