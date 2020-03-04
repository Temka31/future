export default function Row({ human, onClickRow }) {
  const styles = {
    root: {
      border: "1px solid grey",
      width: "20%"
    }
  };
 const handleClick = event =>{
  onClickRow (human.id,human.lastName);
}
  return (
    <tr id={human.id} onClick={handleClick}>
      <td style={styles.root}>{human.id}</td>
      <td style={styles.root}>{human.firstName}</td>
      <td style={styles.root}>{human.lastName}</td>
      <td style={styles.root}>{human.email}</td>
      <td style={styles.root}>{human.phone}</td>
    </tr>
  );
}
