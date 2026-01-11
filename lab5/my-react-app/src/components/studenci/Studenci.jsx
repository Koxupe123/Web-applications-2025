function Studenci() {
  const Students = [
    { imie: "Jan", nazwisko: "Kowalski", rocznik: 2001 },
    { imie: "Anna", nazwisko: "Nowak", rocznik: 2002 },
    { imie: "Piotr", nazwisko: "Zieliński", rocznik: 2000 }
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Rocznik</th>
        </tr>
      </thead>
      <tbody>
        {Students.map((student, index) => (
          <tr key={index}>
            <td>{student.imie}</td>
            <td>{student.nazwisko}</td>
            <td>{student.rocznik}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Studenci;