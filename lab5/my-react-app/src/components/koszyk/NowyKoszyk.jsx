import Product from "./Produkt.jsx"
function NowyKoszyk(){
    const Produkty = ["jabłko", "banan", "piwo", "woda toaletowa", "golarka"];
    return(
        <>
        {Produkty.map((item,index) => <Product key={index} nazwa={item}/>)}    
        </>
    );

}
export default NowyKoszyk