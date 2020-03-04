import Row from "./Row";
const styles = {
  pagesNumber: {
    listStyle: "none",
    display: "flex",
    color: "blue",
    userSelect: "none",
    cursor: "pointer",
  }
};
export default function Table({ items, renderHeader, renderPageNumbers, onClickRow }) {
 
  return (
    <>
    <table>
      {renderHeader()}
      <tbody>
        {items.map(item => (
          <Row human={item} key={`${item.id}:${item.firstName}-${item.lastName}`} onClickRow={onClickRow}/>
        ))}
      </tbody>
    </table>
    <ul style={styles.pagesNumber}>
              {renderPageNumbers}
            </ul>
</>
  );
}
