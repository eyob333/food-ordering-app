
function Input({label, name, ...props }){

    return <>
        <label htmlFor={name}> {label} </label>
        <input required id={name} name={name} {...props}  />
    </>
}

export default Input