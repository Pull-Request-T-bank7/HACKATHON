import Submit_img from "../Layout/assets/send-plane-2-fill.svg"
function Mailing(){
    return(
    <div className="mailing_container">
            <div className="subs_text">
                <p className="subscribe_text">подпишитесь на рассылку</p>
                <p className="subs_p">Подписывайтесь и получайте новости первыми!</p>
            </div>
        <div className="input-group">
        <input
            className='mail-form'
            type="text"
            placeholder="Введите ваш email"
            />
            <button className="submit-button">
                <img src={Submit_img} alt="" />
            </button>
        </div>
    </div>
    )
}
export default Mailing