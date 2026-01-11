import { useState, useEffect } from 'react';

function Odliczanie() {
  const [licznik, setLicznik] = useState(150); // 150 jednostek po 0.1s = 15.0s
  const [czyAktywny, setCzyAktywny] = useState(false);

  useEffect(() => {
    let interwal = null;

    if (czyAktywny && licznik > 0) {
      interwal = setInterval(() => {
        setLicznik((prev) => prev - 1);
      }, 100);
    } else {
      clearInterval(interwal);
    }

    return () => clearInterval(interwal);
  }, [czyAktywny, licznik]);

  const tekstPrzycisku = () => {
    if (licznik <= 0) return "Odliczanie zakończone";
    return czyAktywny ? "STOP" : "START";
  };

  return (
    <div>
      <div>
        {(licznik / 10).toFixed(1)} sek
      </div>
      <button 
        onClick={() => setCzyAktywny(!czyAktywny)} 
        disabled={licznik <= 0}
      >
        {tekstPrzycisku()}
      </button>
    </div>
  );
}

export default Odliczanie;