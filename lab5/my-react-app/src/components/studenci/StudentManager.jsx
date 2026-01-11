import { useState } from 'react';
import Dodawanie from './Dodawanie';

function StudentManager() {
  const [students, setStudents] = useState([
    { imie: "Jan", nazwisko: "Kowalski", rocznik: 2001 },
    { imie: "Anna", nazwisko: "Nowak", rocznik: 2002 },
    { imie: "Piotr", nazwisko: "Zieliński", rocznik: 2000 }
  ]);

  function dodajStudenta(nowyStudent) {
    setStudents(prev => [...prev, nowyStudent]);
  }

  return (
    <div>
      <h2>Lista Studentów</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rocznik</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td>{s.imie}</td>
              <td>{s.nazwisko}</td>
              <td>{s.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <Dodawanie onAdd={dodajStudenta} />
    </div>
  );
}

export default StudentManager;