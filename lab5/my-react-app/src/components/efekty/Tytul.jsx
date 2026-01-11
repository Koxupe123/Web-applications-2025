import { useState, useEffect } from 'react';

function Tytul() {
  const [nowyTytul, setNowyTytul] = useState("");

  useEffect(() => {
    document.title = nowyTytul || "Default";
  }, [nowyTytul]);

  return (
    <div>
      <p>Zmień tytuł strony: </p>
      <input 
        type="text" 
        value={nowyTytul} 
        onChange={(event) => setNowyTytul(event.target.value)} 
        placeholder="Wpisz cos..."
      />
    </div>
  );
}

export default Tytul;