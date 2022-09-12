export default function TableOfStudent(tableData5) {
  // console.log(tableData);
  const { tableData1 } = tableData5;
  return (
    <div>
      <h1> Detail of Student score</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {tableData1.map((obj, i) => (
            // console.log(obj, "print it");
            <tr
              style={{
                backgroundColor:
                  obj.Score > 59 ? "green" : obj.Score >= 40 ? "yellow" : "red"
              }}
            >
              <th>{obj.id}</th>
              <td>{obj.f_Name}</td>
              <td>{obj.l_Name}</td>
              <td>{obj.Score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
