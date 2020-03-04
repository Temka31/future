import { useState } from "react";

export default function sortButton({title, onSort, onReset}) {
  const [sort, setSort] = useState("not");
  const handleClick = () => {
    switch (sort) {
      case "abc":
        setSort("cba");
        onSort(title, false);
        break;
      case "cba":
        setSort("not");
        onReset();
        break;
      case "not":
        setSort("abc");
        onSort(title, true);
        break;
    }
  };
return <button onClick={handleClick}>{title}:{String(sort)}</button>;
}
