function Ternary() {
  const a = true;
  const b = false;

  return (
    <>
      <div>
        {a ? "Stwierdzenie a jest prawdziwe" : "Stwierdzenie a jest falszywe"}
      </div>
      <div>
        {b ? "Stwierdzenie b jest prawdziwe" : "Stwierdzenie b jest falszywe"}
      </div>
    </>
  );
}

export default Ternary;