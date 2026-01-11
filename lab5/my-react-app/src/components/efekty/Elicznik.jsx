import { useState, useEffect } from "react";

function Elicznik() {
  const [wartosc, setWartosc] = useState(0);

  useEffect(() => {
    console.log("Hello world");
    }, []);

  useEffect(() => {
    if (wartosc !== 0) {
      console.log(`Licznik zwiększył się do ${wartosc}`);
    }
    }, [wartosc]);

  function zwiekszLicznik() {
    setWartosc(wartosc + 1);
  }

  return (
    <div>
      <p>{wartosc}</p>
      <button onClick={zwiekszLicznik}>Dodaj 1</button>
    </div>
  );
}

export default Elicznik;