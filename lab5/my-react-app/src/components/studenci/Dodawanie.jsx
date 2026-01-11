import { useState } from 'react';

function Dodawanie({ onAdd }) {
  const [formData, setFormData] = useState({ imie: "", nazwisko: "", rocznik: "" });

  function handleSubmit(e) {
    e.preventDefault();
    
    if (formData.imie === "" || formData.nazwisko === "" || formData.rocznik === "") {
      alert("Wszystkie pola muszą być wypełnione!");
      return;
    }

    const rocznikLiczba = Number(formData.rocznik);
    if (isNaN(rocznikLiczba)) {
      alert("Rocznik musi być liczbą!");
      return;
    }

    onAdd({ ...formData, rocznik: rocznikLiczba });
    setFormData({ imie: "", nazwisko: "", rocznik: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Dodaj Studenta</h3>
      <input 
        placeholder="Imię" 
        value={formData.imie} 
        onChange={(e) => setFormData({...formData, imie: e.target.value})} 
      />
      <input 
        placeholder="Nazwisko" 
        value={formData.nazwisko} 
        onChange={(e) => setFormData({...formData, nazwisko: e.target.value})} 
      />
      <input 
        placeholder="Rocznik" 
        value={formData.rocznik} 
        onChange={(e) => setFormData({...formData, rocznik: e.target.value})} 
      />
      <button type="submit">Dodaj</button>
    </form>
  );
}

export default Dodawanie;