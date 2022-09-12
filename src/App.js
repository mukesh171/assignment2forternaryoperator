import "./styles.css";
import TableOfStudent from "../TableOfStudent.js";

export default function App() {
  return (
    <div>
      <TableOfStudent tableData1={tableData} />
    </div>
  );
}

const tableData = [
  {
    id: 1,
    f_Name: "Mukesh1",
    l_Name: "khanna",
    Score: 39
  },
  {
    id: 2,
    f_Name: "Mukesh2",
    l_Name: "doe",
    Score: 40
  },
  {
    id: 3,
    f_Name: "Mukesh3",
    l_Name: "row",
    Score: 59
  },
  {
    id: 4,
    f_Name: "Mukesh4",
    l_Name: "choudhary",
    Score: 60
  }
];
