
async function fetchMenu() {
    const response = await fetch("http://localhost:3001/meals")
    const resData = await response.json()
    
    if( !response.ok ){
        throw new Error("faild to featch the meals!!") 
    }
    return resData
    
}

async function postOrders(){
    const request = await fetch('https://localhost:3001/orders', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            // someValue
            })
        })
        //return 
}

async function fethchOrders(){
    const response = await fetch('htpps://localhost:3001/ordered-meals')
    const resData  = response.json()

    if ( !response.ok ){
        throw new Error("faild to fetch ")
    }

    return resData
}

export {fetchMenu, postOrders, fethchOrders}