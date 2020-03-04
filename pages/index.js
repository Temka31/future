import fetch from "isomorphic-unfetch";
import { useState, useMemo, useEffect } from "react";
import Table from "../components/table";
import SortButton from "../components/sortButton";
import Description from "../components/description";
import Add from "../components/add";
import Search from "../components/search";

const styles = {
  root: {
    margin: 0,
    width: "100%"
  },
  header: {
    border: "1px solid grey",
    width: "20%"
  }
};

export default function Index({ humans }) {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [selectedItemID, setSelectedItemID] = useState();
  const [selectedItemLastName, setSelectedItemLastName] = useState();
  const [loading, setLoading] = useState(true);
  const [resItems, setResItems] = useState([]);
  const headers = ["id", "firstName", "lastName", "email", "phone"];

  useEffect(() => {
    setLoading(true);
    fetch(
      "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
    )
      .then(response => response.json())
      .then(data => setResItems(data));
  }, []);

  const handleClick = event => {
    setCurrentPage(Number(event.target.id));
    setSelectedItemID();
  };

  const handleClickRow = (id,lastName) => {
    setSelectedItemID(id);
    setSelectedItemLastName(lastName);
  };

  const handleClickSearch = search => {
    if (search.length > 0) {
      setItems(
        items.filter(item => {
          return (
            item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
            item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
            item["email"].toLowerCase().includes(search.toLowerCase()) ||
            item["phone"].toLowerCase().includes(search.toLowerCase())
          );
        })
      );
    }
  };

  // const headers = useMemo(() => {
  //   if (items.length > 0) {
  //     return Object.keys(items[0]);
  //   } else {
  //     return [];
  //   }
  // }, [items]);

  useMemo(() => {
    setItems(resItems);
    setLoading(false);
  }, [resItems]);

  const renderHeader = () => {
    return (
      <thead>
        <tr>
          {headers.map(header => {
            return (
              <th style={styles.header} key={header}>
                <SortButton
                  title={header}
                  onReset={handleReset}
                  onSort={handleSort}
                />
              </th>
            );
          })}
        </tr>
      </thead>
    );
  };

  const currentItems = useMemo(() => {
    let indexOfLastItem = currentPage * itemsPerPage;
    let indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  }, [items, currentPage]);

  const addNewItem = newItem => {
    setResItems([...items, newItem]);
  };

  const handleReset = () => {
    setItems(resItems);
  };

  const handleSort = (name, reverse) => {
    const newItems = [...items];
    if (reverse) {
      newItems.sort((a, b) => {
        if (typeof a[name] === "string") {
          return a[name].localeCompare(b[name]);
        } else {
          return +a[name] - +b[name];
        }
      });
    } else {
      newItems.sort((a, b) => {
        if (typeof a[name] === "string") {
          return b[name].localeCompare(a[name]);
        } else {
          return +b[name] - +a[name];
        }
      });
    }
    setItems(newItems);
    setSelectedItemID();
  };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li key={number} id={number} onClick={handleClick}>
        {number}
      </li>
    );
  });

  const renderDescription = () => {
    if (selectedItemID > 0) {
      return (
        <Description
          item={
            currentItems[
              currentItems.findIndex(item => item.id == selectedItemID && item.lastName == selectedItemLastName)
            ]
          }
        />
      );
    }
  };

  return (
    <div style={styles.root}>
      {loading ? (
        <p>loading... </p>
      ) : (
        <>
          <Add addNewItem={addNewItem} />
          <Search onSearch={handleClickSearch} onReset={handleReset} />
          <Table
            items={currentItems}
            renderHeader={renderHeader}
            renderPageNumbers={renderPageNumbers}
            onClickRow={handleClickRow}
          />
          {renderDescription()}
        </>
      )}
    </div>
  );
}
