export default function Description({item}){
    return(
        <div>Выбран пользователь <b>{item.lastName}</b>
        <br/>
        Описание:
        <textarea defaultValue={item.description}>
        {/* {item.description} */}
        </textarea>
        <br/>
        Адрес проживания: <b>{item.address.streetAddress}</b>
        <br/>
        Город: <b>{item.address.city}</b>
        <br/>
        Провинция/штат: <b>{item.address.state}</b>
        <br/>
        Индекс: <b>{item.address.zip}</b>
        </div>
    )
}