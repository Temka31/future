import { useState } from "react";

export default function sortButton({title, onSort, onReset}) {
  const [sort, setSort] = useState("not");
  const handleClick = () => {
    switch (sort) {
      case "asc":
        setSort("desc");
        onSort(title, false);
        break;
      case "desc":
        setSort("not");
        onReset();
        break;
      case "not":
        setSort("asc");
        onSort(title, true);
        break;
    }
  };
return <button onClick={handleClick}>{title}:{String(sort)}</button>;
}
