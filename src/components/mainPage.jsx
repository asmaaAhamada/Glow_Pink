import SidPar from "./adminPage/sidePar";
import HelloPage from "./helloPage";
import NavPage from "./navPar";
import ProductsPage from "./products";

export default function MainPage(){
    return(
        <>
        
        <NavPage/>
        <SidPar/>
        {/* <HelloPage/>
        <ProductsPage/> */}
        </>
    )
}