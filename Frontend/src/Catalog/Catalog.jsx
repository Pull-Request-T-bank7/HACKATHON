import "./Catalog.css";
import Card from "../Card/Card.jsx";

function Catalog() {
  return (
    <main className="wrapperCatalog">
      <div className="container">
        <p className="meets">Ближайшие мероприятия</p>
        <div className="cardsList">
          <Card className="paddingCard" />
          <Card className="paddingCard" />
          <Card className="paddingCard" />
          <Card className="paddingCard" />
          <Card className="paddingCard" />
        </div>
        <div className="wrapperLine">
            <hr width="100%" className='line' size="2"></hr>
        </div>
        
        <div className="wrapperMeeting">
        <p className="meets">Посмотрите мероприятия в своем Университете</p>

            <div className="containerInputs">
            <form className="formInfo">
                <label for="city" className="labelInfo">Город:</label>
                <select id="city" name="city" className="cityForm">
                <option value="Moscow">Москва</option>
                <option value="SPB">Санкт-Петербург</option>
                </select>
            </form>

            <form className="formInfo">
                <label for="universe" className="labelInfo">ВУЗ:</label>
                <select id="universe" name="universe" className="vuzForm">
                <option value="MPU">МПУ </option>
                <option value="SPB">СПБГУ</option>
                </select>
            </form>
            </div>

        </div>
        
        <div className="cardsList">
          <Card className="paddingCard" />
          <Card className="paddingCard" />
          <Card className="paddingCard" />
          <Card className="paddingCard" />
          <Card className="paddingCard" />
        </div>
        <div className="wrapperLine">
            <hr width="100%" className='line' size="2"></hr>
        </div>
        <div className=""></div>
      </div>
    </main>
  );
}
export default Catalog;
