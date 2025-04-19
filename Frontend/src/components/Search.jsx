import Found from "../Layout/assets/search.svg"

function Search(){
    return(
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
    )
}
export default Search