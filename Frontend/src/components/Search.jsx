import Found from "../Layout/assets/search.svg";
import Like from "../Layout/assets/image 6.png";

function Search() {
  return (
    <div className='search_like_container'>
      <div className='search_container'>
        <input
          className='search_form'
          type="text"
          placeholder="Найти мероприятие"
        />
        <img 
          src={Found} 
          className='search_icon'
          alt="Поиск"
        />
      </div>
      <img 
        src={Like}
        alt="Лайк"
        className='like_img'
      />
    </div>
  );
}
export default Search;