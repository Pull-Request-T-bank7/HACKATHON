import Information from '../components/Information.jsx'
import Mailing from '../components/Mailing.jsx'
import './style/Footer.css'

function Footer(){
    return(
        <footer>
            <div className='footer_container'>
                <Information/>
                <Mailing/>
                <p className='createdBy'>Выполнено командой Pull Request</p>
            </div>
        </footer>
    )
}
export default Footer