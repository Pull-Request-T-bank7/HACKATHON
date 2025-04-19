import './style/Header.css'
import Like from "./assets/image 6.png"
import Search from '../Search.jsx'
import Link from '../Link.jsx'
function Header(){
    return(
        <>
        <div className="header_container">
            <Link/>
            <Search/>
            <img 
                src={Like}
                alt=""
                className='like_img' />
        </div>
    </>
    )
}
export default Header