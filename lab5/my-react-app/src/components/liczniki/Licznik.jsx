import { useState } from "react";

function Licznik(){
    const [wartosc, setWartosc] = useState(0);
    function zwiekszLicznik(){
        setWartosc(wartosc + 1);
    }
    return(
        <div>
            <p>{wartosc}</p>
           <button onClick={zwiekszLicznik}>Dodaj 1
            </button> 
        </div>
    );

}
export default Licznik