import './Registration.css'

function Registration() {
    return (
        <div className='regCont'>
            <section className="container">
                <h1>Регистрация</h1>
                <form className="registration-form">
                    <div className="registration-form-body">
                        <div className="registration-input-box">
                            <span className="details">ФИО</span>
                            <input type="text" placeholder="Введите ФИО" required />
                        </div>
                        <div className="registration-input-box">
                            <span className="details">Номер телефона</span>
                            <input type="tel" placeholder="Введите телефон" required />
                        </div>
                        <div className="registration-input-box">
                            <span className="details">E-mail</span>
                            <input type="email" name="email" placeholder="Введите E-mail" required />
                        </div>
                        <div className="registration-input-box">
                            <span className="details">Пароль</span>
                            <input type="password" placeholder="Придумайте пароль" required />
                        </div>
                        <div className="registration-input-box">
                            <span className="details">Курс</span>
                            <div className="custom-select">
                                <div className="select-btn">
                                    <span className="sBtn-text">Выберите курс</span>
                                    <i className="bx bx-chevron-down"></i>
                                </div>
                                <ul className="options">
                                    <li className="option"><span className="option-text">1 курс</span></li>
                                    <li className="option"><span className="option-text">2 курс</span></li>
                                    <li className="option"><span className="option-text">3 курс</span></li>
                                    <li className="option"><span className="option-text">4 курс</span></li>
                                    <li className="option"><span className="option-text">5 курс</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="registration-input-box">
                            <span className="details">ВУЗ</span>
                            <div className="custom-select">
                                <div className="select-btn">
                                    <span className="sBtn-text">Выберите ВУЗ</span>
                                    <i className="bx bx-chevron-down"></i>
                                </div>
                                <ul className="options">
                                    <li className="option"><span className="option-text">Московский политех</span></li>
                                    <li className="option"><span className="option-text">МГУ</span></li>
                                    <li className="option"><span className="option-text">МФТИ</span></li>
                                    <li className="option"><span className="option-text">ВШЭ</span></li>
                                    <li className="option"><span className="option-text">МИФИ</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <button className="registration-button" type="submit">Зарегистрироваться</button>
                </form>
            </section>
        </div>
    )
}

export default Registration


