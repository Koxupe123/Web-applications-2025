import { useState } from "react"

function Formularz(){
    const [tekst,setTekst] = useState("");
    function Replikator(event){
        setTekst(event.target.value);
    }
    return(
        <div>
            <input 
            type="text" 
            value={tekst} 
            onChange={Replikator} 
            placeholder="pisz cos"/>
        <p>Wpisujesz: {tekst}</p>
        </div>

    );
}
export default Formularz