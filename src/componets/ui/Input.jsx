
function Input({label, name, ...props }){

    return <>
        <label htmlFor={name}> {label} </label>
        <input id={name} required {...props} />
    </>
}

export default Input