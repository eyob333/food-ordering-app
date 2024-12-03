
function Button({ children, customCss = 'null', textOnly, ...props}){

    const cssStyle = textOnly? 'text-button' : 'button'
    return <button className={` ${cssStyle} ${customCss}`}  {...props}> { children} </button>
}

export default Button