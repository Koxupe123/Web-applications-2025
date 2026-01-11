import { useState } from "react";
function Haslo(){
    const [haslo,setHaslo] = useState("");
    const [powtorzHaslo,setPowtorz] = useState("");
    let wiadomosc = "";
    if (haslo === "" && powtorzHaslo === "") {
        wiadomosc = "Prosze wprowadzic haslo";
    } else if (haslo !== powtorzHaslo) {
        wiadomosc = "Hasla nie sa zgodne";
    }
    return(<>
        <div>
            <br />
            <input 
            type="text" 
            value={haslo} 
            onChange={(event) =>setHaslo(event.target.value)} 
            placeholder="haslo"/>
            <p>haslo: {haslo}</p>
            <br />
            <input 
            type="text" 
            value={powtorzHaslo} 
            onChange={(event) => setPowtorz(event.target.value)} 
            placeholder="powtorz haslo"/>
            <p>powtorz haslo: {powtorzHaslo}</p>
            <div>
                {wiadomosc}
            </div>
        </div>
        </>
    );
}
export default Haslo