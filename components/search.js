import { useState } from "react";

export default function Add({ onSearch, onReset}) {
 const [search, setSearch] = useState();

const handleChangeSearch = event => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    onSearch(search);
  };

   return (
    <div>
        <div>   
          Поиск
          <input type="text" name="search" onChange={handleChangeSearch} />
          <button onClick={handleClick}>Поиск</button>
          <button onClick={onReset}>Сбросить</button>
        </div>
      
     
    </div>
  );
}