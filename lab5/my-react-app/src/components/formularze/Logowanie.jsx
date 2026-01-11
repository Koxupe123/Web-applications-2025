import { useState } from "react";
function Logowanie(){
    const [login,setLogin] = useState("");
    const [haslo,setHaslo] = useState("");
    const [powtorzHaslo,setPowtorz] = useState("");
    const czyPuste = login === "" || haslo === "" || powtorzHaslo === "";
    function obsluga(){
        if (haslo !== powtorzHaslo){
            alert("hasla nie sa identyczna");
        }
        else{
            alert("zalogowano poprawnie")
        }
        }

    return(<>
        <div>
            <input 
            type="text" 
            value={login} 
            onChange={(event) =>setLogin(event.target.value)} 
            placeholder="Login"/>
            <p>Login: {login}</p>
            <br />
            <input 
            type="password" 
            value={haslo} 
            onChange={(event) =>setHaslo(event.target.value)} 
            placeholder="haslo"/>
            <p>haslo: {haslo}</p>
            <br />
            <input 
            type="password" 
            value={powtorzHaslo} 
            onChange={(event) => setPowtorz(event.target.value)} 
            placeholder="powtorz haslo"/>
            <p>powtorz haslo: {powtorzHaslo}</p>
            <button type="button" disabled={czyPuste} onClick={obsluga}>Logowanie</button>
        </div>
        </>
    );
}

export default Logowanie