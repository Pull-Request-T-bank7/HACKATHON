import "./Card.css";
import Cards from "./card.png";
import Haerth from "../Layout/assets/image 6.png";

function Card() {
  return (
    <>
      <div className="wrapperCard">
        <div className="containerCard">
          <p className="regOpenText">Регистрация открыта</p>
          <img src={Cards} className="imageCard" alt="" />
          <p className="regOpenText" id="headerOpenText">
            Viribus Unitis
          </p>
          <p className="regOpenText" id="dateText">
            20.04.2025
          </p>
          <p className="hashtagText">#разработка #фронтенд</p>
          <div className="buttonContainer">
            <button className="buttonsCard">Участвовать</button>
            <button className="buttonLike">
              <img src={Haerth} alt="" className="likeImage" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
