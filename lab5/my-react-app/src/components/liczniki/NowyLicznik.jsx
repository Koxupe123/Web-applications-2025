import { useState } from "react";
import Przycisk from "./Przycisk.jsx"

function Licznik(){
    const [wartosc, setWartosc] = useState(0);
    function zwiekszLicznik(){
        setWartosc(wartosc + 1);
    }
    return(
        <div>
            <p>{wartosc}</p>
            <Przycisk robota={zwiekszLicznik}/>
        </div>
    );

}
export default Licznik