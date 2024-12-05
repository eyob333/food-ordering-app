import Meals from "./Meals"
import { fetchMenu } from "../https"
import { useEffect, useState } from "react";
import useHttp from "../hooks/useHttp";
import Error from "./ui/Error";

const requestConfig = {}

function Menu(){
    // const [fetchedData, setFethcedData] = useState([])

    // useEffect( () => {
    //     async function fetchMenu() {
    //         const response = await fetch("http://localhost:3001/meals")
    //         const resData = await response.json()
    //         if( !response.ok ){
    //             throw new Error("faild to featch the meals!!") 
    //         }
    //         setFethcedData(resData)
    //     }
    //     fetchMenu()
    // }, [])

    const {data: fetchedData, isLoading, error} = useHttp('http://localhost:3001/meals', requestConfig, [])

    if ( isLoading){
        return <p className="center" > Fetching Meals... </p>
    }
    if (error){
        return <Error title={"faild to fetch"} message={error.message} />
    }
    
    return <>
        <ul id="meals">
            { fetchedData.map( data => 
                <Meals key={data.id} meal={data}  />
            )}
        </ul>
    </>
    
}


export default Menu
