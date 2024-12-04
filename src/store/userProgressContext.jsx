import {createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    showCart: ()=>{},
    hideCart: ()=>{},
    showCheckout: ()=>{},
    hideCheckout: ()=>{}
})

function UserProgressContextProvider({children}){
    const [userProgress, setUserProgress] = useState('')

    function showCart(){
        setUserProgress('showCart')
        
    }

    function hideCart(){
        setUserProgress('')
        
    }

    function showCheckout(){
        setUserProgress('showCheckout')
    }

    function hideCheckout(){
        setUserProgress('')
    }

    const userProgressContext = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }


    return <UserProgressContext.Provider value={userProgressContext} > {children} </UserProgressContext.Provider>
}

export {UserProgressContextProvider}
export default UserProgressContext