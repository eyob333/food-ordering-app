import img from '../assets/logo.jpg'

function Header(){

    return (
    <header id="main-header">
        <div id='title'>
            <img src={img} alt="logo-img" />
            <h1>react food</h1>
        </div>
        <button className=''> cart </button>
    </header> )
}

export default Header

