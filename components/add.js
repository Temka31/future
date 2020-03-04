import { useState } from "react";

export default function Add({ addNewItem }) {
  const [addItem, setAddItem] = useState(false);
  const [id, setId] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const handleClick = () => {
    setAddItem(true);
  };

  const handleChangeID = event => {
    setId(event.target.value);
  };
  const handleChangeFirstName = event => {
    setFirstName(event.target.value);
  };
  const handleChangeLastName = event => {
    setLastName(event.target.value);
  };
  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };
  const handleChangePhone = event => {
    setPhone(event.target.value);
  };
  const handleClickItem = () => {
    addNewItem({
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address:{
        streetAddress : "нет данных",
        city:"нет данных",
        state:"нет данных",
        zip:"нет данных",
        },
        description:"нет данных"
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Добавить</button>

      {addItem && (
        <form>
          id
          <input type="text" name="id" onChange={handleChangeID} />
          <br/>
          firstName
          <input
            type="text"
            name="firstName"
            onChange={handleChangeFirstName}
          />
          <br/>
          lastName
          <input type="text" name="lastName" onChange={handleChangeLastName} />
          <br/>
          email
          <input type="text" name="email" onChange={handleChangeEmail} />
          <br/>
          phone
          <input type="text" name="phone" onChange={handleChangePhone} />
          <br/>
        </form>
      )}
      {id && firstName && lastName && email && phone && (
        <button onClick={handleClickItem}> Добавить в таблицу </button>
      )}
    </div>
  );
}
