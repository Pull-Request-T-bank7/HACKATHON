import './style/Header.css'
import Like from "./assets/image 6.png"
import Search from '../components/Search.jsx'
import Link from '../components/Link.jsx'

function Header(){
    return(
        <>
        <header className="header_container">
            <Link/>
            <Search/>
            <img 
                src={Like}
                alt=""
                className='like_img' />
        </header>
    </>
    )
}
export default Header