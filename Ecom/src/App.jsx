import { Route, Routes } from "react-router-dom";
import Home from "../src/assets/Components/Home/Home"
import Sale from "./assets/Components/Sale/Sale"
import FAQ  from "./assets/Components/Faq/FAQ"
import Login from "./assets/Components/Login/Login"
import FlashSale from "./assets/Components/FlashSale/FlashSale";
function App() {
    return (
        <div>
            <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/sale" element = {<Sale/>}/>
    <Route path="/faq" element = {<FAQ/>}/>
    <Route path="/login" element = {<Login/>}/>
    <Route path="/FlashSale" element = {<FlashSale/>}/>
  
   </Routes>
        </div>
    );
}

export default App;
