
function formatting( price ){ 
    const formatted = new Intl.NumberFormat('en-UN', { style:'currency', currency: 'USD' }).format(
    price,
)
return formatted
}


export {formatting}